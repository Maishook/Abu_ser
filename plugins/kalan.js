const Maalutty = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Maalutty.addCommand({pattern: 'abu', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'ᴘᴏᴅᴀ😏'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Nᴊᴀɴ Mᴀɴᴅᴀɴᴏɴᴜᴍᴀʟʟᴀ ᴋᴇᴛᴏ😝'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '💝Oᴡɴᴇʀ💝 \n\n```Cʀᴇᴀᴛᴇʀ Aʙᴜ```\n\n```Oᴡɴᴇʀ Nᴜᴍʙᴇʀ wa.me/917025994178```\n\n```Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ : https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk```\n\n\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: 'Eda eda, mandankonappi.. Nee enne kooduthal mandan aakkatheda😂 ',
          footerText: '©ꪶ͢ ᴀʙᴜ sᴇʀꫂ™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
