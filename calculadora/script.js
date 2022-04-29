/* Crear calculadora */


var calculadora = {
    init: function () {
        this.asignarEventos();
    },
    asignarEventos: function () {
        var self = this;
        var teclas = document.querySelectorAll(".tecla");
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener("click", function () {
                self.calcular(this.innerHTML);
            });
        }
    },
    calcular: function (valor) {
        var pantalla = document.getElementById("resultado");
        var valorPantalla = pantalla.innerHTML;
        var nuevoValor;
        switch (valor) {
            case "C":
                nuevoValor = "";
                break;
            case "=":
                nuevoValor = eval(valorPantalla);
                break;
            case ".":
                if (valorPantalla.indexOf(".") == -1) {
                    nuevoValor = valorPantalla + valor;
                } else {
                    nuevoValor = valorPantalla;
                }
                break;
            default:
                nuevoValor = valorPantalla + valor;

        }
        pantalla.innerHTML = nuevoValor;
    }
};


calculadora.init();