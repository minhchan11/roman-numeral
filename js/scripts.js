//Business Logic
var Input = 0;
var OneTen = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
var UnderNinety = ["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var UnderThousand = ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var OverThousand = ["","M", "MM", "MMM"];
var Output = "";
var a = 0;
var b = 0;
var c = 0;
var d = 0;

function convert () {
  a = parseInt(Input.charAt(0));
  b = parseInt(Input.charAt(1));
  c = parseInt(Input.charAt(2));
  d = parseInt(Input.charAt(3));


  if(Input>3999|| Input<=0) {
    alert("Please keep your entry between 1-3,999");
  } else {
    if(Input.length===1) {
      Output += OneTen[a];
    } else if (Input.length===2) {
      Output = UnderNinety[a]+ OneTen[b];
    } else if(Input.length===3) {
      Output = UnderThousand[a] + UnderNinety[b]+OneTen[c];
    } else {
      Output = OverThousand[a] + UnderThousand[b] + UnderNinety[c] + OneTen[d]
    }
  }
};

//User Interface
$("document").ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    Input = $("#userInput").val();
    convert();
    $(".result").show();
    $("#numeral").text(Output);
  });
});
