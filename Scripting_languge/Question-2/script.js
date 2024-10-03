function validateNumber() {
    // Get the entered number
    var number = document.getElementById("number").value;
    var resultText = "";
  
    // Check if the number is 4 digits long
    if (number.length !== 4 || isNaN(number)) {
      resultText = "Please enter a valid four-digit number.";
    } else {
      // Check if the first digit is zero
      if (number[0] == "0") {
        resultText = "The number cannot start with zero.";
      } else {
        // Check if digits are in ascending order
        var isAscending = true;
        for (var i = 0; i < number.length - 1; i++) {
          if (number[i] >= number[i + 1]) {
            isAscending = false;
            break;
          }
        }
        if (isAscending) {
          resultText = "The number is valid!";
          document.getElementById("result").style.color = "#4CAF50"; // Change color to green for valid
        } else {
          resultText = "Digits must be in ascending order.";
        }
      }
    }
  
    // Display the result
    document.getElementById("result").innerHTML = resultText;
  }
  