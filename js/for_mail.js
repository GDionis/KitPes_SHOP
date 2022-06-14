// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на заполненние полей.
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});


// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+380(99) 999-9999");
});