
  let contacts= document.querySelector('.contacts__title');
  let hiddenBlock= document.querySelector('.contacts__hidden-block');

  contacts.addEventListener('click', function () {
    if (document.body.clientWidth<= '768') {
      hiddenBlock.classList.toggle('contacts__hidden-block--visible');
    }
  });

  (function () {

    var el = document.querySelectorAll('.menu__item a');
    var url = window.location.href;

    for (let i = 0; i < el.length; i++) {
      if ((window.location.href.substr(window.location.href.lastIndexOf("/") + 1)) == "") {
        var activeItem = document.querySelector('.menu__item--portfolio');
        activeItem.classList.add('menu__item--active');

      }
      else if (url == el[i].href) {

        el[i].parentNode.classList.add('menu__item--active');

      }
    }

  })();

