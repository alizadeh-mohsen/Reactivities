using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles.Queries
{
    public class GetProfilePhotos
    {
        public class Query:IRequest<Result<List<Photo>>>
        {
            public required string UserId { get; set; }
        }
        public class Handler(AppDbContext context) : IRequestHandler<Query, Result<List<Photo>>>
        {
            public async Task<Result<List<Photo>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var photos = await context.Photos
                    .Where(p => p.UserId == request.UserId)
                    .ToListAsync(cancellationToken);
                
                if (photos.Any())
                    return Result<List<Photo>>.Success(photos);
               
                return Result<List<Photo>>.Failure("No photos found for this user", 404);
            }
        }
    }
}
