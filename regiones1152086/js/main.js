function infoGeneral() {
    fetch('https://api-colombia.com/api/v1/Country/Colombia')
        .then(response => response.json())
        .then(data => {
            const description = data.description;
            document.getElementById('divContenido').innerHTML = description;
            document.getElementById('hContenido').innerHTML = 'Colombia, tierra de poetas';
        })
        .catch(error => console.error(error));


}


function porRegiones() {
    fetch('https://api-colombia.com/api/v1/Region')
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const description = data.description;
            let l = data.length;
            let rta = "";
            for (i = 0; i < l; i++) {
                let dato = data[i];
                const name = dato.name;
                const description = dato.description;

                rta += "Region: " + name
                    + "<br>Descripcion: " + description + "<br><br>";
            }
            document.getElementById('divContenido').innerHTML = rta;
            document.getElementById('hContenido').innerHTML = 'Organizado Por Regiones';
        })
        .catch(error => console.error(error));
}

function btnCombobox() {
    const combobox = document.getElementById("regiones");
    const idRegion = parseInt(combobox.value);

    const contenido = document.getElementById('divContenido');

    if (idRegion === 0) {
        contenido.innerHTML = '<p>Selecciona una region</p>';
    } else {
        document.getElementById('hContenido').innerHTML = 'Seleccionaste el dpto de id: ' + idRegion;

        fetch(`https://api-colombia.com/api/v1/Region/${idRegion}/deparments`)
            .then(response => response.json())
            .then(data => {
                const departamentos = data.data;
                const nombresDepartamentos = [];
                let rta = "";
                for (let i = 0; i < departamentos.length; i++) {
                    const nombreDepartamento = departamentos[i].name;
                    rta += nombreDepartamento + "<br>";
                }
                contenido.innerHTML = rta;
            })
    }
}


function porLetra() {
    const formulario = document.getElementById('formulario');
    const contenido = document.getElementById('divContenido');
    const letra = document.getElementById('letra').value;

    if (letra === '') {
        contenido.innerHTML = '<p>Ingresa una letra</p>';
    } else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const cocteles = data.drinks;
                if (cocteles) {
                    const nombresCocteles = cocteles.map(coctel => coctel.strDrink);
                    contenido.innerHTML = nombresCocteles.join('<br>');
                } else {
                    contenido.innerHTML = '<p>No se encontraron cocteles</p>';
                }
            })
            .catch(error => console.error(error));
    }

}



function conalcohol() {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    fetch(url)
        .then(response => response.json())
        .then(datos => mostrarDatos(datos))
        .catch(error => console.log(error))

    const mostrarDatos = (datos) => {
        let l = datos.drinks.length;
        let rta = "";
        for (i = 0; i < l; i++) {
            let dato = datos.drinks[i];
            let nombre = dato.strDrink;

            rta += "<a href='#' onclick='obtenerCocteles(" + nombre
                + ")'>" + nombre + "</a><br>";
        }
        document.getElementById("divContenido").innerHTML = rta;

    }
}
function sinalcohol() {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    fetch(url)
        .then(response => response.json())
        .then(datos => mostrarDatos(datos))
        .catch(error => console.log(error))

    const mostrarDatos = (datos) => {
        let l = datos.drinks.length;
        let rta = "";
        for (i = 0; i < l; i++) {
            let dato = datos.drinks[i];
            let nombre = dato.strDrink;

            rta += "<a href='#' onclick='obtenerCocteles(" + nombre
                + ")'>" + nombre + "</a><br>";
        }
        document.getElementById("divContenido").innerHTML = rta;

    }
}
function porIngrediente() {
    const formulario = document.getElementById('formIngrediente');
    const contenido = document.getElementById('divContenido');
    const ingrediente = document.getElementById('ingrediente').value;

    if (letra === '') {
        contenido.innerHTML = '<p>Ingresa un ingrediente</p>';
    } else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const cocteles = data.drinks;
                if (cocteles) {
                    const nombresCocteles = cocteles.map(coctel => coctel.strDrink);
                    contenido.innerHTML = nombresCocteles.join('<br>');
                } else {
                    contenido.innerHTML = '<p>No se encontraron cocteles</p>';
                }
            })
            .catch(error => console.error(error));
    }
}

