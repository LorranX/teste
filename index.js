const {
  WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers
} = require("@adiwajshing/baileys");
const { getBuffer, color, getGroupAdmins, createExif, getRandom, modStick, fetchJson } = require("./lib/function.js");
const { spawn, exec, execSync } = require("child_process");
const crypto = require('crypto')
const speed = require('performance-now');
const ig = require('insta-fetcher');
const hx = require("hxz-api");
const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search');
const request = require('request');
const axios = require("axios");
const moment = require("moment-timezone");
const { webp2gifFile } = require("./lib/gif.js")
const { isFiltered, addFilter } = require('./lib/antispam')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot');
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl');

        //INFO
owner = ["553195703379@s.whatsapp.net","553192941210@s.whatsapp.net"];
mns = "```";
battery = {
  persen: "" || "O carai, não consegui detectar",
  charger: "" || false
};
blocked = [];
roomttt = [];
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
antideleted = true;
self = false;

        //LOAD FILES
        const registrarusuarios = JSON.parse(fs.readFileSync('./database/user/registros.json'))
        const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
        const mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'));
        //END LOAD FILES

        const getRegisteredRandomId = () => {
          return registrarusuarios[Math.floor(Math.random() * registrarusuarios.length)].id
          }
          
          const addRegisteredUser = (userid, sender, age, time, serials) => {
          const obj = {
          id: userid,
          nome: sender,
          idade: age,
          time: time,
          serial: serials
          }
          registrarusuarios.push(obj)
          fs.writeFileSync('./database/user/registros.json', JSON.stringify(registrarusuarios))
          }
          
          const createSerial = (size) => {
          return crypto.randomBytes(size).toString('hex').slice(0, size)
          }
          
          const checkRegisteredUser = (sender) => {
          let status = false
          Object.keys(registrarusuarios).forEach((i) => {
          if (registrarusuarios[i].id === sender) {
          status = true
          }
          })
          return status
          }

        //DATA...HORA
function DATACOMPLETA(){
  myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
	myDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
	var tgl = new Date();
	var day = tgl.getDate();
	bulan = tgl.getMonth();
	var thissDay = tgl.getDay(),
	thisDay = myDays[thissDay];
	var yy = tgl.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
}
function HORAEXATA(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} horas ${pad(minutes)} minutos ${pad(seconds)} segundos`
}


function RODAPE(){
  MyTrademark = ["By LorranX ©"];
  ThisTrademark = MyTrademark;
  return `${ThisTrademark}`;
}

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia(s), " : " Dia(s), ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora(s), " : " Hora(s), ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto(s), " : " Minuto(s), ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo(s)" : " segundo(s)") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};


const time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var HORARIOS = "Boa noite";
}
if (time2 < "19:00:00") {
  var HORARIOS = "Boa noite";
}
if (time2 < "18:00:00") {
  var HORARIOS = "Boa tarde ";
}
if (time2 < "15:00:00") {
  var HORARIOS = "Boa tarde";
}
if (time2 < "11:00:00") {
  var HORARIOS = "coe viado bom dia";
}
if (time2 < "05:00:00") {
  var HORARIOS = "Boa madrugada";
}


module.exports = (LorranX) => {
  LorranX.on("group-update", async(mem) => {
    metadata = await LorranX.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      LorranX.sendMessage(metadata.id, `*[ Grupo Aberto ]* \n\n${mns}Grupo abrido pelo corno do adm${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      LorranX.sendMessage(metadata.id, `*[ Grupo Fechado ]* \n\n${mns}Modo serio grupo fechado pelo adm${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    }
  });
  LorranX.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist){
      blocked.push(i.replace("c.us","s.whatsapp.net"));
    }
  });
  LorranX.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });
  LorranX.on("message-delete",async(mek) => {
    if (mek.key.remoteJid == "status@broadcast") return;
    if (!mek.key.fromMe && mek.key.fromMe) return;
    if (antideleted === false) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
    let date = new Date();
    let region = 'id';
    let getTime = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((newdate * 1) + getTime) / 84600000) % 5];
    let localweek = newdate.toLocaleDateString(region, {
      weekday: 'long'
    });
    let localday = newdate.toLocaleDateString(region, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const type = Object.keys(mek.message)[0];
    LorranX.sendMessage(mek.key.remoteJid, `*[ ANTI DELETE ]*\n\n*nama* : @${mek.participant.split("@")[0]}\n*jam* : ${moment.localweek.localday}\n*Type* : ${type}`, MessageType.text, {quoted:mek.message, contextInfo: { "mentionedJid": [mek.participant]}})
  });
  LorranX.on("CB:Call", (num) => {
    let nomer;
    calling = JSON.parse(JSON.stringify(num));
    nomer = calling[1].from;
    LorranX.sendMessage(nomer, `Sorry ${LorranX.user.name} Sai , \ncall = block`, MessageType.text)
    .then(() => {
      return LorranX.blockUser(nomer, 'add')
    })
  });
  LorranX.on("chat-update", async(mek) => {
    try {
      if (!mek.hasNewMessage) return;
      mek = mek.messages.all()[0];
      if (!mek.message) return
      if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
      //if (mek.key.fromMe) return
      if (mek.key && mek.key.remoteJid == "status@broadcast") return;
      global.blocked;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      const content = JSON.stringify(mek.message);
      const from = mek.key.remoteJid;
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType;
      const type = Object.keys(mek.message)[0];
      const cmd =
        type === "conversation" && mek.message.conversation
          ? mek.message.conversation
          : type == "imageMessage" && mek.message.imageMessage.caption
          ? mek.message.imageMessage.caption
          : type == "videoMessage" && mek.message.videoMessage.caption
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
          ? mek.message.extendedTextMessage.text
          : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
          ? mek.message[type].selectedButtonId
          : "";
      const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'
      body = 
        type === 'listResponseMessage' && mek.message.listResponseMessage.title 
          ? mek.message.listResponseMessage.title 
          : type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId
          ? mek.message.buttonsResponseMessage.selectedButtonId
          : type == "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";
      const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      listbut = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
      var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
      const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
      const isCmd = body.startsWith(prefix)
      const arg = budy.slice(command.length + 2, budy.length)
      const q = args.join(' ')
      const botNumber = LorranX.user.jid
      const isGroup = from.endsWith("@g.us")
      const sender = mek.key.fromMe
        ? LorranX.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid
      const totalchat = LorranX.chats.all()
      const groupMetadata = isGroup ? await LorranX.groupMetadata(from) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupOwner = isGroup ? groupMetadata.owner : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isBanned = ban.includes(sender)
      const isOwner = owner.includes(sender);
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const produtoverify = { key: { fromMe: false, participant: `553195703379@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./lib/image/verificado.png') }, "title": `VERIFICANDO...`, "productImageCount": 9999 }, "businessOwnerJid": `5531957033796@s.whatsapp.net`}}}
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isRegister = checkRegisteredUser(sender)
      const isMuted = isGroup ? mute.includes(from) : false
      const conts = mek.key.fromMe ? LorranX.user.jid : LorranX.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? LorranX.user.name : conts.notify || conts.vname || conts.name || '-'
      const more = String.fromCharCode(8206)
      const readMore = more.repeat(4001)

      if (self) {
        if (!isOwner || !botNumber) return
      }
      const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? LorranX.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : LorranX.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }

      const reply = (teks) => {
        LorranX.sendMessage(from, teks, text, {quoted:mek})
      }
      const fakethumb = (teks, yes) => {
            LorranX.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/image/fake.jpeg'),quoted:mek,caption:yes})
        }
        //BOTÃO NORMAL
      const sendButtonMsg = (text, footer, but = [], options = {}) => {
        const buttonMessage = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 1
        };
        LorranX.sendMessage(
          from,
          buttonMessage,
          buttonsMessage,
          options
        )
      }
        ///BOTÃO DE IMAGEM
