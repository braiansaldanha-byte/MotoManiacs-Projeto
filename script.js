document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const validUsername = 'Braian';
    const validPassword = '123';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        messageElement.textContent = '';
        messageElement.className = 'message';

        if (username === validUsername && password === validPassword) {
            messageElement.textContent = 'Login bem-sucedido!';
            messageElement.classList.add('success');
            
            setTimeout(() => {
                window.location.href = 'index2.html';
            }, 1000); 
            
        } else {
            messageElement.textContent = 'Usuário ou senha incorretos.';
            messageElement.classList.add('error');
        }
    });
});