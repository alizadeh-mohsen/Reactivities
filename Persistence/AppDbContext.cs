using Domain;
using Microsoft.EntityFrameworkCore;


namespace Persistence
{
    public class AppDbContext :DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Activity>()
        //        .Property(a => a.Id)
        //        .ValueGeneratedOnAdd();
        //}
        public DbSet<Activity> Activities { get; set; }
    }
}
