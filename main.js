const tabItem = document.querySelectorAll('.courses__item-btn');
const tabContent = document.querySelectorAll('.courses__content');

tabItem.forEach(function(element) {
	element.addEventListener('click', open);
})

function open(evt) {
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;


tabItem.forEach(function(item) {
	item.classList.remove('courses__item-btn--active');
})

tabTarget.classList.add('courses__item-btn--active');

tabContent.forEach(function(item) {
	item.classList.remove('courses__content--active');
})

document.querySelector(`#${button}`).classList.add('courses__content--active');

}


const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu__list--active')
} )