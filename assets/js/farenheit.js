function Farenheit(valor)
  {
    Temperatura.call(this, valor,"F");
  }

  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  Medida.measures.f = Farenheit;

  Farenheit.prototype.toCelsius = function ()
  {
    var resultado = (this.valor - 32) * 5/9;
    return resultado;
  };

  Farenheit.prototype.toKelvin = function ()
  {
    var resultado = ((this.valor - 32) * 5/9) + 273.15;
    return resultado;
  };
