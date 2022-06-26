const modaltime = document.getElementById('modaltime');

const btnopen = document.getElementsByClassName('btnopen');
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (let i = 0; i < btnopen.length; i++) {
  btnopen[i].addEventListener('click', function() {
    openModalWindow();
  })
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

  $(".btnclose").click(function(){
      showAlert(hideAlert, 1000); //Закроет окно через 3 сек. после завершения анимации fadeIn
  });

  $(".close").click(function(){
      hideAlert();
  });

//это функция, которая открывает окно
function openModalWindow() {
  modaltime.style.display = "block";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modaltime.style.display = "none";
}

 



    