const a = '```'

exports.wait = () => {
	return`*Calmai macaco 🦧*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 𝘾𝘼𝙍𝙏𝙀𝙄𝙍𝘼 𝘿𝙀 𝙋𝙊𝙉𝙏𝙊𝙎 💵 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Pontos* : ${uangkau}\n┗━━━━━━━━━━`
}