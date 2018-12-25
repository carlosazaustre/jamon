## Contributing
Antes de nada, gracias por considerar contribuir a JAMon

### Formas de contribuir a JAMon

- [Reportar un error(bug)](#reportar-un-error)
- [Subir una aportación de código](#mandar-un-pr)
- [Proponer una nueva funcionalidad](#hablar-con-el-equipo)
- [¡Quiero unirme al equipo!](#hablar-con-el-equipo)

### ¿Cómo trabajamos aquí?

A continuación mostramos la forma y flujo de trabajo que utilizamos para coordinarnos y crear un proyecto Open Source desde cero.

**Guía de estilos**

- **ESLint**: Utilizamos [ESLint](https://eslint.org/) como linter para controlar las normas de estilo de JavaScript. Usaremos [StandardJS](https://standardjs.com/) como set de reglas. Recomendamos instalarte un plugin de ESLint en tu editor de código para controlar éstas reglas y así tener un código unificado.
- **EditorConfig**: Con éste archivo seguiremos otra serie de normas. Igualmente, recomendamos instalar un plugin de EditorConfig en tu editor de código para controlarlo mejor:
  - Tamaño de tabulación: 2 espacios.
  - Insertar siempre una linea vacía a final de cada fichero.
- **NPM**: Cómo gestor de paquetes. v5.7.1 al menos.

**Utilizamos [Git Flow](http://slides.com/tebagomez/guilds-scrum-agile#/8/14) y esperamos gestionar los cambios con Pull Request(PR)**

* Todo el equipo necesita hacer un fork de este repositorio en su cuenta de Github.
* Desde la copia *forkeada* en tu cuenta personal, hacer un clon en tu entorno local.
* Cada un@ desde su entorno local, debe trabajar bajo la rama `dev`.
  * Si vas a arreglar un bug, crea una rama nueva que cuelgue de `dev` y llámala `bug-name`, siendo `name` una palabra descriptiva del bug.

  
  * Si vas a desarrollar una feature, crea una rama nueva que cuelgue de `dev` y llámala `feature-name`, siendo `name` una palabra descriptiva de la feature.
* En los commits, los mensajes deberán seguir el siguiente formato:
```
type: subject

body

footer
```
  * **Type**:
  El tipo contiene un nombre de los siguientes:
    * *feat*: Una nueva feature
    * *fix*: Un bug fix
    * *docs*: Cambios en la documentación
    * *style*: Cambios en el formato (espaciados, puntos y comas, etc..) Sin cambios de código
    * *refactor*: Refactorización del código de producción
    * *test*: Añadidos Tests, refactoring de tests, sin cambiar nada de producción
    * *chore*: Actualizar tareas de build, configuraciones, etc... sin cambiar nada de producción

  * **Subject**:
  No más de 50 caracteres. Descripción breve de lo que hace el commit.
  * **Body**:
  No todos los commits tienen por qué llevar un texto extenso, es opcional. Pero si necesitas explicar algo de forma más elaborada, este es el sitio.
  Utilízalo para explicar el Qué y el Por Qué, en lugar del Cómo.
  * **Footer**:
  Es opcional. Úsalo para referenciar la issue de Github a la que corresponda.

  Más info en [Git Syleguide de Udacity](http://udacity.github.io/git-styleguide/)

* Todas las Pull Request deben hacerse desde una rama `feature-x` o `bug-x` del repositorio forkeado, a la rama `develop` del respositorio origen.

**También utilizamos robots como Travis**

- [ ] TODO: Añadir más detalles sobre las tareas... y como afectan al workflow


### Reportar un error
Por favor, crea un [issue](/issues/new) donde especifiques lo siguiente:
Puedes utilizar la siguiente [template](https://github.com/OSWeekends/kienba/blob/master/docs/ISSUE_TEMPLATE.md)
- Resumen del problema (240-500 carácteres)
- Pasos para reproducirlo (¿Qué tengo que hacer para generar ese error de nuevo?)
- Comportamiento esperado (¿Qué debería de pasar si ese bug no existiera?)
- Resultado final (¿Qué paso cuando se disparó el bug?)
- Más información (Cualquier detalle relevante que nos ayude.

### Fork & create a branch

If this is something you think you can fix, then [fork JAMon][] and
create a branch with a descriptive name.

A good branch name would be (where issue #5 is the ticket you're working on):

```sh
git checkout -b 5-add-some-feature
```

### Mandar un PR

Antes de hacer nada... es muy recomendado pasar un tiempo leyendo ["¿Cómo trabajamos aquí?"](#c%C3%B3mo-trabajamos-aqu%C3%AD).

At this point, you should switch back to your master branch and make sure it's
up to date with JAMon's master branch:

```sh
git remote add upstream git@github.com:carlosazaustre/jamon.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 5-add-some-features
git rebase master
git push --set-upstream origin 5-add-some-features
```

Finally, go to GitHub and [make a Pull Request][] :D


### Código de conducta

Este proyecto esta sujeto al [siguiente código de conducta](CODE_OF_CONDUCT.md)
