using JavaMasteryQuestApp.Model.DbContextModel;
using JavaMasteryQuestApp.Service.IUserServiceRepository;
using JavaMasteryQuestApp.Service.UserServiceRepository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DataContext>(option
    => option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), builder =>
    {
        builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
    }
    ));
builder.Services.AddControllers();
builder.Services.AddScoped<IStudentServiceRepository, StudentServiceRepository>();
builder.Services.AddScoped<IFacultyServiceRepository, FacultyServiceRepository>();
builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Capstone}/{action=Home}/{id?}");

app.Run();
