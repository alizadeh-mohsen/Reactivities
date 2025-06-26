using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Persistence;

namespace Application.Profiles.Commands
{
    public class AddPhoto
    {
        public class Command : IRequest<Result<Photo>>
        {
            public required IFormFile PhotoFile { get; set; }

        }

        public class Handler(AppDbContext dbContext, IPhotoService photoService, IUserAccessor userAccessor) : IRequestHandler<Command, Result<Photo>>
        {
            public async Task<Result<Photo>> Handle(Command request, CancellationToken cancellationToken)
            {
                try
                {
                    var uploadResult = await photoService.UploadPhoto(request.PhotoFile);

                    var user = await userAccessor.GetUserAsync();
                    if (user == null) throw new Exception("User not found");

                    var photo = new Photo
                    {
                        Url = uploadResult.Url,
                        PublicId = uploadResult.PublicId,
                        UserId = user.Id
                    };
                    user.ImageUrl = photo.Url;
                    dbContext.Photos.Add(photo);
                    var result = await dbContext.SaveChangesAsync() > 0;

                    return result ?
                        Result<Photo>.Success(photo) :
                        Result<Photo>.Failure("Problem saving photo to DB", 400);
                }
                catch (Exception ex)
                {
                    return Result<Photo>.Failure($"Error uploading photo file: {ex.Message}", 500);
                }
            }
        }
    }
}
