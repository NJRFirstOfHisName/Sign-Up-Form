var checkPass = function() {
    const password = document.querySelector('input[name=user-password]');
    const confirmation = document.querySelector('input[name=confirm-password]');
    if (password.value === confirmation.value) {
      confirmation.className = "";
    } else {
      confirmation.className = confirmation.className + " error";
    }

    if (password.value.length < 8) {
        password.className = password.className + " error";
    } else {
        password.className = ""
    }
}

var checkPhone = function() {
    const phone = document.querySelector('input[name=phone-number]');

    if (phone.value.length < 10) {
        phone.className = phone.className + " error";
    } else {
        phone.className = ""
    }
}