# WayniChallenge

Es un mini proyecto backend desarrollado con Express.

El proyecto permite agregar, listar, editar y eliminar "entidades" y "deudores".
Pero el principal propósito de este proyecto es subir un archivo txt que identifica
las entidades y deudores de manera automatica y los guarda en una base de datos.

## Prerrequisitos
El proyecto fue implementado con `Node v20.9.0`

Se recomienda usar esta version o superior.

## Instalación
El primer paso es clonar el repositorio, e instalar las dependencias:

```sh
$ git clone https://github.com/NDeleo94/wayni-challenge.git
$ cd wayni-challenge
$ npm install
```

## Ejecución

Una vez ubicados en el directorio del del proyecto utilizamos el comando `node app.js`:

```sh
$ node app.js
```

Listo!

## Descripción
El proyecto tiene la capacidad de recibir un archivo txt con un formato específico.
A partir de ese archivo se identifican, se crean y se guardan en una base de datos las entidades y deudores involucrados.
En el caso de las entidades se guardan el codigo de la entidad y la suma total de prestamos.
En el caso de los deudores se guardane el numero de identificacion del cliente, suma total de prestamos y situación.

# Observaciones
En el caso de que se encuentren dos o más entidades diferentes, cada entidad se crea y se guarda con la suma total de prestamos correspondientes.
Por ejemplo:
Entidad 1, 20
Entidad 2, 40
Entidad 1, 40
Entidad 3, 60

El proyecto va a guardar las siguientes entidades:
Entidad 1, 60
Entidad 2, 40
Entidad 3, 60

En el caso de que se encuentre un deudor repetido (es decir que está asociado a más de una entidad), la suma de prestamos incluye todas las entidades involucradas.
Además, se considera la situación más alta entre todas las ocurrencias de ese mismo deudor.

Por ejemplo:
Entidad 1, Deudor 1, 10, Situacion 1
Entidad 1, Deudor 2, 20, Situacion 2
Entidad 2, Deudor 3, 30, Situacion 3
Entidad 2, Duedor 2, 40, Situacion 4

El proyecto va a guardar los siguientes deudores:
Deudor 1, 10, Situacion 1
Deudor 2, 60, Situacion 4
Deudor 3, 30, Situacion 3

#Consideraciones
En el proyecto se incluyeron los CRUD de Entidad y Deudor.
Si bien están implementados, los mismos están incompletos dado que superan el alcance del challenge.
Entre otras cosas para completarlos, se encuentran las validaciones.

En caso de que se suba un archivo que no sea txt, devuelve un error.
