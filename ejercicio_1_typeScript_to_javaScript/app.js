(function () {
    var apto1 = {
        ubicacion: "Bogota - Calle 123 #45-67",
        avaluocomercial: 250000000,
        avaluopredial: 150000000,
        embargado: true
    };
    var apto2 = {
        ubicacion: "Calí - Carrera 23 #51-78",
        avaluocomercial: 180000000,
        avaluopredial: 120000000,
        embargado: false
    };
    var aptoestado = function (apto) { return console.log("El apartamento ubicado en " + apto.ubicacion); };
    aptoestado(apto1);
    var aptobogota = {
        ubicacion: "Bogota - Transversal 45 #23-56",
        avaluocomercial: 300000000,
        avaluopredial: 200000000,
        embargado: false
    };
    //aptoestado(aptobogota);
    var aptointerface = function (depto) { return console.log("El apartamento ubicado en ".concat(depto.ubicacion)); };
    aptointerface(aptobogota);
})();
