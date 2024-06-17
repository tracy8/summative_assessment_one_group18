// Author:  @patrickniyogitare28
document.getElementById('full-name').addEventListener('input', function () {
    const fullName = this.value;
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(fullName)) {
        document.getElementById('full-name-error').textContent = 'Full Name should contain letters and spaces only.';
    } else {
        document.getElementById('full-name-error').textContent = '';
    }
});

// Author: @dmutoni
document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format.';
    } else {
        document.getElementById('email-error').textContent = '';
    }
});