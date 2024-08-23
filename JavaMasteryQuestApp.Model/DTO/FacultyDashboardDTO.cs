using JavaMasteryQuestApp.Model.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Model.DTO
{
    public class FacultyDashboardDTO
	{
        [Key]
        public int Id{ get; set; }
        public string FacultyId { get; set; } = String.Empty;
		public string FacultyName { get; set; } = String.Empty;
		public string SubjectCode { get; set; } = String.Empty;
		public string SubjectDescription { get; set; } = String.Empty;
		public string StudentId { get; set; } = String.Empty;
		public string CourseCode { get; set; } = String.Empty;
		public string StudentName { get; set; } = String.Empty;
		public string StudentYear { get; set; } = String.Empty;
    }
    [Keyless]
    public class FacultyDashboardViewModel : SearchModel
	{
		public List<FacultyDashboardDTO> FacultyDashboard { get; set; }
		public FacultyDashboardViewModel()
		{
			FacultyDashboard = new List<FacultyDashboardDTO>();
		}
	}
}
