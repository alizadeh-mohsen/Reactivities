using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles.Commands
{
    public class DeletePhoto
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required string PhotoId { get; set; }
        }

        public class Handler(AppDbContext dbContext, IPhotoService photoService, IUserAccessor userAccessor) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var photo = await dbContext.Photos.FirstOrDefaultAsync(x => x.Id == request.PhotoId);

                if (photo == null)
                    return Result<Unit>.Failure("Photo not found", 404);

                var deleteResult = await photoService.DeletePhoto(photo.PublicId);

                if (deleteResult.Error != null)

                    return Result<Unit>.Failure(deleteResult.Error.Message, 400);


                dbContext.Photos.Remove(photo);
                var result = await dbContext.SaveChangesAsync(cancellationToken) > 0;

                return result
                    ? Result<Unit>.Success(Unit.Value)
                    : Result<Unit>.Failure("Problem deleting photo from DB", 400);
            }
        }
    }
}
