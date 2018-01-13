console.log('blog');
const preloader = require('../common/preloader.js');
const hamburger = require('../common/hamburger.js');



//Фиксация меню относительно статей
$(function () {
    window.addEventListener("scroll", function(event) {
        var top = this.scrollY
        var screenHeighth = window.innerHeight;
        var screenWidth = window.innerWidth;
        var blogMainTitle = document.querySelector('.blog-main-title')

        if (top>screenHeighth) {
            blogMainTitle.style.position = 'fixed';
            blogMainTitle.style.top = '40px';
            if (screenWidth<=1024) {
                blogMainTitle.style.width = 'initial';
                blogMainTitle.style.paddingRight = '0px';
                if (screenWidth<=768)  {
                    blogMainTitle.style.width = '250px';   
                }
            } else {
                blogMainTitle.style.width = '22%';
                blogMainTitle.style.paddingRight = '100px'; 
            }
        } else {
            blogMainTitle.style.position = 'static';
            blogMainTitle.style.top = 'initial'; 
            blogMainTitle.style.width = 'initial';
            blogMainTitle.style.paddingRight = 'initial'; 
        }
    });
});

//Перемещение к статья по клику на заголовок
$(function () {
    let blogMainTitleItems= document.querySelectorAll('.blog-main-title__item')
    //let blogMainTitleItemsLength = blogMainTitleItems.length
    let currentBlogMainTitleItems = 0;
    let articlesItems= document.querySelectorAll('.articles__item')
    //let articlesItemsLength = articlesItems.length  
    //console.log(articlesItems)

    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
        let coords = element.getBoundingClientRect();
    }

    articlesItems.forEach(logArrayElements);
    //blogMainTitleItems[0].classList.add('blog-main-title__item_active')
   
});







//Повление и скрытие меню блога 
$(function () {
    let blogLeft= document.querySelector('.blog__left')
    let blogMainTitleItem= document.querySelectorAll('.blog-main-title__item')
    let screenWidth = window.innerWidth;

    if (screenWidth<=1024) {
        blogLeft.addEventListener('click', function() {
            if (blogLeft.style.left == '-3%') {
                blogLeft.style.left = '-90%';
            } else {
                blogLeft.style.left = '-3%';
            }     
        });

        blogMainTitleItem.addEventListener('click', function() {
            blogLeft.style.left = '-90%';

        })
    } else {
        return false
    }
});



/*
function addActiveClass() {

    let blogMainTitle = document.querySelector('.blog-main-title')
    let blogMainTitleItems = document.querySelectorAll('.blog-main-title__item`')

    blogMainTitle.forEach(function(e, index) {

        let coords = e.getBoundingClientRect();

        if (coords.top <= 0 && coords.bottom > -70) {

            console.log(`Координаты ${index} равны ВЕРХ ${coords.top} НИЗ ${coords.bottom}`)
            blogMainTitleItems[index].classList.add('blog-main-title__item_active');
        } else {
            blogMainTitleItems[index].classList.remove('blog-main-title__item_active');
        }
    });
}
*/

//Вызов сторонних елементов
preloader();
hamburger();