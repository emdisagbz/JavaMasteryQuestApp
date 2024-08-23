using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Model.Models.UserModels
{
	[Table("PhilSCADB_Faculty")]
	public class FacultyModel
	{
		[Key]
		public string FacultyId { get; set; } = String.Empty;
		public string Name { get; set; } = String.Empty;
        public int SubjectId { get; set; }
        public string Username { get; set; } = String.Empty;
		public string Password { get; set; } = String.Empty;
        public string StudentId { get; set; } = String.Empty;
    }
}
