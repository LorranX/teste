const a = '```'

exports.wait = () => {
	return`*Calmai macaco 🦧*`
}

exports.wait2 = () => {
	return`*Calmai macaco, pode ser que demore um pouco 🦧*`
}

exports.banido = () => {
	return`*Eita zap, por algum motivo você esta proibido de usar meus comandos, converse com meu dono*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 𝘾𝘼𝙍𝙏𝙀𝙄𝙍𝘼 𝘿𝙀 𝙋𝙊𝙉𝙏𝙊𝙎 💵 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Pontos* : ${uangkau}\n┗━━━━━━━━━━`
}
