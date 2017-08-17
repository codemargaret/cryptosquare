//back end
// function code4(userMessage){
//   var str = userMessage.split(' ').join('').toLowerCase();
//   var cut = str.slice(1,3);
//   alert(cut);
//   var convert = cut.split('');
//   var change = convert.reverse().join('');
//   alert(change);
//   var final = "r" + change + "s";
//   alert(final);
// }
//
// function code9(userMessage){
//   var str = userMessage.split(' ').join('').toLowerCase();
//   alert(str);
// }
    // for (var i = 0; str.length >i; i+=1) {
    // str = str + charAt
  // }



function squareRoot(userMessage) {
  var str = userMessage.split(' ').join('').toLowerCase();
  var splitString = str.split('');
  alert(splitString);
  var square = Math.ceil(Math.sqrt(str.length));
  alert(square);
  var newArray = [];

  for (i = 0; i < str.length; i++)

}

// alert(userMessage);

//make function



//front end
$(document).ready(function(){
  $("form#message").submit(function(event){
    event.preventDefault();
    var userMessage = $("input#userMessage").val();
    // var result = code4(userMessage);
    // var result2 = code9(userMessage);
    var result3 = squareRoot(userMessage);
  });
});
