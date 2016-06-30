$(document).ready(function(){
  $('.checkbox').hover(function(){
    $('.fa-check').show();
  },function(){
    $('.fa-check').hide();
  });

  $(".add-button").click(function(){
    event.preventDefault();
    var value = $(".txt-box").val();
    console.log(value);
  });

//   $(".add-item").on("click","add-button",function(event){
//     console.log("button click");
//   var itemToAdd = $(this).parent().children(".add-item__input").val();
//   if (itemToAdd != ""){
//     console.log(itemToAdd);
//     $(".stuff-i-need__list").prepend(
//       "<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
//       +itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
//     $(this).parent().children(".add-item__input").val("");
//   }
//   else {
//     alert("Please type in the box to add items");
//   }
// });




});
