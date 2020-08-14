# Base de datos
Se usa mongodb, para tener el esquema y los datos:
  - Abrir el CMD en la carpeta mongodb_schema_data_changes/data
  - Abrir mongo pulsando "mongo" y crear la base de datos umagal_db con: "use umagal_db"
  - Escribir exit
  - Escribir las instrucciones de mongoimport del archivo: "database-schema.txt", las colecciones se crean automáticamente.


# Angular

Dependencias necesarias en la carpeta "umagal-project".

  Ng:
  - ng add @angular/material

  Npm:
   - npm install js-sha256
   - npm install @angular/flex-layout

## Arquitectura de Angular:

Se usa LazyLoading para el precargado de rutas. La estrategia precarga módulos para redes lentas, por eso se divide la mayoria de la aplicación en módulos independientes.

Al crear un módulo se lo agrega a app-module y a la ruta , en cada módulo se importa y exporta los componentes. El Módulo material se re-importa en cada módulo que lo necesite al igual que los formularios reactivos.

### Componentes notables:

- PageNotFoundComponent -> Este componente se muestra siempre que una ruta sea inválida o inexistente
- Core.module, este módulo posee modelos (interfaces) y servicios (peticiones http hacia el backend)
- Shared.module, este módulo posee componentes que son usados por la mayoría de la aplicación: FooterComponent y HeaderComponent (barra de navegación).
- BaseLayoutComponente -> Este componente es un layoute base del cual heredarán otros Módulos/Componentes de la aplicación usando la estructura:
< app-header >< /app-header >
< router-outlet >< /router-outlet >
< app-footer >< /app-footer >

	Ubicando al header, footer definido en SharedModule alrededor del componente/módulo que herede de BaseLayoutComponent
- Material.module, aqui se importa todo lo necesario a reusar de https://material.angular.io/components/categories

# Node JS

Dependencias necesarias en la carpeta "backend".
  Npm:
   1.  npm install express
   2.  npm install body-parser
   3.  npm install mongoose
   4.  npm install -g nodemon
   5.  npm install cors

Ejecutar el servidor con: "nodemon server", automáticamente se actualiza. Paralelamente se ejecuta con el servidor de Angular, cada uno trabaja en distintos puertos.


# Test de la Api REST

Las peticiones realizadas se hicieron con postman y se exportaron las peticiones
a un archivo: "web-project-umagal.postman_collection.json"
