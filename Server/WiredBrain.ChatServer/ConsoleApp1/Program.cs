using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Go().GetAwaiter().GetResult();
        }

        static async Task Go()
        {
            Console.ReadKey();
            var connection = new HubConnectionBuilder()
                .WithUrl("https://localhost:5001/chathub")
                .Build();
            try
            {
                await connection.StartAsync();
            }
            catch (Exception e)
            {

            }
            await connection.InvokeAsync("SendMessage", new { Id = "343" });
            Console.ReadKey();
        }
    }
}
