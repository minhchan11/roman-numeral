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
  a = parseInt(Input.charAt(0));
  b = parseInt(Input.charAt(1));
  c = parseInt(Input.charAt(2));
  d = parseInt(Input.charAt(3));


  if(Input>3999|| Input<=0) {
    alert("Please keep your entry between 1-3,999");
  } else {
    if(Input.length===1) {
      for(i=0; i<10; i++) {
        if (i=(parseInt(Input)-1)) {
       Output += OneTen[i] }
      }
    } else if (Input.length===2) {
        if (b === 0) {Output = UnderNinety[a-1]
        } else { Output = UnderNinety[a-1]+ OneTen[b-1];}
    } else if(Input.length===3) {
        if (c == 0) {Output = UnderThousand[a-1] + UnderNinety[b-1]}
        else if ( b === 0) {Output = UnderThousand[a-1] + OneTen[c-1]}    //DEBUG for zero
        else {Output = UnderThousand[a-1] + UnderNinety[b-1]+OneTen[c-1];} //DEBUG for zero
    } else {
      if (d == 0) {Output = OverThousand[a-1] + UnderThousand[b-1] + UnderNinety[c-1]} //DEBUG for zero
      if ( (b === 0) && (c === 0)) {Output = OverThousand[a-1] + OneTen[d-1]} //DEBUG for zero
      else if ( c === 0) {Output = OverThousand[a-1] + UnderThousand[b-1] + OneTen[d-1]} //DEBUG for zero
      else if ( b === 0) {Output = OverThousand[a-1] + UnderNinety[c-1] + OneTen[d-1]} //DEBUG for zero
      else { Output = OverThousand[a-1] + UnderThousand[b-1] + UnderNinety[c-1] + OneTen[d-1]}
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
