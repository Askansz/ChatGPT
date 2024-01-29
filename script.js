const socket = new WebSocket('https://vercel.com/askanszs-projects/chat-gpt/CkbdAeJN18QCdc9nyeUwKm3UtYvf'); // Replace with your Vercel app URL

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
