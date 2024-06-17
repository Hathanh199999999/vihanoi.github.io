const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const numPeopleInput = document.getElementById('numPeople');
const tableSelect = document.getElementById('table');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const numPeopleError = document.getElementById('numPeopleError');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Kiểm tra tính hợp lệ dữ liệu
    let isValid = true;

    if (nameInput.value === '') {
        nameError.textContent = 'Vui lòng nhập họ tên';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (phoneInput.value === '' || isNaN(phoneInput.value)) {
        phoneError.textContent = 'Vui lòng nhập số điện thoại hợp lệ';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (numPeopleInput.value === '' || isNaN(numPeopleInput.value) || numPeopleInput.value < 1) {
        numPeopleError.textContent = 'Vui lòng nhập số lượng người hợp lệ (tối thiểu 1)';
        isValid = false;
    } else {
        numPeopleError.textContent = '';
    }

    if (tableSelect.value === '') {
        alert('Vui lòng chọn bàn');
        isValid = false;
    }

    

        alert('Đặt bàn thành công!');

});
