exports.donate = (id, FAKHRIBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${FAKHRIBOT}*
╠════════════════════
║├≽️⚜ *PULSA* : _0812-4002-238_
║├≽️⚜ *DANA* : _0853-9447-1968_
╠════════════════════
║  *${FAKHRIBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${FAKHRIBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY FAKHRIGANZ*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}

