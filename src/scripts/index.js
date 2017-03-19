(function () {
  let contacts = document.querySelector('.contacts__title');
  let hiddenBlock = document.querySelector('.contacts__hidden-block');

  contacts.addEventListener('click', function () {
    if (document.body.clientWidth <= '768') {
      hiddenBlock.classList.toggle('contacts__hidden-block--visible');
    }
  });
})();

$(document).ready(function () {
  let link = $('.menu a');
  if ((window.location.href.substr(window.location.href.lastIndexOf("/") + 1)) == "") {
    let activeItem = $('.menu__item--portfolio a');
    let src = activeItem.attr('href');
    let url = src.substr(src.lastIndexOf("/") + 1);
    $('.inner-content').load(url);
    activeItem.parent().addClass('menu__item--active');
  }
  link.click(function () {
    link.parent().removeClass('menu__item--active');
    let src = $(this).attr('href');
    let url = src.substr(src.lastIndexOf("/") + 1);
    $('.inner-content').load(url);
    $(this).parent().addClass('menu__item--active');
    return false;
  })
});