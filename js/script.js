$('.open-menu').click(function(){
	$('.mobile-navigation').addClass('active');
});
$('.exit-menu').click(function(){
	$('.mobile-navigation').removeClass('active');
	
});
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		 //Адаптация в зависимости от разрешения экрана
		items:1
			
		
	});
});

$(document).ready(function() {
	$('.owl-carousel-blog').owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		 //Адаптация в зависимости от разрешения экрана
		items:1
			
		
	});
});