const sendButImage = async(from, text1, desc1, gam1, but = [], options = {}) => {
  kma = gam1
  mhan = await LorranX.prepareMessage(from, kma, image)
  const buttonMessages = {
  imageMessage: mhan.message.imageMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 4
  };
  LorranX.sendMessage(
    from,
    buttonMessages,
    MessageType.buttonsMessage,
    options
    )
  }
        ///BOTÃO DE VIDEO
  const sendButVideo = async(from, text1, desc1, vid1, but = [], options = {}) => {
  kma = vid1
  mhan = await LorranX.prepareMessage(from, kma, video)
  const buttonMessages = {
  videoMessage: mhan.message.videoMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 5
  }
  LorranX.sendMessage(from,
    buttonMessages,
    MessageType.buttonsMessage,
    options
    )
  }
        ///BOTÃO DE LOC
  const sendButLocation = async (from, text1, desc1, gam1, but = [], options = {}) => {
  kma = gam1
  mhan = await LorranX.prepareMessage(from, kma, location)
  const buttonMessages = {
  locationMessage: mhan.message.locationMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 6
  }
  LorranX.sendMessage(from,
    buttonMessages,
    MessageType.buttonsMessage,
    options
    )
  }
      
      const sendMediaURL = async(url, text="", mids=[]) =>{
        if(mids.length > 0){
          text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers['content-type']
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        download(url, filename, async function () {
          console.log('done');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          LorranX.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
        });
      };

            
      
      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      
      
      if (isCmd && !isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"))
      if (isCmd && isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"),"in",color(groupName,"yellow"))
      if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))
      
        //ANTI-SPAM
      if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Sem flood @${sender.split('@')[0]}\n\nAguarde 3 segundos antes de usar outro comando`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
               
        if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Sem flood @${sender.split('@')[0]}\n\nAguarde 3 segundos antes de usar outro comando`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff1)}  

        //SILENCIAR BOT EM GRUPOS

        if (isMuted){
          if (!isGroupAdmins) return
}

        //COMANDOS DE LISTA
        if (listbut == 'Modificadores de Audio' || command == `${prefix}start`) {
          var Menuaudio = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝙈𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤⛤ * ❉──

║│↭_*   [ *${prefix}slowmo* ] 
║│↭_*   [ *${prefix}acelerar* ]
║│↭_*   [ *${prefix}esquilo* ] 
║│↭_*   [ *${prefix}engrossar* ] 
║│↭_*   [ *${prefix}bass* ]
║│↭_*   [ *${prefix}estourar* ]
║│↭_*   [ *${prefix}reverse* ]
║│↭_*   [ *${prefix}robot* ]

║│

║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
  sendButtonMsg(Menuaudio, `By LorranX ©`,[{
    buttonId: `${prefix}verify`,
  buttonText: {
    displayText: "Verify"
  },
  type: 1
  },{
    buttonId: `${prefix}owner`,
    buttonText: {
      displayText: "Dono"
    },
    type: 1
    },{
      buttonId: `${prefix}github`,
      buttonText: {
        displayText: "script do bot"
      },
      type: 1
  }])
}
if (listbut == 'Modificadores de Video' || command == `${prefix}start`) {
  var Menuvideo = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝙈𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚 𝙫𝙞𝙙𝙚𝙤⛤ * ❉──

║│↭_*   [ *${prefix}slowv* ] 
║│↭_*   [ *${prefix}acelerarv* ]
║│↭_*   [ *${prefix}reversev* ]

║│

║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
sendButtonMsg(Menuvideo, `By LorranX ©`,[{
  buttonId: `${prefix}verify`,
  buttonText: {
    displayText: "Verify"
  },
  type: 1
  },{
buttonId: `${prefix}owner`,
buttonText: {
displayText: "Dono"
},
type: 1
},{
buttonId: `${prefix}github`,
buttonText: {
displayText: "script do bot"
},
type: 1
}])
}
        if (listbut == 'Owner Menu' || command == `${prefix}start`) {
          var Menueu = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙤 𝙥𝙖𝙥𝙖𝙞⛤ * ❉──

║│↭_*   [ *${prefix}block* ] 
║│↭_*   [ *${prefix}unblock* ]
║│↭_*   [ *${prefix}ban* ] 
║│↭_*   [ *${prefix}unban* ]
║│↭_*   [ *${prefix}creatgroup* ] 
║│↭_*   [ *${prefix}join* ] 
║│↭_*   [ *${prefix}setpp* ] 
║│↭_*   [ *${prefix}selfmode* ]
║│↭_*   [ *${prefix}desligar* ]
║│↭_*   [ *${prefix}kickall* ]
║│↭_*   [ *${prefix}clearall* ]

║│

║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
  sendButtonMsg(Menueu, `By LorranX ©`,[{
    buttonId: `${prefix}verify`,
  buttonText: {
    displayText: "Verify"
  },
  type: 1
  },{
    buttonId: `${prefix}owner`,
    buttonText: {
      displayText: "Dono"
    },
    type: 1
    },{
      buttonId: `${prefix}github`,
      buttonText: {
        displayText: "script do bot"
      },
      type: 1
  }])
}
      if (listbut == 'Menu' || command == `${prefix}start`) {
        var Menu = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *Info carregador* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨⛤ * ❉──

║│↭_*   [ *${prefix}listonline* ] 
║│↭_*   [ *${prefix}probabilidade* ]
║│↭_*   [ *${prefix}%gay* ] 
║│↭_*   [ *${prefix}twitter* ]
║│↭_*   [ *${prefix}ig* ]
║│↭_*   [ *${prefix}ytmp4* ]
║│↭_*   [ *${prefix}ytmp3* ]
║│↭_*   [ *${prefix}play* ] 
║│↭_*   [ *${prefix}pvideo* ] 
║│↭ _*  [ *${prefix}sticker* ] 
║│↭_*   [ *${prefix}attp* ] 
║│↭_*   [ *${prefix}dado* ] 
║│↭_*   [ *${prefix}toimg* ] 
║│↭_*   [ *${prefix}togif* ] 
║│↭_*   [ *${prefix}tomp3* ] 
║│↭_*   [ *${prefix}listadmin* ] 
║│↭_*   [ *${prefix}adminmenu* ] 
║│↭_*   [ *${prefix}ownermenu* ]
║│↭_*   [ *${prefix}modmenu* ]
║│ 

║│

║ | ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────
`;
sendButtonMsg(Menu, `By LorranX ©`,[{
  buttonId: `${prefix}verify`,
  buttonText: {
    displayText: "Verify"
  },
  type: 1
  },{
    buttonId: `${prefix}github`,
    buttonText: {
      displayText: "Script do bot"
    },
    type: 1
  },{
    buttonId: `${prefix}owner`,
    buttonText: {
      displayText: "Dono"
    },
    type: 1
}])
      } else if (listbut == "ChangeLog") {
        const medsos = `
  *ᨁ 𝑪𝑯𝑨𝑵𝑮𝑬𝑳𝑶𝑮*
  • Ultima atualização: 20/09/2021 as 22:23
  • Ultimas alterações: Corrigidos alguns erros
  • Possiveis proximas Atualizações: Correções, criação de novos comandos sem prefix (Talvez ja venham alguns xingamentos)
  • Versão atual: 1.0.5
  • % de conclusão: 39%
`
        LorranX.sendMessage(from, fs.readFileSync("./lib/image/changelog.jpg"), image, {quoted: mek, caption: medsos})
      }
      if (listbut == 'Admin Menu' || command == `${prefix}start`) {
        var MenuAdmin = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}
        
*↭  ${HORARIOS} ${pushname}*
        
║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙖𝙙𝙢𝙞𝙣⛤ * ❉──
        
║│↭_*   [ *${prefix}leave* ] 
║│↭_*   [ *${prefix}setdesc* ]
║│↭_*   [ *${prefix}setname* ] 
║│↭_*   [ *${prefix}setig* ] 
║│↭_*   [ *${prefix}promoteall* ] 
║│↭_*   [ *${prefix}promote* ] 
║│↭_*   [ *${prefix}demote* ]
║│↭_*   [ *${prefix}demoteall* ]
║│↭_*   [ *${prefix}revokelink* ]
║│↭_*   [ *${prefix}grp* ] 
║│↭_*   [ *${prefix}hidetag* ]
║│↭_*   [ *${prefix}notif* ]
║│↭_*   [ *${prefix}tagimg* ]
║│↭_*   [ *${prefix}tagsticker* ]
║│↭_*   [ *${prefix}kick* ] 
║│↭_*   [ *${prefix}add* ] 
║│↭ _*  [ *${prefix}linkgp* ] 
        
║│
        
║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
sendButtonMsg(MenuAdmin, `By LorranX ©`,[{
  buttonId: `${prefix}verify`,
  buttonText: {
    displayText: "Verify"
  },
  type: 1
  },{
  buttonId: `${prefix}owner`,
  buttonText: {
    displayText: "Dono"
  },
  type: 1
  },{
    buttonId: `${prefix}github`,
    buttonText: {
      displayText: "script do bot"
    },
    type: 1
}])
      }
        //SEM PREFIX
    switch(is) {
      case 'bot':
        if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
buf = fs.readFileSync(`./database/mp3/oi.mp3`)
LorranX.sendMessage(from, buf, audio, {
mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break;
    }
        //CASE
      switch (command) {
        //MENUS
        case 'help':
        case 'menu':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          var menulist = LorranX.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${HORARIOS} ${pushname}\n\nEu sou o BOT DO LORRAN\nainda não estou pronto, mas asssim que estiver meu papai vai disponibilizar esse script no github\n\n\nEsse script foi desenvolvido com a ajuda direta e indireta de algumas pessoas\nSPECIAL THANKS TO:\nAffis Junianto\nManik\nmhankbarbar`,
              "description": `Estou funcionando a \n${runtime(process.uptime())}`,
              "buttonText": "Opções",
              "listType": "SINGLE_SELECT",
              "sections": [{
                "title": `${DATACOMPLETA()}`,
                "rows": [{
                    "title": "Menu",
                    "rowId": "0",
                    "description": ""
                  },{
                    "title": "ChangeLog",
                    "rowId": "1",
                    "description": ""
                  }]
              }]
            }
          }, {})
          LorranX.relayWAMessage(menulist, {waitForAck: false})
          addFilter(from)
          break;
            case 'adminmenu':
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              var menuadmin = LorranX.prepareMessageFromContent(from, {
                "listMessage" :{
                  "title": `${HORARIOS} ${pushname}\n\nTambem posso te ajudar com o gerenciamento de grupos\nainda não tenho muitas funções mas meu dono me atualiza diariamente`,
                  "description": `Estou funcionando a \n${runtime(process.uptime())}`,
                  "buttonText": "Opções",
                  "listType": "SINGLE_SELECT",
                  "sections": [{
                    "title": `${DATACOMPLETA()}`,
                    "rows": [{
                        "title": "Admin Menu",
                        "rowId": "0",
                        "description": ""
                      },{
                        "title": "ChangeLog",
                        "rowId": "1",
                        "description": ""
                      }]
                  }]
                }
              }, {})
              LorranX.relayWAMessage(menuadmin, {waitForAck: false})
              addFilter(from)
              break;
              case 'ownermenu':
                if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              var meumenu = LorranX.prepareMessageFromContent(from, {
                "listMessage" :{
                  "title": `${HORARIOS} ${pushname}\n\nAs funções nesse menu so podem ser usadas pelo meu papai\nainda não tenho muitas funções mas meu dono me atualiza diariamente`,
                  "description": `Estou funcionando a \n${runtime(process.uptime())}`,
                  "buttonText": "Opções",
                  "listType": "SINGLE_SELECT",
                  "sections": [{
                    "title": `${DATACOMPLETA()}`,
                    "rows": [{
                        "title": "Owner Menu",
                        "rowId": "0",
                        "description": ""
                      },{
                        "title": "ChangeLog",
                        "rowId": "1",
                        "description": ""
                      }]
                  }]
                }
              }, {})
              LorranX.relayWAMessage(meumenu, {waitForAck: false})
              addFilter(from)
              break;
              case 'modmenu':
                if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              var modficadoresmenu = LorranX.prepareMessageFromContent(from, {
                "listMessage" :{
                  "title": `${HORARIOS} ${pushname}\n\nEsse é o menu de modificadores, aqui você pode modificar seus videos e audios,`,
                  "description": `Estou funcionando a \n${runtime(process.uptime())}`,
                  "buttonText": "Opções",
                  "listType": "SINGLE_SELECT",
                  "sections": [{
                    "title": `${DATACOMPLETA()}`,
                    "rows": [{
                        "title": "Modificadores de Audio",
                        "rowId": "0",
                        "description": ""
                      },{
                        "title": "Modificadores de Video",
                        "rowId": "1",
                        "description": ""
                      },{
                        "title": "ChangeLog",
                        "rowId": "1",
                        "description": ""
                      }]
                  }]
                }
              }, {})
              LorranX.relayWAMessage(modficadoresmenu, {waitForAck: false})
              addFilter(from)
              break;
        //END MENUS      
        case 'verify':
