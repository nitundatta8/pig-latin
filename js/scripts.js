
$(document).ready(function(){
  $("#calculate").click(function(event){
     console.log("value");
     var countBy = $("#countBy").val();
     var countTo = $("#countTo").val();
     if(!isNumber(countBy)){alert("Please enter a valid number.")
      };
     if(!isNumber(countTo)){alert("Please enter a valid number.")};
     var countIn = parseInt(countBy);
     var countOut = parseInt(countTo);
     if(countIn < countOut){
      console.log(calculate(countIn,countOut));
      $(".output").show();
      $(".output").text(" Result is :" +calculate(countIn,countOut))
     }
     else{
      alert("Count To should be bigger than Count By");
     }
    event.preventDefault();
  });
});

 function isNumber(number){
   if(number !== '' && !isNaN(number) && number>0 ){
     return true;
   }
   else{return false}
 } 

 

function calculate(countBy,countTo){
var result = "";
  for(var i=1;i<= countTo;i++){
    if((i % countBy) === 0){
      result += " " + i;
    }
  }
  return result;
}