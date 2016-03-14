function Kelvin(valor)
  {
    Temperatura.call(this, valor,"K");
  }

  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;
  Medida.measures.k = Kelvin;

  Kelvin.prototype.toCelsius = function ()
  {
    var resultado = (this.valor - 273.15);
    resultado = resultado.toFixed(2) + " Celsius";
    return resultado;
  };

  Kelvin.prototype.toFarenheit = function ()
  {
    var resultado = ((this.valor - 273.15) * 9/5) + 3;
    resultado = resultado.toFixed(2) + " Farenheit";
    return resultado;
  };
