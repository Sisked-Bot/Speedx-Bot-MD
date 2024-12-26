let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:_*Creador Onyx*_;;\nFN:_*Creador Onyx*_\nORG:_*Creador Onyx*_\nTITLE:\nitem1.TEL;waid=593985327644:593985327644\nitem1.X-ABLabel:_*Creador Onyx*_\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:_*Creador Onyx*_\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
