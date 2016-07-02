$(document).ready(function(){

  // toggles hovering over a checkbox
  // $('.items').hover(function(){
  //   $('.check').show();
  // },function(){
  //   $('.check').hide();
  // });

  var identifier = 0;

  $(".add-button").click(function(event){
    event.preventDefault();
    var listValue = $(".txt-box").val();
    identifier++;
    var addeditem = "<li class=\"item-container\" id=\"container-" + identifier +
    "\"><span class=\"fa-stack fa-lg checkbox\">"+
    "<i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-check fa-stack-1x check\"></i></span>"+
    "<span class=\"item\" id=\"item-\"" + identifier + ">"+ listValue + "</span></li>";

    if (listValue != ""){
      $(".items").append(addeditem);
      console.log(addeditem);
      $(".txt-box").val("");
    }
    else{
      alert("Please enter items into box above");
    }
  });

  $(".items").click(function(){
    var completedValue = $("span.item").text();
    console.log(completedValue);
  });
});
