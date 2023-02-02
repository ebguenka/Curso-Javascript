function ConverteFahrenheitCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);

}
// var x = ConverteFahrenheitCelsius(88);
// var texto = "A temperatura é " + x + " Celsius";

var texto = "A temperatura é " + ConverteFahrenheitCelsius(88) + " Celsius";
console.log(texto);

