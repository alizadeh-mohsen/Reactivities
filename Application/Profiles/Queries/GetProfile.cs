using Application.Core;
using Application.Profiles.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles.Queries
{
    public class GetProfile
    {
        public class Query : IRequest<Result<UserProfileDto>>
        {
            public required string UserId { get; set; }
        }

        public class Handler(AppDbContext dbContext, IMapper mapper) : IRequestHandler<Query, Result<UserProfileDto>>
        {
            public async Task<Result<UserProfileDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await dbContext.Users.ProjectTo<UserProfileDto>(mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.UserId);

                return user != null
                    ? Result<UserProfileDto>.Success(user)
                    : Result<UserProfileDto>.Failure("User not found", 404);
            }
        }
    }
}
