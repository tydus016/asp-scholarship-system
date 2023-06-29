using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Applicants;
using WebApplication1.Models.Bmp;
using WebApplication1.Models.Ccs;
using WebApplication1.Models.Domain;
using WebApplication1.Models.Schoolyear;

namespace WebApplication1.Data
{
    public class AllContext : DbContext
    {
        public AllContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Bmp> Bmps { get; set; }
        public DbSet<Ccs> Ccss { get; set; }
        public DbSet<Applicants> applicants { get; set; }
        public DbSet<Schoolyear> schoolyear { get; set; }

    }
}
