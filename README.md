🚀 Proyecto: Validación de Formulario con JavaScript
Este proyecto es un entregable clave desarrollado para la certificación Professional Developer en Digital House. El objetivo principal es demostrar el dominio en la captura de datos, lógica de validación y manipulación dinámica del DOM mediante JavaScript puro.

🔗 Ver Demo en Vivo en Netlify

📋 Descripción
La aplicación consiste en un formulario de registro interactivo que procesa diversos tipos de datos (texto, email, números, selectores y checkboxes). Implementa una capa de validación personalizada que impide el envío de información incorrecta o incompleta, mejorando la integridad de los datos y la experiencia del usuario (UX).

🛠️ Tecnologías Utilizadas
HTML5: Estructura semántica con desactivación de validación nativa (novalidate) para control total vía JS.

CSS3: Diseño responsivo, uso de Flexbox y gestión de estilos para estados de error.

JavaScript (Vanilla): Lógica de programación, manejo de eventos y expresiones regulares.

Netlify: Hosting y despliegue continuo.

✨ Características Técnicas
Basado en el desarrollo del código, el sistema incluye:

Validación Dinámica de Texto: Los campos de nombre, apellido y documento requieren un mínimo de 3 caracteres.

Seguridad en Email: Uso de Expresiones Regulares (RegEx) para validar formatos de correo electrónico.

Restricción de Edad: Validación lógica que solo permite el registro a usuarios mayores de 18 años.

Gestión de Errores Optimizada: El script identifica automáticamente el contenedor de error correspondiente mediante una función que capitaliza el ID del input (ej: id="apellido" busca id="errorApellido").

Confirmación de Datos: Tras una validación exitosa, se muestra un resumen detallado de la información mediante una alerta del sistema.

🚀 Instalación Local
Clona el repositorio:

Bash
git clone https://github.com/Ferchu82/proyecto-dh-formulario-con-validaciones.git
Abre el proyecto: Navega a la carpeta y abre index.html en tu navegador.

👤 Autor
Fernando Elias Peró

GitHub: Ferchu82

LinkedIn: Fernando Elias Peró

Este proyecto fue realizado con fines educativos para la certificación de Digital House.
