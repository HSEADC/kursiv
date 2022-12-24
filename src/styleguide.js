$(document).ready(function () {
  $('.sub a').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault()
      console.log('hi')
      var scrollTo = $(this).attr('href')
      var whitespace = scrollTo == '#logo' ? 100 : 1
      $('html,body').animate(
        {
          scrollTop: $(scrollTo).offset().top - whitespace
        },
        1000
      )
    })
  })
  const sectionHeight = $('section').height()
  const sectionHeightDouble = sectionHeight * 2 - 500
  const sectionHeightTriple = sectionHeight * 3 - 500
  const sectionHeightQuadriple = sectionHeight * 4 - 500

  var lis = document.getElementById('navbar').getElementsByClassName('sub')
  console.log(lis[4])
  window.addEventListener('scroll', (event) => {
    console.log(sectionHeight)
    console.log(sectionHeightDouble)
    console.log(sectionHeightTriple)
    const element = document.getElementsByClassName('main')
    const result = element[0].getBoundingClientRect().top * -1
    // const rect = element.getBoundingClientRect()
    console.log(result)
    if (sectionHeight - 100 <= result && result <= sectionHeightDouble - 100) {
      $(lis[0]).removeClass('active')
      $(lis[1]).addClass('active')
      $(lis[2]).removeClass('active')
    } else if (
      sectionHeightDouble - 100 <= result &&
      result <= sectionHeightTriple - 100
    ) {
      $(lis[0]).removeClass('active')
      $(lis[1]).removeClass('active')
      $(lis[2]).addClass('active')
      $(lis[3]).removeClass('active')
    } else if (result <= sectionHeight) {
      $(lis[0]).addClass('active')
      $(lis[1]).removeClass('active')
    } else if (
      result >= sectionHeightTriple - 100 &&
      result <= sectionHeightQuadriple - 100
    ) {
      $(lis[0]).removeClass('active')
      $(lis[2]).removeClass('active')
      $(lis[3]).addClass('active')
      $(lis[4]).removeClass('active')
    } else if (result >= sectionHeightQuadriple - 100) {
      $(lis[0]).removeClass('active')
      $(lis[3]).removeClass('active')
      $(lis[4]).addClass('active')
    }
  })
})