case 'registrar':
case 'register':
  if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
if (isRegister) return reply('```Seus dados ja estam registrados na minha database```')
veri = sender
if (isGroup) {
const namaUser = `${pushname}`
const serialUser = createSerial(10)
addRegisteredUser(sender, namaUser, time, serialUser)
hasil = `   〘 *NOVO USUARIO VERIFICADO COM SUCESSO* 〙

• *Nome :* ${namaUser}
• *Número :* ${sender.split("@")[0]}
• *Serial :* ${serialUser}
• *Data e hora da verificação :* ${time}
 
       ✘ *OBRIGADO POR SE REGISTRAR* ✘`
LorranX.sendMessage(from, hasil, text, {quoted: produtoverify})
console.log(color('❲ USUARIO VERIFICADO ❳'), '\nHora : ', color(time, 'yellow'), '\nNome : ', color(namaUser, 'cyan'), '\nSerial : ', color(serialUser, 'cyan'), '\nUSER : ', color(sender || groupName))
} else {
const namaUser = `${pushname}`
const serialUser = createSerial(10)
addRegisteredUser(sender, namaUser, time, serialUser)
hasil = `   〘 *NOVO USUARIO VERIFICADO COM SUCESSO* 〙

• *Nome :* ${namaUser}
• *Número :* ${sender.split("@")[0]}
• *Serial :* ${serialUser}
• *Data e hora da verificação :* ${time}

       ✘ *OBRIGADO POR SE REGISTRAR* ✘`
LorranX.sendMessage(from, hasil, text, {quoted: produtoverify})
console.log(color('❲ USUARIO VERIFICADO ❳'), '\nHora : ', color(time, 'yellow'), '\nNome : ', color(namaUser, 'cyan'), '\nSerial : ', color(serialUser, 'cyan'))
}
break;
        case 'owner':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          const vacrd = `BEGIN:VCARD\n`+`VERSION:3.0\n`+
                        `FN:Dono do Bot\n`+
                        `ORG:Desenvolvedor do BOT DO LORRAN\n`+
                        'TEL;type=CELL;type=VOICE;waid=553195703379' +
                        ':+553195703379\n' + 
                        'END:VCARD'
          LorranX.sendMessage(from, {display: "Dono do Bot", vcard: vacrd}, contact, {quoted: mek})
          addFilter(from)
          break;
        case 'github':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          LorranX.sendMessage(from, "Infelizmente ainda nao estou pronto, assim que possivel meu dono dispobilizara este script", text)
          break;
        case 'figu':
        case 'figurinha':
        case 'sticker':
          case 'f':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          var a = "BOT DO LORRAN";
          var b = "ALPHA VERSION";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await LorranX.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          LorranX.sendMessage(from, 'Deu errado carai', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          LorranX.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await LorranX.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          LorranX.sendMessage(from, 'Deu errado carai', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          LorranX.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            createExif(a, b);
            modStick(media, LorranX, mek, from)
          } else {
          reply(`Pra criar figurinhas c tem que marcar uma imagem ou video de ate 10 segundos com ${prefix}sticker`)
          }
          addFilter(from)
          break;
          case 'attp':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
                if (args.length < 1) return reply(`C tem que mandar um texto pra eu criar figurinha`)
                dulim = body.slice(5)
				apiglow = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dulim}`)
				LorranX.sendMessage(from, apiglow, sticker, {quoted: mek})
        addFilter(from)
				break;
        //FUNÇÕES DE GRUPO
        case 'mute':
            sendButtonMsg(`Coe ${pushname}, ${HORARIOS}\n\nCaso eu esteja te incomodando você pode me silenciar aqui nesse grupo, devo me silenciar ?`,``,[{
              buttonId:`${prefix}mutador on`,
              buttonText: {
                displayText: `sim`
              },
              type: 1
            },{
              buttonId: `${prefix}mutador off`,
              buttonText: {
                displayText: 'não'
              },
              type: 1
            }])
            break;
        case 'setgi': 
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
					if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
					if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
          const gpig = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
          const medipp = await LorranX.downloadAndSaveMediaMessage(gpig)
          await LorranX.updateProfilePicture (from, medipp)
          reply(`Pronto macaco, alterei a foto do grupo`)
          break;
        case 'grp':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
					if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
					if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
					if (args[0] === 'open') {
					    reply(`*Grupo aberto com sucesso*`)
						LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*Grupo fechado com sucesso*`)
						LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break;
         case 'resetlink':
         case 'resetarlik':
         case 'revokelink':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
					if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
          json = ['action', 'inviteReset', from]
         LorranX.query({json, expect200: true})
          reply('Link do grupo resetado')
         break;
         case 'demoteall':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
					if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
                      members_id = []
          for (let mem of groupMembers) {
             members_id.push(mem.jid)
            }
                      LorranX.groupDemoteAdmin(from, members_id)
                      break;
                      case 'promoteall':
                        if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
                        if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
                        if (!isGroup) return reply("Este comando so pode ser usado em grupos")
                        if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
                        if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                LorranX.groupMakeAdmin(from, members_id)
                break;
        case 'leave':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
          LorranX.groupLeave(from)
          .then((res) => {
            LorranX.sendMessage(sender, "tchau", text)
          })
          break;
          case 'setdesc':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
					if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
            LorranX.groupUpdateDescription(from, `${body.slice(9)}`)
            LorranX.sendMessage(from, 'Pronto macaco, alterei a descrição do grupo', text, {quoted: mek})
      break;
      case 'listadmin':
        if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
        if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					teks = `Lista de adms do grupo *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
          case 'promote':
            case 'promover':
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
					if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
					if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguem pra eu promover')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Membro comum promovido a adm do grupo, tô de olho filho da puta 🧐 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						LorranX.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Membro comum @${mentioned[0].split('@')[0]} promovido a adm do grupo tô de olho seu filho da puta 🧐`, mentioned, true)
						LorranX.groupMakeAdmin(from, mentioned)
					}
					break;
          case 'demote':
            case 'rebaixar':
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
            if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguem pra eu rebaixar do cargo de adm')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Adm demitido do cargo 🐒 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						LorranX.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Adm @${mentioned[0].split('@')[0]} demitido do cargo 🐒`, mentioned, true)
						LorranX.groupDemoteAdmin(from, mentioned)
					}
					break;
          case 'hidetag':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
					var value = body.slice(9)
					var group = await LorranX.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					LorranX.sendMessage(from, options, text)
          addFilter(from)
					break;
          case 'notif':		
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
mensagem = `Mensagem importante enviada por @${sender.split("@")[0]}\n*Mensagem : ${body.slice(7)}*`
group = await LorranX.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: mensagem,
  contextInfo: {
mentionedJid: mem
  },
  quoted: mek
}
await LorranX.sendMessage(from, options, text)
break
          case 'tagsticker':
            case 'tagfig': 
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await LorranX.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        LorranX.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`C tem que marcar uma figurinha`)
                    }
                    addFilter(from)
                    break;
                    case 'tagimg':
                      if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
                      if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
                      if (!isGroup) return reply("Este comando so pode ser usado em grupos")
                      if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await LorranX.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        LorranX.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`C tem que marcar uma imagem`)
                    }
                    addFilter(from)
                    break;
          case 'setname':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
            if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
                LorranX.groupUpdateSubject(from, `${body.slice(9)}`)
                LorranX.sendMessage(from, 'Pronto macaco, alterei o nome do grupo', text, {quoted: mek})
					break;
			     	case 'kick':
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
              if (!isGroup) return reply("Este comando so pode ser usado em grupos")
              if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
              if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguem pra eu expulsar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝘽 𝘼 𝙉 𝙄 𝘿 𝙊 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						LorranX.groupRemove(from, mentioned)
					} else {
						mentions(`𝘽 𝘼 𝙉 𝙄 𝘿 𝙊 @${mentioned[0].split('@')[0]}`, mentioned, true)
						LorranX.groupRemove(from, mentioned)
					}
          addFilter(from)
					break;
          case 'add':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
            if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
					if (args.length < 1) return reply('C tem que botsr um numero ai pra eu adicionar')
					if (args[0].startsWith('9')) return reply('Cade o código de pais seu anima')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						LorranX.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Deu errado carai, muito provavelmente o cara privou quem pode ó adicionar em grupos')
					}
          addFilter(from)
				break;
        case 'linkgp':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
          if (!isBotGroupAdmins) return reply("Para usar este comando o bot deve ser um dos administradores")
          try {
            const linkdogrupo = await LorranX.groupInviteCode(from)
            reply(`Link do grupo ${groupName}\nhttp://chat.whatsapp.com/${linkdogrupo}`)
          } catch (e) {
            reply("link invalido")
          }
          break;
          case 'delete':
			    	case 'del':
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
              if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
						LorranX.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
            addFilter(from)
						break;
            case 'ttt':
              case 'tictactoe':
                if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
                if (!isGroup) return reply("mainkan di group")
                if (args.length < 1) return reply ("tag orang yang mau kamu aja main")
                if (isTTT) return reply("permainan sedang berlangsung di group ini")
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag salah satu orang untuk di ajak bermain')
                ment = mek.message.extendedTextMessage.contextInfo.mentionedJid;
                player1 = sender
                player2 = ment[0]
                number = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
                id = from
                turn = player2
                roomttt.push({player1,player2,id,number,turn})
                LorranX.sendMessage(from, `@${player1.split("@")[0]} Telah Memulai Game\n\n*@${player2.split("@")[0]}* anda di tantang untuk bermain game tic tac toe oleh *@${player1.split("@")[0]}*\nketik Y/N untuk menerima/menolak tantangan\n\nketik ${prefix}delttt untuk membatalkan permainan di group ini`, text, {contextInfo: {mentionedJid: player2}})
                break;
              case 'delttt':
                if (!isGroup) return reply("command ini hanya untuk group")
                if (!isTTT) return reply("tidak ada permainan yang sedang berlangsung")
                rooms = roomttt.filter(titid => titid.id.includes())
                roomttt = rooms;
                reply("sukses")
                break;
        //END FUNÇÕES GRUPO
        //FUNÇÕES DONO
        case 'ban':
          if (!isOwner) return reply("Você não é meu papai 😡")
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Pronto papai, ja bani essa pessoa, agora ela não podera mais usar meus comandos`)
        console.log(color('NOVO USUARIO BANIDO'), '\nHora : ', color(time, 'yellow'))
				break
        case 'unban':
          if (!isOwner) return reply("Você não é meu papai 😡")
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Pronto papai, agora essa pessoa pode voltar a usar os meus comandos`)
        console.log(color('NOVO USUARIO DESBANIDO'), '\nHora : ', color(time, 'yellow'))
				break
            case 'block':
					LorranX.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply("Você não é meu papai 😡")
					LorranX.blockUser (`${body.slice(8)}@c.us`, "add")
					LorranX.sendMessage(from, `Pronto papai bloquiei esse filho da puta`, text)
				break;
				case 'unblock':
					LorranX.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply("Você não é meu papai 😡")
					LorranX.blockUser (`${body.slice(10)}@c.us`, "remove")
					LorranX.sendMessage(from, `Pronto papai, desbloquiei esse corno`, text)
				break;
        case 'setpp':
					if (!isOwner) return reply("Você não é meu papai 😡")
				    LorranX.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Pra usar esse comando c tem que marcar uma imagem ou enviar uma com a legenda .setpp`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await LorranX.downloadAndSaveMediaMessage(enmedia)
					await LorranX.updateProfilePicture(botNumber, media)
					reply('Pronto papai, alterei minha foto de perfil')
					break;
        case 'creategroup':
			case 'criargrupo':
        if (!isOwner) return reply("Você não é meu papai 😡")
        if (!isGroup) return reply("Este comando so pode ser usado em grupos")
				if (args.length < 1) return reply(`Pra usar esse comando c tem que adicionar um nome pro grupo e marcar as pessoas pra adicionar`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					LorranX.groupCreate(argz[0], anu)
					reply(`Pronto, criei o grupo ${argz[0]}`)
                }
				break
        case 'join':
          case 'entrar':
          if (args.length === 0 ) return reply(`Pra eu entrar em um grupo c tem que usar um link valido\nExemplo: ${prefix}join _https://chat.whatsapp.com/acasxxzdsad2_`)
          if (!isOwner)return reply("Você não é meu papai")
          var link = body.slice(6)
          res = link.replace("https://chat.whatsapp.com/", "");
          done = await LorranX.acceptInvite(res)
          reply(`Pronto papai, entrei nesse grupo ai`)
          break;
                  case 'self':
          if (!isOwner) return reply("Você não é meu papai 😡")
          if (args[0] === "on") {
            self = true;
            reply("Self-bot mod foi ativado")
          } else if (args[0] === "off") {
            self = false;
            reply("Self-bot mod foi desativado")
          }
          break;
          case 'selfmode':
            sendButtonMsg(`${isOwner == true ? "Ola papai\nescolha em qual modo eu devo operar" : "Você não é meu papai 😡"}`,`${DATACOMPLETA()}`,[{
              buttonId:`${prefix}self on`,
              buttonText: {
                displayText: `on`
              },
              type: 1
            },{
              buttonId: `${prefix}self off`,
              buttonText: {
                displayText: 'off'
              },
              type: 1
            }])
            break;
            case 'restart':
              if (!isOwner) return reply('Você não e meu papai 😡')
