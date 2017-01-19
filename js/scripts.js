//Business Logic
var Input = 0;
var OneTen = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
var UnderNinety = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var UnderThousand = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var OverThousand = ["M", "MM", "MMM"];
var Output = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;

function convert () {
  console.log(Input.length);
  a = parseInt(Input.charAt(0));
  b = parseInt(Input.charAt(1));
  c = parseInt(Input.charAt(2));
  d = parseInt(Input.charAt(3));
   if(Input.length===1) {
     for(i=0; i<10; i++) {
       if (i=(parseInt(Input)-1)) {
         return OneTen[i] }
     }
   } else if (Input.length===2) {
      return UnderNinety[a-1];
      return OneTen[b-1];
   } else if(Input.length===3) {

   } else {

   }
};



//User Interface
$("document").ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val();
    console.log(Input);
    $("#result").show();
    convert();
  });
});
