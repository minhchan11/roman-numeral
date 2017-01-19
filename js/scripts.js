//Business Logic
var Input = 0;
var OneTen = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
var underNinety = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var underThousand = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var overThousand = ["M", "MM", "MMM"];

function convert () {
  
};



//User Interface
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    Input = "#userInput";
    $("#result").show();
  });
});
