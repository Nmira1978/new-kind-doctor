$(document).ready(function () {

    let isOpen = false;
  
    $('.j-burger').on('click', function () {
      if (isOpen) {
        $('.j-menu').slideUp();
        isOpen = false;
      } else {
        $('.j-menu').slideDown();
        isOpen = true;
      }
  
      $('.j-menu').slideToggle();
    });
  
  
  
    // Аккордион Прайс
  
    let prevBtn;
  
    $('.j-accordion-btn').on('click', function () {
  
      if (prevBtn === $(this)[0]) {
        $(this).next().slideToggle();
        $(this).find('.j-prise-icon').toggleClass('prise-icon-minus');
        return;
      }
  
      $('.j-accordion-btn').next().slideUp();
      $('.j-prise-icon').removeClass('prise-icon-minus');
      $(this).find('.j-prise-icon').addClass('prise-icon-minus');
      $(this).next().slideToggle();
      prevBtn = $(this)[0];
  
    });
  
  // Аккордион FAQ

  let prevBtnn;
  
  $('.j-accordion-btnn').on('click', function () {

    if (prevBtnn === $(this)[0]) {
      $(this).next().slideToggle();
      $(this).find('.j-faq-icon').toggleClass('faq-icon-minus');
      return;
    }

    $('.j-accordion-btnn').next().slideUp();
    $('.j-faq-icon').removeClass('faq-icon-minus');
    $(this).find('.j-faq-icon').addClass('faq-icon-minus');
    $(this).next().slideToggle();
    prevBtnn = $(this)[0];
  });






  
  });