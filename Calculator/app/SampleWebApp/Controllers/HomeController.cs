using Calculator.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net.Http;
using Newtonsoft.Json;




namespace Calculator.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View(new CalculatorModel());
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public async Task<ViewResult> Calculate(CalculatorModel model)
        {
            var client = new HttpClient();
            HttpResponseMessage response = null;
            var timeout = TimeSpan.FromSeconds(5); // Set your desired timeout duration
            var cts = new CancellationTokenSource();
            cts.CancelAfter(timeout);

            switch (model.Operation)
            {
                case "Add":
                    {
                        try
                        {
                            response = await client.GetAsync("http://localhost:3000/suma/?numero1=" + model.FirstNumber + "&numero2=" + model.SecondNumber);
                            var json = await response.Content.ReadAsStringAsync();
                            var result = JsonConvert.DeserializeObject<SumResponse>(json);
                            Console.WriteLine(result);
                            model.Result = result.Resultado;
                        }
                        catch (OperationCanceledException ex)
                        {
                            model.ErrorMessage = "Request timed out";
                        }
                        catch (Exception ex)
                        {
                            model.ErrorMessage = "An error occurred";
                        }

                        break;
                    }
                   
                case "Subtract":
                    {
                        try
                        {
                            response = await client.GetAsync("http://localhost:5000/Resta/?numero1=" + model.FirstNumber + "&numero2=" + model.SecondNumber);
                            var json = await response.Content.ReadAsStringAsync();
                            var result = JsonConvert.DeserializeObject<SumResponse>(json);
                            Console.WriteLine(result);
                            model.Result = result.Resultado;
                        }
                        catch (OperationCanceledException ex)
                        {
                            model.ErrorMessage = "Request timed out";
                        }
                        catch (Exception ex)
                        {
                            model.ErrorMessage = "An error occurred";
                        }

                        break;
                    }
                   
                    
                case "Multiply":
                   {
                        try
                        {
                            response = await client.GetAsync("http://localhost:4000/Multiplica/?numero1=" + model.FirstNumber + "&numero2=" + model.SecondNumber);
                            var json = await response.Content.ReadAsStringAsync();
                            var result = JsonConvert.DeserializeObject<SumResponse>(json);
                            Console.WriteLine(result);
                            model.Result = result.Resultado;
                        }
                        catch (OperationCanceledException ex)
                        {
                            model.ErrorMessage = "Request timed out";
                        }
                        catch (Exception ex)
                        {
                            model.ErrorMessage = "An error occurred";
                        }

                        break;
                    }
            }

            return View("Index", model);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}