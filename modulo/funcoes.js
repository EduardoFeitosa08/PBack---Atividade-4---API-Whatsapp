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

    message.users = dados.contatos

    return message
}

console.log(getAllData())