reply(`Calmai carai, ja to reiniciando`)
exec(`cd &&  npm start`)
sleep(4000)
reply('Pronto, ja reiniciei')
break
            case 'desligar':
if (!isOwner) return reply('Você não e meu papai 😡')
reply('Bot desligado')
setTimeout(() => {
LorranX.close()
}, 3000)
break;
case 'kickall':
                    if (!isOwner) return reply(`Você não e meu papai 😡`)
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*Arquivei* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					LorranX.groupRemove(from, members_id)
					break;
          case 'clearall':
					if (!isOwner) return reply(`Você não e meu papai 😡`)
					anu = await LorranX.chats.all()
					LorranX.setMaxListeners(25)
					for (let _ of anu) {
						LorranX.deleteChat(_.jid)
					}
					reply(`Pronto papai, limpei todos os meus chats`)
				break;
        //END FUNÇÕES DONO
        //CONVERSORES
        case 'tomp3':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
				LorranX.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Pra usar esse comando c tem que marcar um video')
				reply("Calmai macaco 🦧")
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await LorranX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Deu errado carai :(')
					buffer = fs.readFileSync(ran)
					LorranX.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
        addFilter(from)
				break;
				case 'togif':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const mediaaa = await LorranX.downloadAndSaveMediaMessage(encmediaaa)
                        reply("calmai macaco 🦧")
                        a = await webp2gifFile(mediaaa)
                        mp4 = await getBuffer(a.result)
                        LorranX.sendMessage(from, mp4, MessageType.video, {
                            mimetype: 'video/gif',
                            filename: `stick.gif`,
                            quoted: mek,
                        })
                        fs.unlinkSync(mediaaa)
                    }
                    addFilter(from)
                    break;
                    case 'toimg':
                      if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
                      if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
				if (!isQuotedSticker) return reply('Pra usar esse comando c tem que marcar uma figurinha')
					reply("Calmai macaco 🦧")
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await LorranX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						LorranX.sendMessage(from, buffer, image, {quoted: mek})
						fs.unlinkSync(ran)
					})
          addFilter(from)
				break;
        //END CONVERSORES
        //DOWNLOADERS
        case 'play':
          case 'p':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (args.length === 0) return reply(`Pra eu baixar a musica c tem que mandar um nome valido\nExemplo: *${prefix}play sertanejo*`)
          reply("Calmai macaco, pode ser que demore um pouco 🦧")
          var srch = args.join('')
          find = await yts(srch)
          res = find.all
          var reslink = res[0].url;
          try {
            yta(reslink)
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000) return sendMediaURL(thumb, `*PLAY MUSIC*\n\n*Titulo* : ${title}\n*Formato do arquivo* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Infelizmente minha API atual nao suporta baixar e converter musicas muito grandes, caso seja muito grande vou mandar o seu audio em formato de link_`)
                sendMediaURL(thumb, `*PLAY MUSIC*\n\n*Titulo* : ${title}\n*Formato do arquivo* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Ja vou baixar o sua musica, pode ser que demore um pouco, fica calmo ai carai_`)
                await sendMediaURL(dl_link).catch(() => reply('error'))
              })
            })
          } catch (e) {
            reply(`server error`)
          }
          addFilter(from)
          break;
        case 'pvideo':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (args.length === 0) return reply(`Pra eu baixar esse video c tem que mandar um nome valido\nExemplo: *${prefix}pvideo macaco*`)
          reply("Calmai macaco, pode ser que demore um pouco 🦧")
          var srch = args.join('')
          find = await yts(srch);
          res = find.all 
          var reslink = res[0].url
          try {
            ytv(reslink)
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000) return sendMediaURL(thumb, `*PLAY VIDEO*\n\n*Titulo* : ${title}\n*Formato do arquivo* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Infelizmente minha API atual não suporta baixar videos muito grandes, caso seja muito grande vou mandar o seu audio em formato de link_`)
                const captions = `*PLAY VIDEO*\n\n*Titulo* : ${title}\n*Formato do arquivo* : MP4\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Ja vou baixar o seu video, pode ser que demore um pouco, fica calmo ai carai_`
                sendMediaURL(thumb, captions)
                await URL(dl_link).catch(() => reply('error'))
              })                
            })
          } catch (e) {
            reply('server error')
          }       
          addFilter(from)                  
          break;
        case 'ytmp3':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (args.length < 1) return reply('Pra eu baixar o audio c tem que usar um link valido do youtube')
          reply("Calmai macaco, pode ser que demore um pouco 🦧")
          var link = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
          if (!link) return reply("Link invalido")
          try {
            yta(args[0])
            .then((res) =>{
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000) return sendMediaURL(thumb, `*Achei carai*\n\n*Titulo* : ${title}\n*Formato de arquivo* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Infelizmente minha API atual nao suporta baixar e converter videos muito grandes, caso seja muito grande vou mandar o seu audio em formato de link_`)
                const caption = `*Achei carai*\n\n*Titulo* : ${title}\n*Formato* : MP3\n*Tamanho* : ${filesizeF}\n\n_Ja vou baixar o seu audio, pode ser que demore um pouco, fica calmo ai carai_`
                sendMediaURL(thumb, caption)
                sendMediaURL(dl_link).catch(() => reply("file error"))
              })
            })
          } catch (e) {
            reply("error server")
          }
          addFilter(from)
          break;
        case 'ytmp4':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (args.length < 1) return reply('Pra eu baixar o video c tem que usar um link valido do youtube')
          reply("Calmai macaco, pode ser que demore um pouco 🦧")
          var link = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
          if (!link) return reply("link invalido")
          try {
            ytv(args[0])
            .then((res) =>{
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000) return sendMediaURL(thumb, `*Achei carai!*\n\n*Titulo* : ${title}\n*Formato do arquivo* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Infelizmente minha API atual nao suporta baixar videos muito grandes, caso seja muito grande vou mandar o seu video em formato de link_`)
                const caption = `*Achei carai*\n\n*Titulo* : ${title}\n*Formato* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n\n_Ja vou baixar o seu video, pode ser que demore um pouco, fica calmo ai carai_`
                sendMediaURL(thumb, caption)
                sendMediaURL(dl_link).catch(() => reply("file error"))
              })
            })
          } catch (e) {
            reply("error server")
          }
          addFilter(from)
          break;
          case 'twitter':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (!isUrl(args[0]) && !args[0].includes('twitter.com') && !q) return reply("Link invalido")
            reply("Calmai macaco, pode ser que demore um pouco 🦧")
            var res = await hx.twitter(args[0])
            sendMediaURL(res.HD, "Tai seu video")
            addFilter(from)
            break;
            case 'ig':
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`Link invalido`)
        reply("Calmai macaco, pode ser que demore um pouco 🦧") 
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    LorranX.sendMessage(from,link,video,{quoted: mek,caption: `Tai seu video`})
                } else {
                    let link = await getBuffer(i.url)
                    LorranX.sendMessage(from,link,image,{quoted: mek,caption: `Tai sua foto`})                  
                }
            }
            });
	    break;
        //END DOWNLOADERS
          case 'probabilidade':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
              rate = body.slice(1)
              const ra =['99','7','1000','-10','31','0','4','9','17','28','34','48','59','62','100','29','94','75','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              LorranX.sendMessage(from, 'Comando : *'+rate+'*\n\nResultado : '+ te+'%', text, { quoted: mek })
              break;
                    case '%gay':
                      if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
                      if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Porra, burrão, c tem que marcar alguem pra eu dizer a %')
              rate = body.slice(1)
              const gay =['99','7','1000','-10','31','0','4','9','17','28','34','48','59','62','100','29','94','75','41','39']
              const jabs = gay[Math.floor(Math.random() * gay.length)]
              LorranX.sendMessage(from, '*Porcentagem de quão gay esse cara é*\n\nResultado : '+ jabs+'%', text, { quoted: mek })
              break;
              case 'dado':
          case 'dadin':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
              const dadinhos = ["⚀","⚁","⚂","⚃","⚄","⚅"]
              dadoaleatorio = dadinhos[Math.floor(Math.random() * dadinhos.length)]
              dadin = fs.readFileSync('./database/dadin/'+dadoaleatorio+'.webp')
              LorranX.sendMessage(from, dadin, sticker, {quoted: mek})
              addFilter(from)
              break;
        //MODIFICAR AUDIO
				  case 'slowmo':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isQuotedAudio) return reply('Marque um áudio')
        reply("Calmai macaco 🦧");
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await LorranX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				LorranX.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
        addFilter(from)
				  break;
          case 'acelerar':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)  
        reply("Calmai macaco 🦧");
        if (!isQuotedAudio) return reply('Marque um áudio')
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
        media = await LorranX.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        LorranX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
        fs.unlinkSync(ran)
        })
        addFilter(from)
          break; 
				  case 'esquilo':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedAudio) return reply('Marque um áudio')
        reply("Calmai macaco 🦧");
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await LorranX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				LorranX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
        addFilter(from)
				  break;
				  case 'engrossar':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedAudio) return reply('Marque um áudio')
        reply("Calmai macaco 🦧");
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await LorranX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				LorranX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
        addFilter(from)
				  break;
				  case 'bass': 
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedAudio) return reply('Marque um áudio')  
        reply("Calmai macaco 🦧");              
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await LorranX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				LorranX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
        addFilter(from)
				  break;
          case 'estourar':  
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
          if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)     
        if (!isQuotedAudio) return reply('Marque um áudio')
        reply("Calmai macaco 🦧");
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
        media = await LorranX.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        LorranX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
        fs.unlinkSync(ran)
        })
        addFilter(from)
          break;
          case "reverse":
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedAudio) return reply("Pra usar esse comando c tem que marcar um audio");
        reply("Calmai macaco 🦧");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
        .message.extendedTextMessage.contextInfo;
        media = await LorranX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp3");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply(`Error!`);
        hah = fs.readFileSync(ran);
        LorranX.sendMessage(from, hah, audio, {mimetype: "audio/mp4", ptt:true, quoted: mek,});
        fs.unlinkSync(ran);
        });
        addFilter(from)
          break;
          case 'robot':
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedAudio) return reply("Pra usar esse comando c tem que marcar um audio");
        reply("Calmai macaco 🦧");
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await LorranX.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
LorranX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
  addFilter(from)
