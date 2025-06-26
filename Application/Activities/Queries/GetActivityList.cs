using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<Result<List<ActivityDto>>> { }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, Result<List<ActivityDto>>>
    {
        public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var activities = await context.Activities
                .ProjectTo<ActivityDto>(mapper.ConfigurationProvider)
                .OrderBy(x => x.Title)
                .ToListAsync(cancellationToken);

            if (activities.Any())
                return Result<List<ActivityDto>>.Success(activities);
            
            return Result<List<ActivityDto>>.Failure("No activities found", 400);
        }
    }
}
