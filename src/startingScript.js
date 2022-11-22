$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger').toggleClass('high')
    $('.hidden_navigation').toggleClass('shown')
    console.log('help')
    $('.wrap').toggleClass('bg_blur')
  })
})