break;
        //END MODIFICAR AUDIO
        //MODIFICAR VIDEO
          case "reversev":
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedVideo) return reply("Pra usar esse comando c tem que marcar um video");
        reply("Calmai macaco 🦧");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
        .message.extendedTextMessage.contextInfo;
        media = await LorranX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply(`Error!`);
        buffer453 = fs.readFileSync(ran);
        LorranX.sendMessage(from, buffer453, video, {
        mimetype: "video/mp4",
        quoted: mek,
        });
        fs.unlinkSync(ran);
        });
        addFilter(from)
          break;
          case "acelerarv":
            if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
            if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
        if (!isQuotedVideo) return reply("Pra usar esse comando c tem que marcar um video");
        reply("Calmai macaco 🦧");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
        .message.extendedTextMessage.contextInfo;
        media = await LorranX.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
        `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
        (err) => {
        fs.unlinkSync(media);
        if (err) return reply(`Error!`);
        buffer453 = fs.readFileSync(ran);
        LorranX.sendMessage(from, buffer453, video, {
        mimetype: "video/mp4",
        quoted: mek,
        });
        fs.unlinkSync(ran);
        }
        );
        addFilter(from)
            break;
            case "slowv":
              if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
              if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isQuotedVideo) return reply("Pra usar esse comando c tem que marcar um video");
          reply("Calmai macaco 🦧");
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await LorranX.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return reply(`Error!`);
          buffer453 = fs.readFileSync(ran);
          LorranX.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          }
          );
          addFilter(from)
            break;
        //END MODIFICADORES VIDEO
            case 'lirik':
          if(!q) return reply('lagu apa?')
          let song = await hx.lirik(q);
          sendMediaURL(song.thumb, song.lirik)
            break;
            case 'jadibot':
          if (mek.key.fromMe) return reply("tidak bisa menjadi bot dalam bot")
          jadibot(reply, LorranX, from)
            break;
            case 'stopjadibot':
          if (mek.key.fromMe) return reply("```khusus Owner```")
          stopjadibot(reply)
            break;
            case 'listjadibot':
          let teks = "*[ LIST BOT ]*"
          for(let i of listjadibot) {
          teks += `*Nomor* : ${i.jid.split('@')[0]}*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
          }
          reply(teks)
            break;
            case 'suit':
          sendButtonMsg(`pilih salah satu`,``,[{
          buttonId:`${prefix}playsuit batu`,
          buttonText: {
          displayText: `Pedra (🗿)`
          },
          type: 1
          },{
          buttonId: `${prefix}playsuit kertas`,
          buttonText: {
          displayText: 'Papel (📄)'
          },
          type: 1
          },{
          buttonId: `${prefix}playsuit gunting`,
          buttonText: {
          displayText: 'Tesoura (✂️)'
          },
          type: 1
          }])
            break;
            case 'playsuit':
          if (args.length < 1) return reply("pilih batu/gunting/kertas")
          if (args[0] === "gunting") {
          gunting = [
          "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
          "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
          "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
          ]
          gun = gunting[Math.floor(Math.random() * gunting.length)]
          reply(gun)
          } else if (args[0] === 'kertas') {
          ker = [
          "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
          "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
          "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
          ]
          kertas = ker[Math.floor(Math.random() * ker.length)]
          reply(kertas)
          } else if (args[0] === 'batu') {
          bat = [
          "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
          "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
          "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
          ]
          batu = bat[Math.floor(Math.random() * bat.length)]
          reply(batu)
          } else {
          reply('Pilih gunting/batu/kertas')
          }
            break; 
            case 'slot':
          isiSlot = ["🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍"];
          slotBoard = ["","","","","","","","",""];
          for (let i = 0; i < slotBoard.length; i++) {
          itemSlot = isiSlot[Math.floor(Math.random() * isiSlot.length)];
          slotBoard[i] = itemSlot
          }
          if (slotBoard[1] == slotBoard[4] && slotBoard[4] == slotBoard[7] && slotBoard[7] == slotBoard[1]) {
          reply(`*[ MENANG ]*\n\n ${slotBoard[0]} : ${slotBoard[3]} : ${slotBoard[6]}\n ${slotBoard[1]} : ${slotBoard[4]} : ${slotBoard[7]} <===\n ${slotBoard[2]} : ${slotBoard[5]} : ${slotBoard[8]} \n\n*[ SLOT ]*\nketerangan: jika anda mendapatkan 3 baris buah yang sama maka anda menang\ncontoh: 🍒 : 🍒 : 🍒 <===`)
          } else {
          reply(`*[ KALAH ]*\n\n ${slotBoard[0]} : ${slotBoard[3]} : ${slotBoard[6]}\n ${slotBoard[1]} : ${slotBoard[4]} : ${slotBoard[7]} <===\n ${slotBoard[2]} : ${slotBoard[5]} : ${slotBoard[8]} \n\n*[ SLOT ]*\nketerangan: jika anda mendapatkan 3 baris buah yang sama maka anda menang\ncontoh: 🍒 : 🍒 : 🍒 <===`)
          }
            break;
            case 'caripesan':
          if (args.length <1) return reply(`query salah\ncontoh ${prefix}caripesan Hi|5`)
          if (q.includes("|")) {
          try {
          jum = q.split("|")[1]
          if (jum > 10) return reply("jumblah terlalu banyak\nminimal: 10")
          to = parseInt(jum) + 1
          res = await LorranX.searchMessages(q.split(0), from, to,1)
          if (res.messages.length < 2) return reply("pesan tidak di temukan")
          if (res.messages.length < parseInt(to)) reply(`hanya di temukan ${res.messages.length - 1} pesan`)
          for (let i = 1; i < res.messages.length; i++) {
          if (res.messages[i].message) {
          LorranX.sendMessage(from, "nih pesan nya!!", text, {quoted: res.messages[i]})
          }
          }
          } catch (e) {
          reply("maaf error:)\ncoba lagi")
          }
          } else {
          return(`maaf masukan query yang benar\ncontoh: ${prefix}${command} halo|5`)
          }
            break;
        //PARA BOTÕES
        case 'mutador':
          if (isBanned) return reply(`Coe viado, por algum motivo você esta proibido de usar meus comandos, converse com meu dono`)
					if (!isRegister) return reply(`Opa, antes de usar os comandos do bot você precisa se registrar, pra fazer isso, basta enviar ${prefix}verify`)
          if (!isGroup) return reply("Este comando so pode ser usado em grupos")
					if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
               if (args[0].toLowerCase() === 'on'){
               if (isMuted) return reply(`Ja estou silenciado nesse grupo`)
               mute.push(from)
               fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
               reply(`Pronto, o bot foi silenciado e agora somente os adms podem usar os comandos`)
               } else if (args[0].toLowerCase() === 'off'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
               reply(`Pronto, agora todos podem usar meus comandos novamente`)
               } else {
               reply(`Selecione on ou off`)
}
               break
 

        //GARBAGE

           /*       case 'tiktok':
          if (!isUrl(args[0]) && !args[0].includes('tiktok.com') && !q) return reply("Link invalido")
          sek = reply("Calmai macaco")
          hx.ttdownloader(args[0])
          .then(res => {
            const {
              nowm
            } = res;
            axios.get(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}apikey=beta`)
            .then(async (a) => {
              me = `link: ${a.data}`
              salsa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
              setTimeout(() => {
                LorranX.deleteMessage(from, sek.key)
              }, 10000);
            })
          })
          .catch( e => console.log(e))
          break; */
           /*       case 'eval':
          if (sender != "553195703379@s.whatsapp.net") return reply("khusus owner")
          try {
            LorranX.sendMessage(from, JSON.stringify(eval(body.slice(6)),null,'\t'), text, {quoted: mek})
          } catch (e) {
            reply(String(e))
          }
          break; */
 /*       case 'brainly':
          if (args.length < 1) return reply('Pertanyaan apa')
          soal = args.join(' ')
          brainly(`${soal}`)
          .then(res => {
            let teks = `<==========================>\n`
            for (let i of res.data) {
              teks += `*[ Brainly ]*\nsoal:${i.pertanyaan}\n\njawaban:${i.jawaban[0].text}\n<==========================>\n`
            }
            LorranX.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})
          })
          break; */
          /*        case 'ig':
          if (!isUrl(args[0]) && !args[0].includes('instagram.com') && args.length < 1) return reply("coba check link nya")
          reply("tunggu")
          hx.igdl(args[0])
          .then(async (res) => {
            for (let i of res.medias) {
              if (i.url.includes("mp4")){
                let link = await getBuffer(i.url)
                LorranX.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
                let link = await getBuffer(i.url)
                LorranX.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})
              }
            }
          })
          break;
        case 'fb':
          if (!isUrl(args[0]) && !args[0].includes('facebook.com') && args.length < 1) return reply("coba check link nya")
          reply("tunggu")
          hx.fbdown(args[0])
          .then(res => {
            link = `${res.HD}`
            sendMediaURL(link, `*Link video_normal* : ${re.Normal_video}`)
          })
          break;
        case 'igstory':
          if(!q) return reply('Usernamenya?')
          hx.igstory(q)
          .then(async result => {
            for(let i of result.medias){
              if(i.url.includes('mp4')){
                let link = await getBuffer(i.url)
                LorranX.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
                let link = await getBuffer(i.url)
                LorranX.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
              }
            }
          });
          break; */
            /*       case 'ytsearch':
          if (args.length < 1) return reply("masukan judul video")
          var search = args.join('')
          try {
            var find = await yts(search)
          } catch {
            return await reply("error")
          }
          result = find.all
          var tbuff = await getBuffer(result[0].image)
          var ytres = `*[ YT Result ]*\n*————————————————————*\n\n`
          find.all.map((video) => {
            ytres += '❏ Title: ' + video.title + '\n'
            ytres += '❏ Link: ' + video.url + '\n'
            ytres += '❏ Durasi: ' + video.timestamp + '\n'
            ytres += `❏ Upload: ` + video.ago +`\n*————————————————————*\n\n`
          })
          await fakethumb(tbuff, ytres)
          break;
        case 'igstalk':
          if (args.length < 1) return reply("masukan username")
          ig.fetchUser(args[0])
          .then(user => {
            thum = `${user.profile_pic_url_hd}`
            desc = `*ID* : ${user.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${user.full_name}\n*Bio* : ${user.biography}\n*Followers* : ${user.followers}\n*Following* : ${user.following}\n*Private* : ${user.is_private}\n*Verified* : ${user.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(thum, desc)
          })
          break; */
            /*      });
  LorranX.on("group-participants-update", async(mem) => {
    try {
      groupMetadata =await LorranX.groupMetadata(mem.jid);
      groupMembers = groupMetadata.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      anu = mem.participants[0];
      ppmem = await LorranX.getProfilePicture(anu);
      try {
        pp_user = await LorranX.getProfilePicture(anu);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (mem.action == "add" ) {
        buff = await getBuffer(ppmem);
        text = `${HORARIOS} @${anu.split("@")[0]}\nselamat datang di group ${groupMetadata.subject}\n\n*info group*\nmember: ${groupMembers.length}/256\ndeskripsi: ${groupMetadata.desc}\n\n`;
        LorranX.sendMessage(groupMetadata.id, buff, MessageType.image, { caption: text, contextInfo: { mentionedJid: [anu.split("@")[0] + "@s.whatsapp.net"]}});
      } else if (mem.action == "remove" ) {
        buff = await getBuffer(ppmem);
        text = `sampai jumpa @${anu.split("@")[0]}\nsemoga tenang di alam sana ya kak:)`;
        LorranX.sendMessage(groupMetadata.id, buff, MessageType.image, { caption: text, contextInfo: { mentionedJid: [anu.split("@")[0] + "@s.whatsapp.net"]}});
      } else if (mem.action == "promote") {
        LorranX.sendMessage(groupMetadata.id, `M@${anu.split("@")[0]} telah di promote`, MessageType.text, { contextInfo: {mentionedJid: [anu.split("@")[0]+ "@s.whatsapp.net"]}});
      } else if (mem.action == "demote") {
        LorranX.sendMessage(groupMetadata.id, `Adm @${anu.split("@")[0]} rebaixado a membro comum`, MessageType.text, { contextInfo: {mentionedJid: [anu.split("@")[0]+ "@s.whatsapp.net"]}});
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    } */
        //END GARBAGE

        
        default:
          if (isTTT && isPlayer2) {
            if (budy.startsWith("Y")){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}

giliran = @${tty.player1.split('@')[0]}`
              LorranX.sendMessage(from, teksboard, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            if (budy.startsWith('N')) {
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              LorranX.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '❎'
            main[0].number[noober] = s
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              LorranX.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            LorranX.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '🅾️'
            main[0].number[noober] = s
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              LorranX.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            LorranX.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
};