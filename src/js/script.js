$(".slider")
  .on("initialized.owl.carousel changed.owl.carousel", function(e) {
    if (!e.namespace) {
      return;
    }
    $("#counter").text(
      e.relatedTarget.relative(e.item.index) + 1 + "/" + e.item.count
    );
  })
  .owlCarousel({
    items: 1,
    loop: true,
    margin: 5,
    nav: true
  });



  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navbar').addClass('sticky')
    } else{
        $('.navbar').removeClass('sticky')
    }
});
