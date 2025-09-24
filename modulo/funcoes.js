/************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções para criar a API do Whatsapp
 * Data: 24/09/2025
 * Autor: Eduardo Feitosa Batista
 * Versão: 1.0
 ***********************************************************************************/

const dados = require('./contatos.js')

const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Eduardo Feitosa Batista'}

function getAllData(){
    let message = {status: true, statuscode: 200, development: 'Eduardo Feitosa Batista'}

    message.users = []

    dados.contatos['whats-users'].forEach(function(item){
        message.users.push(item)
    })

    if(message.users){
        return message
    }else{
        return MESSAGE_ERROR
    }
}

function getUserProfileByNumber (numero){
    let message = {status: true, statuscode: 200, development: 'Eduardo Feitosa Batista'}

    message.user = dados.contatos['whats-users'].find(userNumber => userNumber.number === String(numero))

    delete message.user.contacts

    if(message.user){
        return message
    }else{
        return MESSAGE_ERROR
    }

}

function getUserContactsByNumber (numero){
    let message = {status: true, statuscode: 200, development: 'Eduardo Feitosa Batista'}

    message.userContacts = dados.contatos['whats-users'].find(userNumber => userNumber.number === String(numero))

    delete message.userContacts.nickname
    delete message.userContacts['profile-image']
    delete message.userContacts.background

    message.userContacts.contacts.forEach(function(item){
        delete item.messages
    })

    if(message.userContacts){
        return message
    }else{
        return MESSAGE_ERROR
    }
}

function getUserMessagesByNumber (numero){
    let message = {status: true, statuscode: 200, development: 'Eduardo Feitosa Batista'}

    message.userMessages = dados.contatos['whats-users'].find(userNumber => userNumber.number === String(numero))

    delete message.userMessages.nickname
    delete message.userMessages['profile-image']
    delete message.userMessages.background

    message.userMessages.contacts.forEach(function(item){
        delete item.description
        delete item.image
    })

    if(message.userMessages){
        return message
    }else{
        return MESSAGE_ERROR
    }
}

function getUserConversationByNumberAndContact (userNumber, contactNumber){
    let message = {status: true, statuscode: 200, development: 'Eduardo Feitosa Batista'}

    message.userConversation = dados.contatos['whats-users'].find(user => user.number === String(userNumber))

    delete message.userConversation.nickname
    delete message.userConversation['created-since']
    delete message.userConversation['profile-image']
    delete message.userConversation.background

    message.userConversation.contacts.forEach(function(item){
        if(item.number == String(contactNumber)){
            message.userConversation.contact = item
            delete message.userConversation.contacts
        }
    })

    message.userConversation.contacts = message.userConversation.contact

    delete message.userConversation.contact

    delete message.userConversation.contacts.description
    delete message.userConversation.contacts.image

    if(message.userConversation){
        return message
    }else{
        return MESSAGE_ERROR
    }
}

function filterWithKeyWord (userNumber, word){
    let message = {status: true, statuscode: 200, development: 'Eduardo Feitosa Batista'}

    message.contatos = dados.contatos['whats-users'].find(user => user.number === String(userNumber))

    message.contatos.contacts.forEach(function(item){
        if(item.messages.includes(word)){
            message.mensagem = item
        }else(
            delete item
        )
    })

    return message
}

// console.log(getAllData())
// console.log(getUserProfileByNumber(11987876567))
// console.log(getUserContactsByNumber(11987876567))
// console.log(getUserMessagesByNumber(11987876567))
// console.log(getUserConversationByNumberAndContact(1194457796, 26999999930))
console.log(filterWithKeyWord(11987876567, 'Leonid'))