let ListaTareas = {
    tareas: [], //Arreglo de las tareas
  
    //Funcion para agregar la tarea 
     agregarTarea: function(tarea) {
      this.tareas.push(tarea);
    },
  

    //El arreglo funciona para crear y ordenar la lista que se crea de las tareas.
    mostrarLista: function() {
      let listaTareasElement = document.getElementById("listaTareas");
      listaTareasElement.innerHTML = "";
  


      //Ordena las tareas, dejando la tarea mas antigua de primer lugar y las nueva hasta abajo
      for (let i = 0; i < this.tareas.length; i++) {
        let tarea = this.tareas[i]; //Agrega la tarea nueva dentro del arreglo tareas 
        let tareaElement = document.createElement("ul"); //Lo ordena dentro de un "ul" que se genera
        tareaElement.textContent = tarea;
        listaTareasElement.appendChild(tareaElement);
      }
    }
  };
  
  // Vincular evento submit del formulario
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    // Al presionar el boton de submit se genera la accion para agregar la nueva tarea dentro del arreglo 
  
    let inputTarea = document.getElementById("inputTarea");
    let tarea = inputTarea.value.trim();
  
    if (tarea !== "") {
      ListaTareas.agregarTarea(tarea);
      ListaTareas.mostrarLista();
    }
  });
  