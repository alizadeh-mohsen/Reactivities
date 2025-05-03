using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities.Command
{
    public class EditActivity
    {
        public class Command : IRequest
        {
            public required Activity Activity { get; set; }
        }

        public class Handler(AppDbContext context,IMapper mapper) : IRequestHandler<Command>
        {

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                // Assuming you have a method to get the activity by ID
                var existingActivity = await GetActivityById(request.Activity.Id)
                    ?? throw new Exception("Activity not found");

                // Update the existing activity with the new values
                mapper.Map(request.Activity, existingActivity);
                // Save changes to the database
                await context.SaveChangesAsync(cancellationToken);
            }

            private async Task<Activity> GetActivityById(string id)
            {
                var activity = await context.Activities
                .AsNoTracking()
                   .FirstOrDefaultAsync(x => x.Id == id);
                return activity == null ? throw new Exception("Activity not found") : activity;
            }
        }
    }
}
