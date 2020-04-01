function translate(input) {

    var aplhabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = [ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
    "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

    var words = input.split(" ");
    var output = "";
    var ending = "";
    var endingConsonants = "";
    var vowelFound = false;
    var piglatinOutput = "";

    for(var index = 0; index < words.length; index++) {

      var letters = words[index].toLowerCase();
      ending = "";
      output = "";
      endingConsonants = "";

      for(var index2 = 0; index2 < letters.length; index2++) {
        if(!aplhabet.includes(letters[index2])) {
          output += letters[index2];
        }
        else if(letters.length === 1 && vowels.includes(letters[index2])) {
          output += letters[index2];
          ending = "way";
        }
        else if(letters.length === 1 && consonants.includes(letters[index2])) {
          output += letters[index2];
          ending = "ay";
        }
        else if(vowels.includes(letters[0])){
          output += letters[index2];
          ending = "way";
        }
        else if(consonants.includes(letters[0])){
          if(!vowelFound) {
            if(consonants.includes(letters[index2])) {
              endingConsonants += letters[index2];
            }
            else {
              if(letters[index2] === "u" && letters[index2-1] === "q") {
                vowelFound = true;
                endingConsonants += letters[index2];
              }
              else {
                output += letters[index2];
                vowelFound = true;
              }
            }
          }
          else {
            output += letters[index2];
          }
          ending = "ay";
        }
        else {
          output += letters[index];
        }
      }
      piglatinOutput += output + ending + " ";
    }
    
    return piglatinOutput;
};

$(document).ready(function() {

  $("#piglatin").submit(function(event) {
      event.preventDefault();

      var input = $("#sentence").val();
      var output = translate(input);

      $("#output").text(output);
  }); 
});