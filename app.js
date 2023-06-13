$("#addTodo").click(function() {
    const inputTodo = $("input").val();
      $("#todoiLst").append("<li><input type='checkbox'>" + inputTodo + "</li>");
      
      $("input").val("");
    }
);