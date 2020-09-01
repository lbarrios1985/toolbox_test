# Ejemplo de API con *Express.js* y cliente con *request-promise* en *Node.js*

Se pide:
Un API en nodejs 8 usando express, junto con sus test unitarios usando chai & supertest
Un cliente para el API rest usando React & Redux y bootstrap, junto con sus test unitarios usando Jest

1. Programar un API en node, a la cual se le pase un texto y reponda con el mismo texto.
2. Programar un App cliente en React que permita enviar textos a la API del punto A y muestre las respuestas del api.


## Ejecutar la puesta en marcha del Backend

1. En la raiz del proyecto ejecutar:
    ```
    npm install
    ```
2. Para ejecutar el Backend:
    ```
    npm start
    ```
3. El Backend se estara ejecutando en el puerto 3000

## Realizar consultas a la *API*

1. Teniendo el servicio en marcha puede realizar consultas mediante peticiones GET y POST a la dirección
*http://localhost:3000/api*.
2. Al ejecutar el comando `curl -X GET 'http://localhost:3000/api`.
3. Al ejecutar el comando `curl -X GET 'http://localhost:3000/api/Luis%20Barrios'`, obtendra el parametro que esta enviando como respuesta, en este caso `Luis Barrios`.
4. Al ejecutar el comando `curl -X POST 'http://localhost:3000/api' -H 'Content-Type: application/json' -d '{"text": "Luis Barrios"}'`

## Ejecutar la puesta en marcha del Frontend

1. Verificar que cuenta con la aplicacion node.js instalado mediante `node -v`, de lo contrario instalar.

2. Estando en el directorio /frontend ejecutar el comando
    ```
    npm install
    ```
3. Para ejecutar el Frontend:
    ```
    npm start
    ```
4. El Frontend se estara ejecutando en el puerto 8000

## Realizar prueba unitarias

1. Verificar que cuenta con la aplicacion mocha instalada mediante `mocha --version`, de lo contario instalar mediante el comando
`npm install -g mocha`
2. Estando en el directorio raiz ejecutar el comando `mocha`.