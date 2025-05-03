using Application.Activities.Command;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            var activities = await Mediator.Send(new GetActivityList.Query());
            return Ok(activities);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivityDetail(string id)
        {
            try
            {
                if (string.IsNullOrEmpty(id)) return BadRequest("Id cannot be null or empty");
                if (!Guid.TryParse(id, out var guidId)) return BadRequest("Invalid Id format");

                var activity = await Mediator.Send(new GetActivityDetails.Query { Id = id });

                return Ok(activity);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(Activity activity)
        {
            if (activity == null) return BadRequest("Invalid activity data");
            return await Mediator.Send(new CreateActivity.Command { Activity = activity });
        }


        [HttpPut]
        public async Task<ActionResult> EditActivity(Activity activity)
        {
            
            if (activity == null) return BadRequest("Invalid activity data");
            await Mediator.Send(new EditActivity.Command { Activity = activity });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string id)
        {
            if (string.IsNullOrEmpty(id)) return BadRequest("Id cannot be null or empty");
            if (!Guid.TryParse(id, out var guidId)) return BadRequest("Invalid Id format");
            await Mediator.Send(new DeleteActivity.Command { Id = id });
            return Ok();
        }

    }
}
