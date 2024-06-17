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

// Author: @fniyonshuti
document.getElementById('expiring-date').addEventListener('input', function () {
    const expiringDate = this.value;
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(expiringDate)) {
        document.getElementById('expiring-date-error').textContent = 'Invalid date format. Use MM/YY.';
    } else {
        document.getElementById('expiring-date-error').textContent = '';
    }
});

// Author: @fniyonshuti
document.getElementById('cvc').addEventListener('input', function () {
    const cvc = this.value;
    const regex = /^\d{3,4}$/;
    if (!regex.test(cvc)) {
        document.getElementById('cvc-error').textContent = 'CVC should be 3 or 4 digits.';
    } else {
        document.getElementById('cvc-error').textContent = '';
    }
});