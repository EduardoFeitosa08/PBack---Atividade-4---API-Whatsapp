/************************************************************************************
 * Objetivo: API responsavel em criar endPoints referente as interações do Whatsapp
 * Data: 24/09/2025
 * Autor: Eduardo Feitosa Batista
 * Versão: 1.0
 ***********************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const dados = require('./modulo/funcoes.js')

const PORT = process.PORT || 8080

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})