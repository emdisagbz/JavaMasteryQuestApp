using JavaMasteryQuestApp.Model.DbContextModel;
using JavaMasteryQuestApp.Model.DTO;
using JavaMasteryQuestApp.Service.IUserServiceRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Service.UserServiceRepository
{
	public class FacultyServiceRepository : IFacultyServiceRepository
	{
		private readonly DataContext db;
		public FacultyServiceRepository(DataContext db)
		{
			this.db = db;
		}
		public async Task<int> GetFaculty(string fid, string password)
		{
			try
			{
				var result = db.Faculty.Where(x => x.FacultyId == fid && x.Password == password).Count();
				return result;
			}
			catch (Exception ex)
			{

			}
			return 0;
		}

		public List<FacultyDashboardDTO> GetFacultyDashboard(string fid)
		{
			var list = new List<FacultyDashboardDTO>();
			try
			{
				list = db.FacultyDashboards.FromSqlRaw<FacultyDashboardDTO>($"EXEC PhilSCADB_GetFacultyDashboard").ToList();
				return list;
			}
			catch (Exception ex)
			{
			}
			return null;
		}
	}
}
