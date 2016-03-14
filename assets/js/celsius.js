function Celsius(valor)
  {
    Temperatura.call(this, valor, "C");
  }

  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;
  Medida.measures.c = Celsius;

  Celsius.prototype.toFarenheit = function ()
  {
    var resultado = (this.valor * 9/5) + 32;
    return resultado;
  };

  Celsius.prototype.toKelvin = function ()
  {
    var resultado = (this.valor * 1) + 273.15;
    return resultado;
  };
