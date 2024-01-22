let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*𝘕𝘪𝘯𝘨ú𝘯 𝘮𝘢𝘳 𝘦𝘯 𝘤𝘢𝘭𝘮𝘢 𝘩𝘪𝘻𝘰 𝘦𝘹𝘱𝘦𝘳𝘵𝘰 𝘢 𝘶𝘯 𝘮𝘢𝘳𝘪𝘯𝘦𝘳𝘰.* ${pesan}`
let teks = `╭┄〔 *${wm}* 〕┄⊱\n┆ 💠 • 𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 • 💠*\n┆\n┆❏ ${oi}\n┆\n┆❏ *𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨:*\n`
for (let mem of participants) {
teks += `🫧▪︎.  @${mem.id.split('@')[0]}\n`}
teks += `└ 𝙊𝙘𝙚𝙖𝙣 𝘾𝙤𝙧𝙥 🩵🌀•. \n\n`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
