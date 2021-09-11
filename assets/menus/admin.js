const menuadmin = (prefix) => {
	return `
    ╔═══════════════════
    ║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
    ╠═══════════════════
    ║│ *↭ Sobre o Bot*
    ║ *Bateria* : ${battery.persen}
    ║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
    ║ *Marca do celular* : ${client.user.phone.device_manufacturer}
    ║ *Nome do servidor* : ${client.browserDescription[0]}
    ║ *Servidor* : ${client.browserDescription[1]}
    ║ *Versão* : ${client.browserDescription[2]}
    ║ *Modelo do celular* : ${client.user.phone.device_model}
    └ *Versão do Whatsapp* : ${client.user.phone.wa_version}
    
    *↭  ${HORARIOS} ${pushname}*
    
    ║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙖𝙙𝙢𝙞𝙣⛤ * ❉──
    
    ║│↭_*   [ *${prefix}leave* ] 
    ║│↭_*   [ *${prefix}setdesc* ]
    ║│↭_*   [ *${prefix}setname* ] 
    ║│↭_*   [ *${prefix}promote* ] 
    ║│↭_*   [ *${prefix}demote* ]
    ║│↭_*   [ *${prefix}hidetag* ]
    ║│↭_*   [ *${prefix}kick* ] 
    ║│↭_*   [ *${prefix}add* ] 
    ║│↭ _*  [ *${prefix}linkgp* ] 
    
    ║│
    
    ║ | ↭_*  *[Meu criador]*
    ║https://wa.me/+553195703379
    ╰───────────`
}

exports.menuadmin = menuadmin