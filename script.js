const tempInput = document.getElementById('temp-input');
const celsiusBtn = document.getElementById('celsius-btn');
const fahrenheitBtn = document.getElementById('fahrenheit-btn');
const convertBtn = document.getElementById('convert-btn');
const resultText = document.getElementById('result-text');

celsiusBtn.addEventListener('click', () => {
  celsiusBtn.classList.add('active');
  fahrenheitBtn.classList.remove('active');
});

fahrenheitBtn.addEventListener('click', () => {
  fahrenheitBtn.classList.add('active');
  celsiusBtn.classList.remove('active');
});

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(tempInput.value);

  if (isNaN(temperature)) {
    resultText.innerText = 'Please enter a valid temperature';
    return;
  }

  if (celsiusBtn.classList.contains('active')) {
    const fahrenheit = (temperature * 9/5) + 32;
    resultText.innerText = `${temperature} °C = ${fahrenheit} °F`;
  } else {
    const celsius = (temperature - 32) * 5/9;
    resultText.innerText = `${temperature} °F = ${celsius} °C`;
  }
});
