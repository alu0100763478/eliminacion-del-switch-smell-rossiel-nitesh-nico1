function Metros(valor)
  {
    Medida.call(this, valor, "M");
  }

  Metros.prototype = new Metros();
  Metros.prototype.constructor = Metros;
  Medida.measures.m = Metros;

  Metros.prototype.toPulgadas = function ()
  {
    var resultado = (this.valor * 39.37);
    resultado = resultado.toFixed(2) + " Pulgadas";
    return resultado;
  };
