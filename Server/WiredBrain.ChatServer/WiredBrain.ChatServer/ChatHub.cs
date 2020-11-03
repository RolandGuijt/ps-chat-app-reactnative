using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace WiredBrain.ChatServer
{
    public class ChatHub : Hub
    {
        public Task SendMessage(ChatItem message)
        {
            return Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
