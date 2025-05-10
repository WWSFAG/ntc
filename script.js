document.querySelector('.footer input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
        const messageText = e.target.value;
        const messageContainer = document.querySelector('.chat');
        
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `<p><strong>You:</strong> ${messageText}</p>`;
        
        messageContainer.appendChild(newMessage);
        e.target.value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});
