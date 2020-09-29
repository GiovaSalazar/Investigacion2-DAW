var express = require('express')
var http = require('http')
var app = express()

var estudiantes = ['Kevin', 'Juan', 'Marcos', 'Alisson']

//Creando los metodos
app.get('/estudiantes', (req, res) => {
    res.send(estudiantes)
})

app.post('/estudiantes', (req, res) => {
    estudiantes.push('Estudiante ' + estudiantes.length)
    res.send("Nuevo estudiante agregado")
})

app.put('/estudiantes',(req, res) => {
    res.send('Datos de estudiante actualizado')
})

  app.delete('/estudiantes',(req, res) => {
    res.send('Estudiante eliminado')
})

app.get('/', (req, res) => {
  res.status(200).send("Bienvenido a API REST")
})

//Creando servidor
http.createServer(app).listen(8001, () => {
  console.log('Servidor activo en http://localhost:8001');
});