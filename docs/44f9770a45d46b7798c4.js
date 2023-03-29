document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      console.log(link.getAttribute('href')[1]);
      e.preventDefault();
      var target = document.getElementById(link.getAttribute('href')[1]);
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'end'
      });
    });
  }); // Smart adaptive navigation system, which keeps track of the user scroll.
  // fourth try start

  var subNavElements = document.getElementsByClassName('sub');
  var sections = document.getElementsByTagName('section');
  var sectionHeight = $(sections).height();
  console.log(subNavElements);
  console.log(sections);
  console.log(subNavElements[0]);
  console.log(sections[0]);
  window.addEventListener('scroll', function (event) {
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= sectionHeight * 0.5) {
        Object.values(subNavElements).forEach(function (element) {
          element.classList.remove('active');
        }); // subNavElements[i - 1].classList.remove('active')

        subNavElements[i].classList.add('active'); // subNavElements[i + 1].classList.remove('active')
      }
    }
  }); // Main Menu system
});