//Crear array para guardar las tareas
let listaDeTareas = []
let contadorTareas = 0

//Recuperar las tareas del localstorage


if(localStorage.getItem('tareasguardadas') !== null){
    listaDeTareas = JSON.parse(localStorage.getItem('tareasguardadas'))
    console.log(listaDeTareas)
    listaDeTareas.forEach(item => {
        displayTarea(item)
        if(item.id > contadorTareas){
            contadorTareas = item.id + 1
        }
    });
}

//Mostrarlas

//Seleccionar el elemento para crear una nueva tarea
document.getElementById('agregar').addEventListener('click', crearTarea)

function crearTarea(){
    //Leer los datos del input
    let textoTarea = document.getElementById('inputTarea').value 
    let tipoTarea = document.getElementById('tipoTarea').value

    //comprobar que hay texto en el input

    if(textoTarea.trim() === ''){
        document.getElementById('errorTarea').textContent = "Debes escribir una tarea"
        return
    }

    //Si llegamos hasta aqui hay lago escrito
    document.getElementById('errorTarea').textContent = ""

    //Crear el objeto tarea
    const tarea = {
        id: contadorTareas,
        texto: textoTarea,
        tipo: tipoTarea,
        tareaRealizada: false
    }

    contadorTareas++

    //Añadimos tarea al array
     listaDeTareas = [tarea, ...listaDeTareas]

     //Guardar el array de tareas en el navegador
     localStorage.setItem('tareasguardadas', JSON.stringify(listaDeTareas))

     displayTarea(tarea)
}

function displayTarea(tarea){
    let iconoTipo = '🟩'
    if(tarea.tipo === 'opcional'){
        iconoTipo = '🟨'
    }else if(tarea.tipo === 'urgente'){
        iconoTipo = '🟥'
    }

    //Crear un nodo para la tarea
    const li = document.createElement('li')

    li.innerHTML = `
        <div data-id="${tarea.id}">
            <input type="checkbox" class="tarea-realizada">
            ${iconoTipo}
            <span class="texto-tarea">${tarea.texto}</span>
        </div>
        <button class="eliminar">🗑️</button>
    `

    //mostrar tarea segun esté realiozada o no
    if(tarea.tareaRealizada){
        li.querySelector('.texto-tarea').style.textDecoration = 'line-through'
        li.querySelector('.tarea-realizada').checked = true
    }

    //Crear los eventos
    //elimiar
    li.querySelector('.eliminar').addEventListener('click', function(){
        //averiguar que id tiene la tarea
        let idTarea = li.querySelector('div').getAttribute('data-id')
        //eliminar la tarea del array
        //filter devueolve un array con todos los elementos que cumplen la condicion, en este caso devuelve un array con todas las tareas
        //menos la que queremos eliminar
        listaDeTareas = listaDeTareas.filter(item => item.id != idTarea)

        localStorage.setItem('tareasguardadas', JSON.stringify(listaDeTareas))
        //eiliminar la tarea de la pantalla 
        li.remove()
    })

    //añade un elemento al checkbox como realizada o no
    li.querySelector('.tarea-realizada').addEventListener('click', function(){
        //comprueba si la casilla esta seleccionada
        if(li.querySelector('.tarea-realizada').checked === true){
            li.querySelector('.texto-tarea').style.textDecoration = 'line-through'
            tarea.tareaRealizada = true
        }else{
            li.querySelector('.texto-tarea').style.textDecoration = 'none'
            tarea.tareaRealizada = false
        }
        localStorage.setItem('tareasguardadas', JSON.stringify(listaDeTareas))
    })
        //averiguar que id tiene la tarea

    //Añadir el elemnto a la lista
    document.getElementById('listado').appendChild(li)

    document.getElementById('inputTarea').value = ''
}

//Evento para filtrar las tareas que se muestran
const listaFiltros = Array.from(document.getElementsByClassName('filtro'))
listaFiltros.forEach(filtro => {
    filtro.addEventListener('click', (e) => {
        filtro = e.target.id

        listaDeTareas.forEach(tarea => {
            //Seleccionar la tarea en el DOM usando su ID
            const elementoTarea = document.querySelector(`[data-id="${tarea.id}"]`).parentElement

            if(tarea.tipo === filtro || filtro === 'todas'){
                //mostrar tarea
                elementoTarea.style.display = 'list-item'
            }else{
                //ocultar tarea
                elementoTarea.style.display = 'none'
            }
            
        })
    })
})