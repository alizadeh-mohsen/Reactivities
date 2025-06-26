using Application.Interfaces;
using Application.Profiles.DTOs;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;


namespace Infrastructure.Photos
{
    public class PhotoService : IPhotoService
    {
        private readonly Cloudinary _cloudinary;

        public PhotoService(IOptions<CloudinaryConfigs> options)
        {
            var account = new Account
            {
                ApiKey = options.Value.ApiKey,
                ApiSecret = options.Value.ApiSecret,
                Cloud = options.Value.CLoudName
            };

            _cloudinary = new Cloudinary(account);
        }

        public async Task<PhotoUploadResultDto> UploadPhoto(IFormFile photoFile)
        {
            try
            {
                if (photoFile.Length > 0)
                {

                    await using var stream = photoFile.OpenReadStream();
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(photoFile.FileName, stream),
                        Folder = "Events",
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    var uploadResult = await _cloudinary.UploadAsync(uploadParams);

                    if (uploadResult.Error != null)
                    {
                        throw new Exception(uploadResult.Error.Message);
                    }
                    return new PhotoUploadResultDto
                    {
                        PublicId = uploadResult.PublicId,
                        Url = uploadResult.SecureUrl.ToString()
                    };
                }
                else
                {
                    throw new ArgumentException("Photo file is empty");
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public async Task<DeletionResult> DeletePhoto(string publicId)
        {
            try
            {
                var deleteParams = new DeletionParams(publicId)
                {
                    ResourceType = ResourceType.Image
                };
                var result = await _cloudinary.DestroyAsync(deleteParams);
                if (result.Error != null)
                {
                    throw new Exception(result.Error.Message);
                }
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
