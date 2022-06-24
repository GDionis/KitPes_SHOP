const modal = document.getElementById('modaltime');

const btnopen = document.getElementsByClassName('btnopen');
const close = document.getElementsByClassName('')[0];
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (let i = 0; i < btnopen.length; i++) {
  btnopen[i].addEventListener('click', function() {
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

function hideAlert() {
        $("#modaltime").fadeOut();
        return false;
    }

    function showAlert(callback, timeout){
        $("#modaltime").fadeIn("fast", function(){
            if(typeof callback == "function")
                setTimeout(callback, parseInt(timeout) > 0 ? timeout : 5000); //По умолчанию скрываем через 5 сек.
        });
        return false;
    }

    $(".alert").click(function(){
        showAlert(hideAlert, 3000); //Закроет окно через 3 сек. после завершения анимации fadeIn
    });

    $(".close").click(function(){
        hideAlert();
    });
    