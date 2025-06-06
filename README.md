# **Libbook - A Platform for Writers and Readers**

## **Overview**
Libbook is an innovative online platform designed to bridge the gap between **emerging writers** and **passionate readers**. In an era where countless books are published daily, it can be challenging for new authors to gain visibility. Libbook provides an accessible space for readers to **discover fresh content** while offering writers an opportunity to **share their stories with the world**.

## **Features**
- 📖 **Discover New Books** – Read the latest novels and bestsellers for free.
- ✍️ **Writer Support** – Helps new authors find their audience.
- ⭐ **Favorites List** – Save and organize your preferred books.
- 🎭 **Top Writers Section** – Learn about popular authors and their works.
- 🌙 **Theme Toggle** – Switch between light and dark themes.
- 🔍 **Search Functionality** – Quickly find books by title or author.

## **Installation & Setup**
### **1. Clone the Repository**
```sh
 git clone https://github.com/yourusername/libbook.git
 cd libbook
```

### **2. Open in Browser**
Simply open `index.html` in your favorite browser to start using the platform.

### **3. Run a Local Server (Optional)**
For enhanced functionality, you can serve the project locally:
```sh
 python -m http.server 8000
```
Then open `http://localhost:8000/` in your web browser.

## **Project Structure**
```
Libbook/
│── index.html           # Main webpage
│── favorites.html       # Favorites section
│── js/
│   ├── script.js       # Main JavaScript file for interactivity
│   ├── favorites.js    # Script for managing favorite books
│── css/
│   ├── style.css       # Main styling file
│   ├── style2.css      # Additional styling for favorites page
│── img/                # Contains images and assets
│── README.md           # Documentation
```
## **Code Breakdown**
### **1. Navigation Bar (index.html)**
Provides easy access to different sections of the website.
```html
<nav>
    <div class='nav-item' onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'});">Проект</div>
    <div class='nav-item' onclick="document.getElementById('team').scrollIntoView({behavior: 'smooth'});">Команда</div>
    <div class='nav-item' onclick="document.getElementById('merch').scrollIntoView({behavior: 'smooth'});">Топ-писатели</div>
    <div class='nav-item' onclick="document.getElementById('submit').scrollIntoView({behavior: 'smooth'});">Заявка</div>
    <div class='nav-item'> <a href = "favorites.html">Избранные </a> </div>
    <div class='nav-item switch-theme-button'>Сменить тему</div>
</nav>
```

### **2. Favorites Page (favorites.html)**
Displays user-selected books for quick access.
```html
<section class='section1'>
    <p class="title title1"> Гарри Поттер и философский камень </p>
    <p class="author author1"> Джоан Роулинг </p>
    <p class="about first"> История о мальчике, который узнал, что он волшебник...</p>
    <button> читать... </button>
</section>
```

### **3. Theme Toggle Functionality (script.js)**
Allows users to switch between light and dark modes.
```js
let change_theme_button = document.querySelector('.nav-item.switch-theme-button');
change_theme_button.addEventListener('click', function() {
    document.getElementById("header").classList.toggle('dark-theme');
});
```

### **4. Managing Favorite Books (favorites.js)**
Handles toggling favorite books.
```js
let starButtons = document.querySelectorAll('.star-btn');
starButtons.forEach(function(starButton) {
    starButton.addEventListener('click', function() {
        let currentstar = starButton.style.backgroundImage;
        starButton.style.backgroundImage = currentstar.includes('lightstar.png')
            ? 'url(../img/darkstar.png)'
            : 'url(../img/lightstar.png)';
    });
});
```
## **Styling**
The website's styling is defined in `style.css` and `style2.css`.
- **Background color:** `#D1BBAA`
- **Font:** Montserrat (`Google Fonts`)
- **Interactive elements:** Buttons, hover effects, and theme switching

![Libbook Demo](img/demo.gif)
https://dlotsss.github.io/Libbook/ - the website

## **Future Improvements**
🚀 **User Login System** – Allow users to create accounts and save books permanently.

📚 **Advanced Search & Filters** – Improve book discovery features.

🎨 **Customizable UI** – More themes and accessibility options.


## **License**
This project is **open-source** and free for personal and non-commercial use.

## **Author**
Developed by **Sofiya Dassayeva** and **LibBook team**.
