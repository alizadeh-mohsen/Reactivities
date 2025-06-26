using Application.Profiles.DTOs;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IPhotoService
    {
        Task<PhotoUploadResultDto> UploadPhoto(IFormFile photo);
        Task<DeletionResult> DeletePhoto(string publicId);
    }

}
