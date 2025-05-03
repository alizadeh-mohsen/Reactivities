using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(

    options => options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

//app.UseAuthorization();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<AppDbContext>();
        await context.Database.MigrateAsync();
        await DbInitializer.Initialize(context);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while seeding the database.");
    }
}
app.UseCors(
    x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000", "https://localhost:3000")
);
app.MapControllers();

app.Run();
