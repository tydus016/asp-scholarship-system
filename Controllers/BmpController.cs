using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Bmp;

namespace WebApplication1.Controllers
{
    public class BmpController : Controller
    {
        private readonly AllContext _context;

        public BmpController(AllContext context)
        {
            this._context = context;
        }
        public async Task<IActionResult> Add(AddCcsViewModel model)
        {
            var ccs = new Bmp()
            {
                Id = Guid.NewGuid(),
                FirstName = model.FirstName,
                MiddleName = model.MiddleName,
                LastName = model.LastName,
                Elementary = model.Elementary,
                Junior = model.Junior,
                Senior = model.Senior,
                Mother = model.Mother,
                Father = model.Father,
                Address = model.Address,
                DateOfBirth = model.DateOfBirth,
                PlaceOfBirth = model.PlaceOfBirth,
                ContactNumber = model.ContactNumber,
                Email = model.Email,
            };

            await _context.Bmps.AddAsync(ccs);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index");
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
