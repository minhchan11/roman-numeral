//Business Logic
var Input = 0
//User Interface
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    Input = "#userInput";
  });
});
