const apiKey = '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';
const chatBox = document.getElementById('chat-box');
const userInputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function appendMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessageToChatGPT() {
    const userMessage = userInputElement.value;
    if (userMessage.trim() === '') return;

    appendMessage(userMessage, true);
    userInputElement.value = '';

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 50,
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

sendButton.addEventListener('click', sendMessageToChatGPT);

userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessageToChatGPT();
    }
});

appendMessage('Halo! Saya Chat Bot. Anda dapat mulai bertanya atau berbicara dengan saya.', false);