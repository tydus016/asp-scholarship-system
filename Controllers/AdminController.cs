using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileSystemGlobbing;
using WebApplication1.Data;
using WebApplication1.Models.Applicants;
using WebApplication1.Models.Bmp;
using WebApplication1.Models.Ccs;
using WebApplication1.Models.Schoolyear;

namespace WebApplication1.Controllers
{
    public class AdminController : Controller
    {
        private readonly AllContext _allContext;

        public AdminController(AllContext allContext)
        {
            this._allContext = allContext;
        }

        [HttpGet]
        public IActionResult Login() { return View(); }
        public async Task<IActionResult> SchoolYear() {
            var data = await _allContext
                .schoolyear
                .OrderByDescending(x => x.year_end)
                .ToListAsync();

            return View(data);
        }

        [HttpGet]
        public async Task<IActionResult> Data(string id)
        {
            var data = await _allContext.applicants.Where(x => x.school_year == id && x.status == 0).ToListAsync();

            return View(data);
        }

        public async Task<IActionResult> Archives(string id)
        {
            var data = await _allContext.applicants.Where(x => x.status == 1).ToListAsync();

            return View(data);
        }

        [HttpGet]
        public async Task<IActionResult> Ccs()
        {
            var ccss = await _allContext.Ccss.ToListAsync();

            return View(ccss);
        }

        public IActionResult UpdateStatus(Guid id)
        {
            var rowToUpdate = _allContext.applicants.Find(id);
            if (rowToUpdate != null)
            {
                rowToUpdate.status = 1;

                _allContext.SaveChanges();
            }

            return Json(new { status = true, message = "Updated successfully" });
        }

        public IActionResult PreviewData(string id)
        {
            var specificData = _allContext.applicants.FirstOrDefault(x => x.id == Guid.Parse(id));

            return View(specificData);
        }

        public IActionResult ViewCcs(string id)
        {
            var specificData = _allContext.Ccss.FirstOrDefault(x => x.Id == Guid.Parse(id));

            return View(specificData);
        }

        public IActionResult ViewBmp(string id)
        {
            var specificData = _allContext.Bmps.FirstOrDefault(x => x.Id == Guid.Parse(id));

            return View(specificData);
        }

        public async Task<IActionResult> Batang()
        {
            var batang = await _allContext.Bmps.ToListAsync();

            return View(batang);
        }

        public IActionResult Report()
        {
            int cebucity = _allContext.Ccss.Count();
            int batang = _allContext.Bmps.Count();
            int totalcount = cebucity + batang;

            ViewBag.TotalCount = totalcount;
            ViewBag.CebuCity = batang;
            ViewBag.Bmp = totalcount;

            return View();
        }

        public async Task<IActionResult> addSchoolYear(string year_start, string year_end)
        {
            var stats = 0;
            try
            {
                var filesEntity = new Schoolyear()
                {
                    id = Guid.NewGuid(),
                    school_year = year_start,
                    year_start = year_start,
                    year_end = year_end,

                };

                _allContext.schoolyear.Add(filesEntity);

                await _allContext.SaveChangesAsync();
                stats = 1;
            }
            catch
            {
                stats = 0;
            }

            var result = new
            {
                message = (stats == 1) ? "School year added successfully." : "Error while submitting form.",
                status = true
            };
            return Json(result);
        }
    }
}
