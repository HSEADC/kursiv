$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger').toggleClass('high')
    $('.hidden_navigation').toggleClass('shown')
    console.log('help')
    $('.wrap').toggleClass('bg_blur')
  })
  $(function () {
    $('.splash_menu a').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault()
        var scrollTo = $(this).attr('href')
        var whitespace = scrollTo == '#about_us' ? 1 : 30
        $('html,body').animate(
          {
            scrollTop: $(scrollTo).offset().top - whitespace
          },
          1000
        )
      })
    })
  })
})
