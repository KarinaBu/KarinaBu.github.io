window.addEventListener('DOMContentLoaded', function () {

  //Бургер-меню

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.getElementById('#close').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active');
  })

  // Инпут-лупа 1920

  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('#input').classList.add('show');
    document.querySelector('#search').focus();
  });

  document.querySelector('#input').addEventListener('blur', function () {
    document.querySelector('#input').classList.remove('show');
  })

  document.getElementById('#reset').addEventListener('click', function () {
    document.querySelector('#input').classList.remove('show');
  })


  //Слайдер

  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'boolean',
      type: 'bullets',
    },
  });

  //Табы
  document.querySelectorAll('.how-we-work__item-link').forEach(function (tabsItem) {
    tabsItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('how-we-work__item-active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__item-active');

    })
  })


  //Аккордион

  $(function () {
    $("#accordion").accordion({
      active: false,
      collapsible: true,
      header: '.question__line-text'
    });
    $("h3.question__line-text").click(function () {
      $(this).find('.plus_inactive').toggleClass('active');
    });
  });


})