using JavaMasteryQuestApp.Model.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Service.IUserServiceRepository
{
	public interface IFacultyServiceRepository
	{
		Task<int> GetFaculty(string fid, string password);
		List<FacultyDashboardDTO> GetFacultyDashboard(string fid);
	}
}
