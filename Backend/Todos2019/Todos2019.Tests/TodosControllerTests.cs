using System;
using System.Linq;
using Todos2019.Controllers;
using Xunit;

namespace Todos2019.Tests
{
    public class TodosControllerTests
    {
        [Fact]
        public void Todos_Controller_Test()
        {

            var undertest = new TodosController();

            var result = undertest.Get();
            
            Assert.Equal(3,result.Value.Count());
        }
        [Fact]
        public void Post_Creates_New_todo()
        {
            var underTest = new TodosController();


            var result = underTest.Post("Hello World");

            Assert.True(result.Value);
        }

        [Fact]
        public void Post_Increases_Todo_Count()
        {
            var underTest = new TodosController();

            underTest.Post("Helloo");

            var result = underTest.Get();

            Assert.Equal(3, result.Value.Count());
        }
    }
}
