using Application.Core;
using Application.Profiles.Commands;
using Application.Profiles.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProfilesController : BaseApiController
    {
        [HttpPost("add-photo")]
        public async Task<ActionResult> AddPhoto(IFormFile photo)
        {
            return HandleResult(await Mediator.Send(new AddPhoto.Command { PhotoFile = photo }));
        }

        [HttpGet("photos/{id}")]
        public async Task<ActionResult<List<Photo>>> GetUserPhotos(string id)
        {
            return HandleResult(await Mediator.Send(new GetProfilePhotos.Query { UserId = id }));
        }

        [HttpDelete("photos/{id}")]
        public async Task<ActionResult> DeletePhoto(string id)
        {
            return HandleResult(await Mediator.Send(new DeletePhoto.Command { PhotoId = id }));
        }
    }
}
