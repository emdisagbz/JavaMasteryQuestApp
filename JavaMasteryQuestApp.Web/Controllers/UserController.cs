using JavaMasteryQuestApp.Service.IUserServiceRepository;
using Microsoft.AspNetCore.Mvc;

namespace JavaMasteryQuestApp.Web.Controllers
{
  
    public class UserController : Controller
    {
        private readonly IFacultyServiceRepository _faculty;
        private readonly IStudentServiceRepository _student;
        public UserController(IFacultyServiceRepository faculty, IStudentServiceRepository student)
        {
			_faculty = faculty;
            _student = student;
        }    
        public IActionResult Index()
        {
            return View();
        }
		#region signUp
		public IActionResult signUp()
        {
            return View();
        }
		#endregion
		#region profLogIn
		public IActionResult profLogIn()
        {
            return View();
        }
		[HttpGet]
		public JsonResult GetFacultyById(string fid, string password)
		{
			try
			{
				var result = _faculty.GetFaculty(fid, password);
				return new JsonResult(result);
			}
			catch (Exception ex)    
			{

			}
			return null;
		}
		#endregion
		#region studentLogin
		public IActionResult studentLogIn()
        {
            try
            {
                //var result = GetStudentById(sid,password);
                return View();    
            }
            catch (Exception ex)
            {

            }
            return View();
        }
	
		[HttpGet]
        public JsonResult GetStudentById(string sid, string password)
        {
            try
            {
                var result = _student.GetStudent(sid, password);
                return new JsonResult(result);
            }
            catch (Exception ex)
            {

            }
            return null;
        }
		#endregion
	}
}
