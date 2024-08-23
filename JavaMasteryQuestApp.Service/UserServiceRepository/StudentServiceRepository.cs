using JavaMasteryQuestApp.Model.DbContextModel;
using JavaMasteryQuestApp.Service.IUserServiceRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Service.UserServiceRepository
{
    public class StudentServiceRepository : IStudentServiceRepository
    {
        private readonly DataContext db;
        public StudentServiceRepository(DataContext db)
        {
            this.db = db;
        }
        public async Task<int> GetStudent(string sid, string password)
        {
            try
            {
                var result = db.Student.Where(x => x.StudentId == sid && x.Password == password).Count();
                return result;
            }
            catch (Exception ex)
            {

            }
            
            return 0;
        }
    }
}
