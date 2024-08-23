using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JavaMasteryQuestApp.Service.IUserServiceRepository
{
    public interface IStudentServiceRepository
    {
        public Task<int> GetStudent(string sid, string password);
    }
}
