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

const PORT = process.PORT || 8060

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

//EndPoints
app.get('/v1/whatsapp/users', function(request, response){
    let users = dados.getAllData()

    response.status(users.statuscode)
    response.json(users)
})

app.get('/v1/whatsapp/user/perfil/:numero', function(request, response){
    let userNumber = request.params.numero
    let userProfile = dados.getUserProfileByNumber(userNumber)

    response.status(userProfile.statuscode)
    response.json(userProfile)
})

app.get('/v1/whatsapp/user/contatos/:numero', function(request, response){
    let userNumber = request.params.numero
    let userContacts = dados.getUserContactsByNumber(userNumber)

    response.status(userContacts.statuscode)
    response.json(userContacts)
})

app.get('/v1/whatsapp/user/contatos/mensagens/:numero', function(request, response){
    let userNumber = request.params.numero
    let userMessages = dados.getUserMessagesByNumber(userNumber)

    response.status(userMessages.statuscode)
    response.json(userMessages)
})

app.get('/v1/whatsapp/user/contatos/', function(request, response){
    let userNumber = request.query.userNumber
    let contactNumber = request.query.contactNumber

    let userConversa = dados.getUserConversationByNumberAndContact(userNumber, contactNumber)

    response.status(userConversa.statuscode)
    response.json(userConversa)
})

app.get('/v1/whatsapp/user/contato/conversa', function(request, response){
    let userNumber = request.query.userNumber
    let keyWord = request.query.word

    let userMessage = dados.filterWithKeyWord(userNumber, keyWord)

    response.status(userMessage.statuscode)
    response.json(userMessage)
})

app.listen(PORT, function(){
    console.log('API pronta e esperando requisições')
})