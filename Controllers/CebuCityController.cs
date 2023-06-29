using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Models.Ccs;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Applicants;

namespace WebApplication1.Controllers
{
    public class CebuCityController : Controller
    {
        private readonly AllContext _context;

        public CebuCityController(AllContext context)
        {
            this._context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Add(AddCcsViewModel model)
        {
            var ccs = new Ccs()
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

            await _context.Ccss.AddAsync(ccs);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> SubmitApplication(IFormFile file, string firstname, string lastname, string middlename, string elementary, string junior, string senior, string mother, string father, string address, string dob, string pob, string contact_no, string email, int bmp, int ccs, int dole, string school_year)
        {
            var stats = 0;
            try
            {
                string fileName = file.FileName;
                fileName = Path.GetFileName(fileName);
                string uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/files", fileName);

                using (var stream = new FileStream(uploadPath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                DateTime currentDate = DateTime.Now;

                var filesEntity = new Applicants()
                {
                    id = Guid.NewGuid(),
                    first_name = firstname,
                    last_name = lastname,
                    middle_name = middlename,
                    elementary = elementary,
                    jhs = junior,
                    shs = senior,
                    mother = mother,
                    father = father,
                    address = address,
                    dob = dob,
                    pob = pob,
                    contact = contact_no,
                    email = email,
                    filename = fileName,
                    bmp = bmp,
                    ccs = ccs,
                    dole = dole,
                    school_year = school_year,
                    status = 0,
                    date = currentDate.ToString("yyyy-MM-dd")

                };

                _context.applicants.Add(filesEntity);

                await _context.SaveChangesAsync();
                stats = 1;
            }
            catch
            {
                stats = 0;
            }

            var result = new
            {
                message = (stats == 1) ? "Application submitted successfully." : "Error while submitting form.",
                status = (stats == 1)
            };
            return Json(result);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
