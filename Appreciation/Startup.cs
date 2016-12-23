using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Appreciation.Startup))]
namespace Appreciation
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
