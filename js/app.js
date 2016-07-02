$(document).ready(function(){

  // toggles hovering over a checkbox
  // $('.items').hover(function(){
  //   $('.check').show();
  // },function(){
  //   $('.check').hide();
  // });

  var identifier = 2;

  $(".add-button").click(function(event){
    event.preventDefault();
    var listValue = $(".txt-box").val();
    identifier++;
    var addeditem = "<li class=\"item-container\" data-id=\"" + identifier + "\"><span class=\"fa-stack fa-lg checkbox\" id=\"checkbox\" data-id=\"5\">" +
    "<i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-check fa-stack-1x check\"></i></span>"+
    "<span class=\"item\">" + listValue + "</span></li>";

    if (listValue != ""){
      $(".items").append(addeditem);
      console.log(addeditem);
      $(".txt-box").val("");
    }
    else{
      alert("Please enter items into box above");
    }
  });

  // $(".items").click(function(event){
  //   var completedValue = $(this).text();
  //   console.log(completedValue);
  // });

  $("span#checkbox").on("click",function(){
    var completedValue = $(this).data("id");
    console.log(completedValue);
  });
});
