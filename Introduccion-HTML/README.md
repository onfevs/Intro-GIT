## Introduccion a HTML

Es un lenguaje de etiquetas, sirve para darle estructura, como menu, contenido en la parte izquierda, derecha, pie de pagina, listas etc...

H1 Son titulos

P son parrafos

BR/> Es para salto de lineas

IMG para cargar imagenes SRC es la ruta y el WIDTH es para ajustar tamano no necesita colocar las unidades

FORM + Label + Input

meta charset="UTF-8" - 16 para que soporte enes y tildes

a href = "" > Es para redirigir 
(<a href ="">Nombre</a>)

Para generar espacios &nbsp; entre href
## Comandos

Para hacer comentarios mas rapidos se puede usar CTRL + K C o CTRL + /

Para varias lineas SHIF + ALT + A.

Para colocar LOREM, se pone LOREM*1 *2 *3

### Contenedores 

Section sirve para colocar sesiones como sesion de un periodico, deporte etc.

Div es un contenedor, tratar de no usarlo mucho. Mejor usar un section


### Forms

Para relacionar un label con un input se debe colocar un ID en el input y un label con un FOR con el mismo nombre label for="input_email", input id"input_mail"

Para crear botones con BUTTON type submit + nombre del boton 

### Clonar Repositorios.

Se copia el SSH del GITHUB del que queremos clonar.
Se abre el terminal
CD espacio arrastrar carpeta que se creo para copiar el repositorio
git clone + url

Siempre se debe hacer un pull y luego un push

Primero un git status
un add .
un git commit 
un push en la rama donde estan
Y luego se suben a la main

## Unir ramas

-- git checkout main
-- git merge dev
-- git push origin main