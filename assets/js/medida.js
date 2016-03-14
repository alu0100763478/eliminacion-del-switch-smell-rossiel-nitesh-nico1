function Medida(valor, tipo)
  {
    this.tipo = tipo || "No type";
    this.valor = valor;
  /*  var prueba = valor;
    if (this.tipo == "No type"){
      var m = prueba.split(" ");
      this.valor = m[0];
      this.tipo = m[1];*/
    }
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km)*/
    Medida.expresion = function() {
    var expresion = XRegExp('^(\\s*) \n' +
                        '(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) (\\s*) # val \n' +
                        '(?<tip> [a-z]) (\\s*) # tip \n' +
                        '((to))? (\\s*) \n' +
                        '(?<au> [a-z]) (\\s*)$ # au \n','x');
    return expresion;
    }

  Medida.measures={};
  Medida.convertir = function(valor) {

    var elemento  = document.getElementById('converted');
    var elemento2 = document.getElementById('convertido');

    var measures = Medida.measures;

    var valor = XRegExp.exec(valor, Medida.expresion());
    if (valor) {
      var numero = parseFloat(valor.val.numero),
          tipo   = valor.tip.tipo,
          destino = valor.au.destino;

      try {
        var source = new measures[tipo](numero);  // new Fahrenheit(32)
        var target = "to"+measures[destino].name; // "toCelsius"
        return source[target]().toFixed(2) + " "+target; // "0 Celsius"
      }
      catch(err) {
        return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
      }
    }
    else
      return "Introduzca una temperatura valida: 330e-1 F to C";
};
