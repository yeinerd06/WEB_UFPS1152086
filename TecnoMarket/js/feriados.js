

let url = "https://api.control-z.cl/api/feriados"
$.get(url, function (respuesta) {
    /*
        respuesta.forEach(function (item) {
            console.log(item)
        })*/
    let feriado = respuesta[respuesta.length - 1]

    $("#feriado").text(feriado.nombre + " - " + feriado.fecha)
}, "json")