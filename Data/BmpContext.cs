using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Bmp;

namespace WebApplication1.Data
{
    public class BmpContext : DbContext
    {
        public BmpContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Bmp> Bmps { get; set; }

    }
}
