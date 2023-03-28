function convert() {
    var temp = document.getElementById("temp").value;
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var result = document.getElementById("result");
  
    if (unit === "celsius") {
      var convertedTemp = (temp * 9 / 5) + 32;
      result.innerHTML = temp + "°C is " + convertedTemp + "°F";
    } else {
      var convertedTemp = (temp - 32) * 5 / 9;
      result.innerHTML = temp + "°F is " + convertedTemp + "°C";
    }
  }
  