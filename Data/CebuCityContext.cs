using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Ccs;

namespace WebApplication1.Data
{
    public class CebuCityContext : DbContext
    {
        public CebuCityContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Ccs> Ccss { get; set; }
    }
}
