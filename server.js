require('dotenv').config() // Read environment variables from .env
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163
const Discord = require('discord.js')
const Client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent"]})
const TOKEN = process.env['TOKEN']
const DISCORDCHANNEL = process.env['CHANNEL']

Client.login(TOKEN);

let General

let requests = 0

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
  // Step 4
  .get('/health', function (req, res) {
    res.status(200).send('Healthy')
  })

  // Step 5
  .get('/', function (req, res) {
    res.render('pages/index')
  })

  // Step 6
  .get('/about', function (req, res) {
    res.render('pages/about')
  })

  .get('/sus', function (req, res) {
    requests++
    passcodeSend()
  })

  .listen(PORT, () => console.log(`Listening on ${PORT}`))


// DISCORD BOT EVENTS
Client.on('ready', () => {
  console.log(`Logged in as ${Client.user.tag}!`)
  Client.channels.fetch(DISCORDCHANNEL).then(channel => {
    General = channel
  })
})

Client.on('messageCreate', async msg => {
  if ((!msg.author.bot) && (msg.content.toLowerCase == "uwu" || msg.content.toLowerCase == "owo")) {
    msg.reply("Ur such a lil sussy baka...")
  }
})

// Functions
function passcodeSend() {
  if (requests <= 5) {
    const random = randomNumber()
  let messageToSend = ""
  
  if (random == 0) {
    messageToSend = "WOAH LUCKY"
  } else {
    messageToSend = `Oof times ${random}`
  }

  General.send(messageToSend)
  }
  requests--
  
}

function randomNumber() {
  return parseInt(Math.floor(Math.random() * 4096))
}

module.exports = {
  randomNumber
}