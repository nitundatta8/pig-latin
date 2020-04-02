var vowels = ["a", "e", "i", "o", "u"];
    
function translate(sentence) {
    var words = sentence.split(" ");
    var newWords = [];
    //non-alphabetical characters
    newWords = words.map(function(word){
        
       if(checkAlpaNumeric(word)){
         console.log("non letter" + word);
         return word;
       }

      var letters = word.split("");
      // add "way" to single-letter vowel  and adds "ay" to single-letter   
      if(vowels.includes(letters[0])){
         return word + "way";
      }else{
         if(letters.length === 1){
           return letters + "ay";
         }
           //moves "QU" together if included in the first  consonants of the word  
       
           var foundQU = findQu(letters);
           if(foundQU !== -1){
           var part1 = letters.slice(0,foundQU +1);
           var part2 = letters.slice(foundQU +1 , letters.length);
           var lettersWtQU = part2.join("") + part1.join("") + "ay";
           return lettersWtQU;
          }
           // move Y as a consonant if the world begins with it
    
           if(letters[0] === 'y'){
            
            var part2 = letters.slice(1 , letters.length);
            var lettersWtQU = part2.join("") + "y" + "ay";
            return lettersWtQU;
           }
           //moves all consonants before vowel to end
           var consonantWtVowel = searchVowel(letters);
           if(consonantWtVowel !== -1){
            var part1 = letters.slice(0,consonantWtVowel);
            var part2 = letters.slice(consonantWtVowel , letters.length);
            var lettersWtQU = part2.join("") + part1.join("") + "ay";
            return lettersWtQU;
          }else{
             return  letters.join("") + "ay";
          }
      }
     return  letters.join("");

    });
    return newWords;
  }
    //squeal
   function findQu(letters){
     for(var i=0;i<(letters.length-1);i++){
       if(letters[i] === "q" && letters[i+1] === "u"){
        return i+1;
       }
     }
     return -1;
   }
   //tractor
   function searchVowel(letters){
    for(var i=0;i<letters.length;i++){
      if(vowels.includes(letters[i])){
        return i;
      }

    }
    return -1;
   }


   function checkAlpaNumeric(word){
    var non_alp=['1','2','3','4','5','6','7','8','9','0','$','%','@','#','!','^','&','*','(',')','-','_','+','=S']
     var letters = word.split("")
     for(var i=0;i<letters.length;i++){
       if( non_alp.includes(letters[i])){
         return true;
       }
     }
     return false;
      
   }
    

$(document).ready(function() {

  $("#piglatin").submit(function(event) {
      event.preventDefault();

      var input = $("#sentence").val();
      if(input === ''){
        alert("Please enter a word")
        return;
    }
      var output = translate(input);
      console.log(output.join(' '));
      $("#output").text(output.join(' '));
  }); 
});


