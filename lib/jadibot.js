const { 
  WAConnection,
  MessageType,
  Mimetypeb
} = require('@adiwajshing/baileys');
let qrcode = require('qrcode');
const fs = require("fs");

listjadibot = [];

const jadibot = async (reply, LorranX, id) => {
  conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2123, 8];
  conn.browserDescription = [ 'Conexao Secundaria', '', '3.0' ];
  conn.on('qr', async qr =>{
    let bot = await qrcode.toDataURL(qr, { scale: 8 });
    let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64');
    bot = await LorranX.sendMessage(id,buffer,MessageType.image,{caption:'Pro bot logar no seu numero leia o QR code acima\n*eu enviarei um QR code a cada 30 segundos ate que alguem se conecte*'});
    setTimeout(() => {
     	LorranX.deleteMessage(id, bot.key);
    },30000);
  });
  conn.on('connecting', () => {
    LorranX.sendMessage(id, "*[ BOT ]*_To tentando conectar_", MessageType.text);
  });
  conn.on('open', () => {
    reply("*[ BOT ]*  _conectado_");
    reply("```lembre-se que essa é apenas uma conexão secundaria, caso o bot principal por algum motivo pare de funcionar o seu tambem ira parar```");
  });
  await conn.connect({timeoutMs: 30 * 1000});
  listjadibot.push(conn.user);
  require('../index.js')(conn);
};

const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close();
	reply('Todos as conexoes secundarias foram fechadas');
};

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
};