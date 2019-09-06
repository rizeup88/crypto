$(document).ready(function() {
  $("form#encrypter").submit(function() {
    event.preventDefault();
    var newMessage = $("input#message").val();
    // Ex. Hello, my name is Chase.
    newMessage = newMessage.replace(/[ !%$;.,_'-?]/g,'');
    newMessage = newMessage.toLowerCase();

    var charCount = newMessage.length;
    var rootLength = Math.sqrt(charCount);
    var columns;
    var rows;

    if (rootLength % 1 === 0) {
      columns = rootLength;
        rows = rootLength;
    } else {
      columns = Math.floor(rootLength);
        rows = (Math.floor(rootLength)) + 1;
    }

    var origArray = [];
    var encryptArray = [];
    var letterCount = 0;

    for (var i = 0; i < rows; i++) {
      var newArray = [];
        origArray[i] = newArray;

      for (var j = 0; j < columns; j++) {
        origArray[i][j] = newMessage.charAt(letterCount);
        letterCount++;
      }
    }

    var elementCount = 0;

    for(var i = 0; i < columns; i++) {
      for(var j = 0; j < rows; j++) {
        encryptArray[elementCount] = origArray[j][i];
        elementCount++;
      }
    }

    // Function for clearing out any empty arrays

    for (var i = 0; i < encryptArray.length; i++) {
      if (encryptArray[i] === "" ) {
        encryptArray.splice(i,1);
      }
    }

    // Function for adding spaces in between each fifth element

    for (var i = 0; i < encryptArray.length; i++) {
      if ((i + 1) % 5 === 0) {
        encryptArray[i] = encryptArray[i] + " ";
      }
    }

    var outputString = encryptArray.toString();
    outputString = outputString.replace(/[,]/g,'');
    $("#encryption").text(outputString);
    $("#result").show();
  });
});