const modal = document.getElementById('myModal');

const myBtn = document.getElementsByClassName('myBtn');
const close = document.getElementsByClassName('close')[0];
const btnclose = document.getElementsByClassName('btnclose')[0];
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (let i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function () {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "block";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}


btnclose.addEventListener('click', function () {
	btncloseSubmitModalWindow();
})

function btncloseSubmitModalWindow() {
  modal.style.display = "none";
}