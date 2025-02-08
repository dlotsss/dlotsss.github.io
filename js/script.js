// Пожалуйста, не меняй код ниже. Он необходим для правильной настройки позиционирования элементов :)
let team1 = document.querySelector('.team1');
let team2 = document.querySelector('.team2');
let team3 = document.querySelector('.team3');

let height = Math.max(
    parseFloat(getComputedStyle(team1).height),
    parseFloat(getComputedStyle(team2).height),
    parseFloat(getComputedStyle(team3).height)
);

team1.style.height = `${height}px`;
team2.style.height = `${height}px`;
team3.style.height = `${height}px`;

let change_theme_button = document.querySelector('.nav-item.switch-theme-button')
change_theme_button.addEventListener('click', function() {
    myHead = document.getElementById("header");
    myHead.classList.toggle('dark-theme');
})

function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next');
button.addEventListener('click', scrollDown);


//Код, который нужно исправить
// let item_name_objects = document.querySelectorAll('.merch-item-name')
// let item_names = ['Джоан Роулинг', 'Стивен Кинг', 'Лев Толстой', 'Агата Кристи']
// for (let i = 0; i < item_name_objects.length; i += 1) {
//    item_name_objects[i].innerHTML = item_names[i]
// }

// let item_descriptions = ['британская писательница, сценаристка и кинопродюсер, наиболее известная как автор серии романов о Гарри Поттере', 'американский писатель, работающий в разнообразных жанрах, включая ужасы, триллер, фантастику, фэнтези, мистику, драму, детектив, получил прозвище «Король ужасов»', 'один из наиболее известных русских писателей и мыслителей, один из величайших в мире писателей-романистов. Участник обороны Севастополя', 'английская писательница и драматург. Относится к числу самых известных в мире авторов детективной прозы.']
// let item_prices = [1000, 1000, 2500, 5000]
// let item_description_objects = document.querySelectorAll('.merch-item-descr')
// let item_price_objects = document.querySelectorAll('.merch-item-price')
// for (let i = 0; i < item_description_objects.length; i += 1) {
//     item_description_objects[i].innerHTML = item_descriptions[i]
//     item_price_objects[i].innerHTML = item_prices[i]
// }
 

// let total_price = 0
// let cart_items_count = document.querySelector('.cart-amount')
// let add_to_cart_buttons = document.querySelectorAll('.add-to-cart-btn')

// let cart_button = document.querySelectorAll('.nav-item')[4]
// let cart_button_text = cart_button.querySelector('.cart-text')

// for (let i = 0; i < add_to_cart_buttons.length; i += 1) {
//     add_to_cart_buttons[i].addEventListener('click', function() {
//         cart_items_count.innerHTML = +cart_items_count.innerHTML + 1
//         total_price += item_prices[i]
//         if (cart_button_text.innerHTML != 'Корзина') {
//             cart_button_text.innerHTML = total_price
//         }
//     })
// }
// cart_button.addEventListener('click', function() {
//     if (cart_button_text.innerHTML == 'Корзина') {
//         cart_button_text.innerHTML = total_price
//     } else {
//         cart_button_text.innerHTML = 'Корзина'
//     }
// })

























//Код, который меняет тему
// function change_theme() {
//     let header = document.querySelector('header')
//     if (current_background == 'url(../img/dark_picture.jpeg)') {
//         current_background = 'url(../img/light_picture.jpeg)'
//     } else {
//         current_background = 'url(../img/dark_picture.jpeg)'
//     }
//     header.style.background = current_background
//     header.style.backgroundSize = 'cover'
//  }
  
//  let change_theme_button = document.querySelector('.switch-theme-button')
//  let current_background = 'url(../img/dark_picture.jpeg)'
//  change_theme_button.addEventListener('click', change_theme)

// Подсчет стоимости билета
function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = +document.querySelector('.submit-select').value
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)


// Красивая кнопка 'Отправить'
function make_transparent() {
    send_btn.style.backgroundColor = 'transparent'
}
 
function make_colorful() {
    send_btn.style.backgroundColor = '#C2AB99'
}

let send_btn = document.querySelector('.submit-btn-send')

send_btn.addEventListener('mouseenter', make_transparent)
send_btn.addEventListener('mouseleave', make_colorful)

// Пасхалка
function easter_egg() {
    let mars1 = document.querySelector('.mars1')
    let mars2 = document.querySelector('.mars2')
    let mars3 = document.querySelector('.mars3')
    let mars4 = document.querySelector('.mars4')
    let mars5 = document.querySelector('.mars5')
    mars1.style.color = '#AD4851'
    mars2.style.color = '#AD4851'
    mars3.style.color = '#AD4851'
    mars4.style.color = '#AD4851'
    mars5.style.color = '#AD4851'
}
 
let mars = document.querySelector('.mars1')
mars.addEventListener('click', easter_egg)