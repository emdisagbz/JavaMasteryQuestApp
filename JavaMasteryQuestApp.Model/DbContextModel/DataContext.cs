using System;
using System.Collections.Generic;
//using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JavaMasteryQuestApp.Model.DTO;
using JavaMasteryQuestApp.Model.Models.UserModels;
using Microsoft.EntityFrameworkCore;

namespace JavaMasteryQuestApp.Model.DbContextModel
{
    public class DataContext : DbContext
    {
        public DataContext()
        {

        }
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {

        }

        public DbSet<StudentModel> Student { get; set; }
        public DbSet<FacultyModel> Faculty { get; set; }
        public DbSet<FacultyDashboardDTO> FacultyDashboards { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer("Name=DefaultConnection");
    }
}
