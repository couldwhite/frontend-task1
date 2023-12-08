function valid() {
    let review = {
        name: document.formComment.name.value,
        surname: document.formComment.surname.value,
        email: document.formComment.email.value,
        phone: document.formComment.phone.value,
        message: document.formComment.message.value
    };

    let noValid = [];
    let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regPhone = /^\+[\d]\([\d]{2,3}\)[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
    if ((regEmail.test(review.email) === false) || !review.email) {
        noValid.push('Email');
    }
    if (!review.name) {
        noValid.push('Name');
    }
    if (!review.surname) {
        noValid.push('Surname');
    }
    if (!review.message) {
        noValid.push('Comment');
    }
    if (regPhone.test(review.phone) === false && review.phone !== '') {
        noValid.push('Phone Number');
    }

    if (noValid.length !== 0) {
        let noValidJoin = noValid.join(', ');
        alert(`Поля ${noValidJoin} заполнены неверно, пожалуйста, исправьте`)
    } else {
        let resCookie = document.cookie.includes("alreadySend=true");
        let nameCookie= document.cookie.includes(review.name);
        let surnameCokie = document.cookie.includes(review.surname);
        if (resCookie && nameCookie && surnameCokie) {
            alert(`${review.name + ' ' + review.surname} , ваше обращение обрабатывается!`);
        } else {
            alert(`${review.name + ' ' + review.surname} , спасибо за обращение!`);
            document.cookie = "alreadySend=true";
            document.cookie = "name=" + review.name;
            document.cookie = "surname=" + review.surname;
        }
    }


}


function writeLocalStorage() {
    localStorage.setItem("name", document.formComment.firstName.value);

    localStorage.setItem("surname", document.formComment.surname.value);

    localStorage.setItem("email", document.formComment.email.value);

    localStorage.setItem("number", document.formComment.phone.value);

    localStorage.setItem("message", document.formComment.message.value);

}

function readLocalStorage() {
    let elements = document.querySelectorAll(".comment__item");
    for (let element of elements) {
        element.value = localStorage.getItem(element.id);
    }
}

window.addEventListener('unload', writeLocalStorage);
window.addEventListener('load', readLocalStorage);