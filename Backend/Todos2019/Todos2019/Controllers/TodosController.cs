using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Todos2019.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {

        private static List<string> All = new List<string>()
        {
            "George",
            "Michale",
            "Brandon"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {

            return new List<string>() { "Joe","Michael","Donald"};
        }
        [HttpPost]
        public ActionResult<bool> Post([FromBody] string todo)
        {
            All.Add(todo);
            return true; 
        }

}
}