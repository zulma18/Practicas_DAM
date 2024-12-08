// Obtener elementos del DOM
const btnNew = document.getElementById("btn")
const appNote = document.getElementById("app")

// Cargar las notas existentes al cargar la pagina
getNotes().forEach((note) => {
    const noteNew = createNote(node.id, note.content)
    appNote.insertBefore(noteNew, btnNew)
    
});

// Crear 