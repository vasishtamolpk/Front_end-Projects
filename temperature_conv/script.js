function convertTemperature() {
    let temperatureInput = document.getElementById('temperature').value;
    let unitSelect = document.getElementById('unit');
    let resultElement = document.getElementById('result');
  
    if (unitSelect.value === 'celsius') {
      let fahrenheit = (temperatureInput * 9 / 5) + 32;
      resultElement.innerText = `${temperatureInput} °C is equal to ${fahrenheit.toFixed(2)} °F`;
    } else {
      let celsius = (temperatureInput - 32) * 5 / 9;
      resultElement.innerText = `${temperatureInput} °F is equal to ${celsius.toFixed(2)} °C`;
    }
  }
  
  // Call the convertTemperature function on page load to handle any initial values
  convertTemperature();
  