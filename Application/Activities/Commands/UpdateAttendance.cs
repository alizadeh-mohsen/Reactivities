using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Commands
{
    public class UpdateAttendance
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required string ActivityId { get; set; }

        }

        public class Handler(IUserAccessor userAccessor, AppDbContext dbContext) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await userAccessor.GetUserAsync();
                if (user == null) return Result<Unit>.Failure("User not found", 404);

                var activity = await dbContext.Activities.FindAsync(request.ActivityId);
                if (activity == null) return Result<Unit>.Failure("Activity not found", 404);

                ActivityAttendee attendee = await dbContext.ActivityAttendees
                      .FirstAsync(x => x.UserId == user.Id && x.ActivityId == request.ActivityId, cancellationToken);
               
                if (attendee == null)
                {
                    attendee = new ActivityAttendee
                    {
                        UserId = user.Id,
                        ActivityId = request.ActivityId
                    };
                    dbContext.ActivityAttendees.Add(attendee);
                }
                else
                {
                    if (attendee.IsHost)
                        activity.IsCancelled = !activity.IsCancelled;
                    else
                        dbContext.ActivityAttendees.Remove(attendee);
                }

                return await dbContext.SaveChangesAsync(cancellationToken) > 0
                    ? Result<Unit>.Success(Unit.Value)
                    : Result<Unit>.Failure("Failed to update attendance", 400);
            }
        }
    }
}
