# 📝 Lista de Tareas - Task Manager

Una aplicación web interactiva para gestionar tareas diarias con categorización por prioridad y almacenamiento persistente.

## ✨ Características

- **Crear tareas**: Añade nuevas tareas con solo escribir y hacer clic en "Añadir"
- **Categorizar por prioridad**: Clasifica las tareas en tres niveles:
  - 🟩 Normal
  - 🟨 Opcional
  - 🟥 Urgente
- **Marcar como completadas**: Usa los checkboxes para marcar tareas como realizadas
- **Filtrar tareas**: Visualiza todas las tareas o filtra por categoría
- **Eliminar tareas**: Borra las tareas que ya no necesitas
- **Almacenamiento persistente**: Las tareas se guardan automáticamente en el navegador usando LocalStorage
- **Validación de entrada**: Previene agregar tareas vacías
- **Interfaz responsiva**: Diseño adaptado para dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6+**: Lógica interactiva y gestión de datos

## 📁 Estructura del Proyecto

```
TareasJS/
├── index.html      # Archivo HTML principal
├── funciones.js    # Lógica JavaScript de la aplicación
├── estilos.css     # Estilos CSS
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

1. **Abrir la aplicación**: Abre el archivo `index.html` en tu navegador web
2. **Crear una tarea**: 
   - Escribe el texto de la tarea en el campo de entrada
   - Selecciona la prioridad (Normal, Opcional o Urgente)
   - Haz clic en "Añadir"
3. **Completar tarea**: Marca el checkbox al lado de la tarea
4. **Filtrar tareas**: Usa los botones de filtro para ver categorías específicas
5. **Eliminar tarea**: Haz clic en el icono de papelera (🗑️)

## 💾 Almacenamiento

- Las tareas se guardan automáticamente en el **LocalStorage** del navegador
- Los datos persisten incluso después de cerrar el navegador
- Se almacena un identificador único (id), el texto, el tipo y el estado de realización

## 🎨 Estilos

- Fondo con gradiente morado
- Interfaz limpia y moderna con sombras suaves
- Animaciones suaves al cargar la aplicación
- Diseño responsive que se adapta a diferentes tamaños de pantalla

## ⚡ Funcionalidades Técnicas

- **Sistema de IDs únicos**: Cada tarea recibe un identificador único
- **Validación de datos**: Comprueba que el input no esté vacío
- **Gestión de eventos**: Usa event listeners para interactividad
- **Método filter()**: Para eliminar tareas de forma eficiente
- **JSON serialización**: Para guardar/recuperar datos del LocalStorage

## 📝 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado

## 👨‍💻 Autor

Proyecto desarrollado como tarea de JavaScript.

---

**Disfruta organizando tus tareas** ✅
