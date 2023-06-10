function categorias() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => response.json())
        .then(data => {
            const categories = data.drinks.map(drink => drink.strCategory);
            document.getElementById("divContenido").innerHTML = categories.join('<br>');
        })
        .catch(error => console.error(error));


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

function obtenerCocteles(nombre) {
    alert(nombre);
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

