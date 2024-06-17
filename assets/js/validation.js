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