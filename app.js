$("#addTodo").click(function() {
    const inputTodo = $("input").val();
      $("#todoiLst").append("<li><input type='checkbox'>" + inputTodo + "</li>");

      $("input").val("");
    }
);

$(document).on("chenge", "input[type=checkbox]", function(){


    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through"); 
    }else{
        $(this).parent().css("text-decoration", "none"); 
    }
})