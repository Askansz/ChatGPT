const socket = new WebSocket('wss://your-vercel-app.vercel.app'); // Replace with your Vercel app URL

socket.addEventListener('open', (event) => {
    console.log('Connected to the server');
});

socket.addEventListener('message', (event) => {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p>${event.data}</p>`;
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        socket.send(message);
        messageInput.value = '';
    }
}
