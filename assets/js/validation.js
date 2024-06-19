// Function that validates the full name
document.getElementById('full-name').addEventListener('input', function () {
    const fullName = this.value;
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(fullName)) {
        document.getElementById('full-name-error').textContent = 'Full Name should contain letters and spaces only.';
    } else {
        document.getElementById('full-name-error').textContent = '';
    }
});

// Function that validates email
document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format.';
    } else {
        document.getElementById('email-error').textContent = '';
    }
});

// Function to Validate Shipping Address
document.getElementById('address').addEventListener('input', function () {
    const address = this.value;
    const regex = /^[a-zA-Z0-9\s,.-]+$/;
    if (!regex.test(address)) {
        document.getElementById('address-error').textContent = 'Invalid address format.';
    } else {
        document.getElementById('address-error').textContent = '';
    }
});

// Function to valudate the credit card number
document.getElementById('card-number').addEventListener('input', function () {
    const cardNumber = this.value;
    const regex = /^\d{16}$/;
    if (!regex.test(cardNumber)) {
        document.getElementById('card-number-error').textContent = 'Invalid credit card number format.';
    } else {
        document.getElementById('card-number-error').textContent = '';
    }
});

// Function that validates expiring date
document.getElementById('expiring-date').addEventListener('input', function () {
    const expiringDate = this.value;
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(expiringDate)) {
        document.getElementById('expiring-date-error').textContent = 'Invalid date format. Use MM/YY.';
    } else {
        document.getElementById('expiring-date-error').textContent = '';
    }
});

// Function that validates cvc
document.getElementById('cvc').addEventListener('input', function () {
    const cvc = this.value;
    const regex = /^\d{3,4}$/;
    if (!regex.test(cvc)) {
        document.getElementById('cvc-error').textContent = 'CVC should be 3 or 4 digits.';
    } else {
        document.getElementById('cvc-error').textContent = '';
    }
});

 // Function to validate empty fields on form submission
 document.querySelector('.buy-button').addEventListener('click', function (e) {
    let valid = true;

    // Check if full name is empty
    const fullName = document.getElementById('full-name').value;
    if (fullName.trim() === '') {
        document.getElementById('full-name-error').textContent = 'Full Name is required.';
        valid = false;
    }

    // Check if email is empty
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        valid = false;
    }

     // Check if address is empty
     const address = document.getElementById('address').value;
     if (address.trim() === '') {
         document.getElementById('address-error').textContent = 'Address is required.';
         valid = false;
     }
});