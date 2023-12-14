// Инициализация Swiper 
var swiper = new Swiper('.swiper-container', {
  
  // Количество отображаемых слайдов одновременно
  slidesPerView: 1,
  
  // Навигация 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Пагинация 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Зацикливание слайдов
  loop: true,
  
  // Эффект перехода между слайдами 
  effect: 'fade',
  
  // Настройки для эффекта затухания
  fadeEffect: {
    crossFade: true,
  },
  
  // Автоматическое переключение слайдов
  autoplay: {
    delay: 5000, // Задержка между слайдами в миллисекундах
  },
});