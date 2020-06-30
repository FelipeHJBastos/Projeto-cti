using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Projeto_cti.Models;

namespace Projeto_cti.Controllers
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
            List<Leituras> listaLeituras = new List<Leituras>();
            Leituras list1 = new Leituras(){
                Hora = "13:00",
                Umidade = 63,
                Temperatura = 23.03,
            };
            listaLeituras.Add(list1);

            Leituras list2 = new Leituras(){
                Hora = "14:00",
                Umidade = 63,
                Temperatura = 23.6,
            };
            listaLeituras.Add(list2);

            Leituras list3 = new Leituras(){
                Hora = "15:00",
                Umidade = 62,
                Temperatura = 24.01,
            };
            listaLeituras.Add(list3);

            Leituras list4 = new Leituras(){
                Hora = "16:00",
                Umidade = 66,
                Temperatura = 23.25,
            };
            listaLeituras.Add(list4);

            Leituras list5 = new Leituras(){
                Hora = "17:00",
                Umidade = 66,
                Temperatura = 24.01,
            };
            listaLeituras.Add(list5);
            return View(listaLeituras);
        }
    }
}
