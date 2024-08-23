using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Model.Models.UserModels
{
    [Table("PhilSCADB_Student")]
    public class StudentModel
    {
        [Key]
        public string StudentId { get; set; } = String.Empty;
        public string Name { get; set; } = String.Empty;
        public int SubjetId { get; set; }
        public int YearId { get; set; }
        public int Section { get; set; }
        public int CourseId { get; set; }
        public string Username { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
    }
}
