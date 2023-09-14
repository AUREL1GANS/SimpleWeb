

// Ganti dengan API key Anda
const apiKey = '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';
const chatBox = document.getElementById('chat-box');
const userInputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Fungsi untuk menampilkan pesan pengguna dan respons ChatGPT
function appendMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Agar selalu terlihat pesan terbaru
}

// Fungsi untuk mengirim pesan ke ChatGPT
async function sendMessageToChatGPT() {
    const userMessage = userInputElement.value;
    if (userMessage.trim() === '') return;

    appendMessage(userMessage, true);
    userInputElement.value = '';

    try {
        // Kirim permintaan ke API ChatGPT
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 50, // Jumlah maksimal token dalam respons
            }),
        });

        if (!response.ok) throw new Error('Error fetching response from ChatGPT');

        const data = await response.json();
        const botMessage = data.choices[0].text;

        appendMessage(botMessage, false);
    } catch (error) {
        console.error(error);
        appendMessage('Terjadi kesalahan dalam mengambil respons dari server.', false);
    }
}

// Tambahkan event listener untuk tombol Kirim
sendButton.addEventListener('click', sendMessageToChatGPT);

// Tambahkan event listener untuk tombol Enter
userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessageToChatGPT();
    }
});

// Contoh pesan selamat datang
appendMessage('Halo! Saya Chat Bot. Anda dapat mulai bertanya atau berbicara dengan saya.', false);
