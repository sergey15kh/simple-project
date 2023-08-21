'user strick'

//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}

//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
/*
Для родителя слойлеров пишем атрибут data-spoilers
Для заголовков слойлеров пишем атрибут data-spoiler
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spoilers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spoilers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoiler
*/

//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});

$('ul.tab-list').on('click', 'li:not(.active)', function () {
        
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.wrapperslider').find('.tab-content__item').removeClass('active').eq($(this).index()).addClass('active');
	   //$('.slider2').slick('reinit'); 
});

$('.slider1').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	fade: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	cssEase: 'linear',
});

$('.slider2').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	fade: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	cssEase: 'linear',
});

$('.slider3').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	fade: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	cssEase: 'linear',
});

$('.slider4').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	fade: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	cssEase: 'linear',
});

// $(".projectsimple-item").slick({
// 	dots: true,
// 	infinity: true,
// 	speed: 500,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: true,
// });


// $(function() {
// 	$('.js-customize').slick({
// 		autoplay: false,
// 		autoplaySpeed: 1000,
// 		fade: true,
// 		arrows: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		cssEase: 'linear',
// 	});
  
// 	$('.js-assistant').slick({
// 		autoplay: false,
// 		autoplaySpeed: 1000,
// 		fade: true,
// 		arrows: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		cssEase: 'linear',
// 	});

// 	$('.js-chatBot').slick({
// 		autoplay: false,
// 		autoplaySpeed: 1000,
// 		fade: true,
// 		arrows: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		cssEase: 'linear',
// 	});
  
// 	$('.js-sprint').slick({
// 		autoplay: false,
// 		autoplaySpeed: 1000,
// 		fade: true,
// 		arrows: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		cssEase: 'linear'
// 	});
	
// 	$('.js-tabs-item:not(:first)').hide();
// 	  $('.js-tabs-link').on('click', function (e) {
// 		  e.preventDefault();
// 		  var tabLink = $(this);
// 		  var target = $(this.hash);
// 		  $('.js-tabs-text').removeClass('m-active');
// 		  $('.js-tabs-item:visible').fadeOut("100", function () {
// 			  tabLink.children().addClass('m-active');
// 			  target.fadeIn("100", function() {
// 		  $('.js-assistant').slick("reinit"); 
// 		  $('.js-chatBot').slick("reinit"); 
// 		  $('.js-sprint').slick("reinit"); 
// 		});
// 		  });
// 	  });
//   });

//customize
//assistant
//chatBot
//sprint 