$(document).ready(function () {
  $('.sub a').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      console.log('hi');
      var scrollTo = $(this).attr('href');
      var whitespace = scrollTo == '#logo' ? 100 : 1;
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000);
    });
  });
  var sectionHeight = $('section').height();
  var sectionHeightDouble = sectionHeight * 2 - 500;
  var lis = document.getElementById('navbar').getElementsByClassName('sub');
  console.log(lis[4]);
  $(lis[4]).addClass('active');
  console.log(lis[4]);
  window.addEventListener('scroll', function (event) {
    console.log(sectionHeight);
    console.log(sectionHeightDouble);
    var element = document.getElementsByClassName('main');
    var result = element[0].getBoundingClientRect().top * -1; // const rect = element.getBoundingClientRect()

    console.log(result);

    if (sectionHeight - 100 <= result && result <= sectionHeightDouble - 100) {
      $(lis[0]).removeClass('active');
      $(lis[1]).addClass('active');
      $(lis[2]).removeClass('active');
      console.log('lol');
    } else if (sectionHeightDouble - 100 <= result) {
      console.log('loeeeeel');
      $(lis[1]).removeClass('active');
      $(lis[2]).addClass('active');
    } else if (result <= sectionHeight) {
      $(lis[0]).addClass('active');
      $(lis[1]).removeClass('active');
    }
  });
});