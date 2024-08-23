using JavaMasteryQuestApp.Model.DTO;
using JavaMasteryQuestApp.Service.IUserServiceRepository;
using Microsoft.AspNetCore.Mvc;

namespace JavaMasteryQuestApp.Web.Controllers
{
	public class DashboardController : Controller
	{
		private readonly IFacultyServiceRepository _faultyServiceRepository;
		public DashboardController(IFacultyServiceRepository facultyServiceRepository)
		{
			_faultyServiceRepository = facultyServiceRepository;
		}
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult profDashboard()
		{
			return profDashboard(new FacultyDashboardViewModel());
		}

		[HttpPost]
		public ActionResult profDashboard(FacultyDashboardViewModel viewModel)
		{
			try
			{			
				viewModel.FacultyDashboard = _faultyServiceRepository.GetFacultyDashboard(viewModel.FacultyId);
				return View(viewModel);
			}
			catch (Exception ex)
			{

			}
			return View(viewModel);
		}
	}
}
