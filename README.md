<h1 align="center">Introduccion a GIT y sus comandos</h1>

# Mision TIC 2022 Ciclo 3

# Introduccion a comandos con GIT

## <h1 align="center">Temas</h1>
- echo "# Intro-GIT" >> README.md, sirve para crear un README y modificarlo con HTML, y CSS
- git init para anadir nuestro proyecto a git
- git add README.md, hace anadir archivos a nuestro git, vamos a preparar archivos para enviarlos, git add . es para anadir a todos los archivos.
- git commit -m "first commit", sirve para dejar notas o comentarios.
- git branch -M main, para cambiar de rama, de la branch a la main, u alguna otra.
- git remote add origin git@github.com:onfevs/Intro-GIT.git, es para que se adicione o se asocie a su repositorio.
- git push -u origin main, es para subir el archivo, cambios locales a github.
## Configuracion Global
- git config --global user.name "Tu nombre aquí"
- git config --global user.email "Tu@email.aqui”
- Para subir un archivo <strong>git add . </strong> <i>or</i> <strong>git add nombre-archivo</strong>
- Luego se realiza el git commit -m ""
- Y por ultimo se realiza el push, git push -u origin main.
- Se puede subir en el origin sin la -u
- Pull es para traer los cambios en el repositorio, que ya estan guardados en el pull
- start-ssh-agent (habilitar el agente)
- git pull origin main
- git status

## Comandos Intermedios

- Merge es una union de las dos ramas 
- <strong>git branch</strong> Es para visualizar las ramas de proyecto
- <strong>git log --oneline</strong> visualizar commits y ramas
- <strong>git branch nombre-rama</strong> Para crear una rama con el nombre (se recomiendan nombres cortos)
- <strong>git checkout nombre-rama</strong> Para cambiar de rama 
- <strong>git merge nombre-rama</strong> Para unir las ramas, los cambios y todo lo demas.
- <strong>git branch -d nombre-rama</strong> Para eliminar una rama
