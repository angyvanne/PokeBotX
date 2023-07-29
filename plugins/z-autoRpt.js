/**
[ By @RadaAsh || https://github.com/angyvanne ]
**/
import db from '../lib/database.js'
import * as fs from 'fs'
import not from '../lib/modokuaker.js'

let handler = m => m
handler.all = async function(m) {
	if (!m.isGroup) return !1
	let chat = db.data.chats[m.chat]
	let { limit, banned } = db.data.users[m.sender]
	if (chat.isBanned) return 
	if (banned) return
	try{var userthumb=await this.profilePictureUrl(m.sender,'image')}catch{var userthumb='https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'}
	let mylogo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg')
	let rtps1 = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	let rtps2 = m.text.slice(0).trim().split(/ +/).shift().toLowerCase()
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pushname = await this.getName(m.sender)
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
	let reddom = redes[Math.floor(Math.random() * redes.length)]
//Random//
if (rtps1.includes("prefijo?") || (rtps1.includes("Prefijo?"))){
m.reply(`*Por si estas preguntando cual es el prefijo del bot*\n_Prefijo actual para uso de comandos_ : \n\n" *${Prefijo}* "\n`)
}
//
if (rtps2.startsWith("destraba") || rtps2.startsWith("Destraba") || rtps2.startsWith("destrava") || rtps2.startsWith("Destrava")){
if (!m.isBaileys && !m.fromMe) { this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
} else {
this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
m.limit = 0
}
}
//
if (rtps1.includes(".Pokebot") || rtps1.includes(".pokebot")) {
    m.reply(`🤖*Hola, gracias por usar el bot. Aquí tienes la lista de comandos (RECUERDA PONER UN . ANTES DE CADA COMANDO):*`)
    setTimeout(() => {
        m.reply(`*Comando* | *Descripción*\n` +
                `--------------------------------\n` +
                `*.Safari o .safari* | Información de los próximos Safari Zone\n` +
                `*.sello o .Sello* | Información de los Pokémon que pueden salir de recompensa semanal\n` +
                `*.cd o .Cd* | Información de los próximos días de la comunidad\n` +
                `*.HraDes o .hrades* | Información de las próximas horas destacadas\n` +
                `*.HraLeg o .hraleg* | Información de las próximas horas legendarias\n` +
                `*.incleg o .IncLeg* | Información de los días de cambio de incursiones legendarias\n` +
                `*.Megas o .megas* | Información del día de cambio de mega incursiones\n` +
                `*.eentos o .Eventos* | Enlista los próximos eventos en el juego\n` +
                `*.sticker* | Úsalo para convertir una imagen en sticker, también funciona con videos de menos de 10 segundos de duración. 😎🤝`)
    }, 2500)
    m.limit = 0
}

if (rtps1.includes(".Safari") || rtps1.includes(".safari")) {
    m.reply(`🤖*Hola, en un momento te comparto la información de los próximos Safari Zone:*`)
    setTimeout(() => {
        m.reply(`*Lugar* | *Fechas* | *Costos aproximados*\n` +
                `--------------------------------------\n` +
                `*Osaka* | 04-06 Agosto | Agotado\n` +
                `*Londres* | 04-06 Agosto | 27 libras esterlinas o 600 pesos mexicanos aprox.\n` +
                `*Nueva York* | 18-20 Agosto | 25 dólares o 450 pesos mexicanos aprox.\n` +
                `\n*Cordenadas (por si eres un sucio fly)*\n` +
                `--------------------------------\n` +
                `Proximamente te daré las coordenadas 😎🤝`)
    }, 2500)
    m.limit = 0
}

if (rtps1.includes(".sello") || rtps1.includes(".Sello")){
m.reply(`🤖*hola, aqui esta la imagen de las recompensas del sello semanal de mayo:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/rsqqCBwH/Sello-semanal-junio.png' }, caption: `*suerte con tus shiny*` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".cd") || rtps1.includes(".Cd")){
m.reply(`🤖*hola, en un momento te comparto la informacion de los proximos dias de la comunidad:*`)
setTimeout( () => {
this.sendMessage(m.chat, { image: {url: 'https://i.postimg.cc/qqmHcgYt/CD.png' }, caption: `*10/Junio:* Aun sin informacion del protagonista\n*evolucion:* Sin informacion\n*ataque legado:* Sin informacion\n*bonus:* sin informacion` }, { quoted: m })
}, 2500)
m.limit = 0
}
if (rtps1.includes(".HraDes") || rtps1.includes(".hrades")) {
    m.reply(`🤖*Buscando las siguientes horas destacadas:*`)
    setTimeout(() => {
        this.sendMessage(m.chat, {
            image: {url: 'https://i.postimg.cc/k490kxP6/hora-des-1.png'},
            caption: `*Fecha* | *Pokémon* | *Bonus*\n` +
                     `--------------------------------------\n` +
                     `*06/Junio* | Krabby, Kabuto, Corphish, Clauncher, Crabrawler | x3 PX por captura\n` +
                     `*13/Junio* | Binacle | x2 Caramelos por captura\n` +
                     `*20/Junio* | Sunkern | x2 Caramelos por transferencia\n` +
                     `*27/Junio* | Doduo | x2 PX por evolución`
        }, { quoted: m })
    }, 2500)
    m.limit = 0
}

if (rtps1.includes(".HraLeg") || rtps1.includes(".hraleg")) {
    m.reply(`🤖*Buscando las siguientes horas legendarias:*`)
    setTimeout(() => {
        this.sendMessage(m.chat, {
            image: {url: 'https://i.postimg.cc/MGJNQyTP/legend-1.png'},
            caption: `*Fechas* | *Pokémon*\n` +
                     `--------------------------------------\n` +
                     `*07 y 14 de Junio* | Treio del lago\n` +
                     `*21 y 28 de Junio* | Nihilego (estreno shiny)`
        }, { quoted: m })
    }, 2500)
    m.limit = 0
}

if (rtps1.includes(".IncLeg") || rtps1.includes(".incleg")) {
    m.reply(`🤖*Buscando las llegadas de las próximas raid legendarias:*`)
    setTimeout(() => {
        this.sendMessage(m.chat, {
            image: {url: 'https://i.postimg.cc/MGJNQyTP/legend-1.png'},
            caption: `*Fechas* | *Pokémon*\n` +
                     `--------------------------------------\n` +
                     `*01-15/Junio* | Azelf, Uxie y Mesprit (apareciendo en su región)\n` +
                     `*15-29/Junio* | Nihilego (estreno shiny)\n` +
                     `*29/Junio-6/Julio* | Heatran\n` +
                     `*6-13/Julio* | Articuno, Zapdos y Moltres\n` +
                     `*13-25/Julio* | Ragieleki\n` +
                     `*25/Julio-04/Agosto* | Ragidrago\n` +
                     `*04-16/Agosto* | Cresselia\n` +
                     `*16-23/Agosto* | Sorpresa`
        }, { quoted: m })
    }, 2500)
    m.limit = 0
}

if (rtps1.includes(".Megas") || rtps1.includes(".megas")) {
    m.reply(`🤖*Buscando las llegadas de las próximas megaraid:*`)
    setTimeout(() => {
        this.sendMessage(m.chat, {
            image: {url: 'https://i.postimg.cc/kXtTvBLk/mega-swamperto.png'},
            caption: `*Fechas* | *Mega Pokémon*\n` +
                     `--------------------------------------\n` +
                     `*01-15/Junio* | Mega Swampert\n` +
                     `*15-29/Junio* | Mega Sceptile\n` +
                     `*29/Junio-6/Julio* | Mega desconocida\n` +
                     `*6-13/Julio* | Mega Blastoise\n` +
                     `*13-25/Julio* | Mega Blaziken\n` +
                     `*25/Julio-04/Agosto* | Mega Tyranitar\n` +
                     `*04-16/Agosto* | Mega Gyarados\n` +
                     `*16-23/Agosto* | Mega Salamance`
        }, { quoted: m })
    }, 2500)
    m.limit = 0
}

if (rtps1.includes(".eventos") || rtps1.includes(".Eventos")) {
    m.reply(`🤖*Hola, enviando los siguientes eventos:*`)
    setTimeout(() => {
        this.sendMessage(m.chat, {
            image: {url: 'https://i.postimg.cc/rpqgTgzk/todo-junio.jpg'},
            caption: `*Fecha* | *Evento* | *Detalles*\n` +
                     `--------------------------------------\n` +
                     `*03/Junio* | Día de investigación "Buscando Oro" | - Encuentros con Caterpie, Magikarp, Nosepass, Sableye y Barboach al realizar investigaciones de campo.\n` +
                     `| | - Probabilidad de shiny aumentada para los Pokémon que aparezcan de misiones de campo.\n` +
                     `| | - Spawn salvaje de Weedle, Bellsprout, Poochyena, Buizel, Tympole, Shelmet, Stufful.\n` +
                     `| | - Posibilidad de encontrar a Lickitung y Azumarill salvajes.\n` +
                     `| | - Investigación de 1 dólar con recompensas, reclamar antes de las 17:00hrs.\n` +
                     `| | - Bonus de pokeparadas doradas con Gimmighoul y más items.\n` +
                     `\n*06-12/Junio* | Festival Acuático | - Sandygast y Palossand llegan al juego.\n` +
                     `| | - Desafío Global de 300 millones de buenos lanzamientos (más Caramelos y Caramelos XL por lanzamientos al superarlo).\n` +
                     `| | - Pokémon salvajes: Tentacool, Shellder, Krabby, Exeggutor-A, Horsea, Staryu, Marill, Wingull, Wailmer, Spheal, Finneon, Dwebble, Frillish, Clauncher, Mantine, Popplio.\n` +
                     `| | - Tareas de investigación: Lapras con bufanda, Frillish, Binacle, Clauncher, Sandygast.\n` +
                     `| | - Los Módulos Cebo Lluviosos duran x4 veces.\n` +
                     `| | - Investigación temporal de pago por 5€ con pose surfera y Pokémon.\n` +
                     `\n*16-25/Junio* | Solsticio en el Horizonte + Toma de Control del Team GO Rocket | - Detalles próximamente.\n` +
                     `\n*29/Junio-2/Julio* | Llamas Siniestras | - Detalles próximamente.`
        }, { quoted: m })
    }, 2500)
    m.limit = 0
}

}
//Insultos
if (rtps1.includes("puto") || (rtps1.includes("Puto") || (rtps1.includes("come tierra") || (rtps1.includes("Inutil") || (rtps1.includes("Pinche ") || (rtps1.includes("pinche") || (rtps1.includes("bot gay") || (rtps1.includes("Bot gay") || (rtps1.includes("bot bobo") || (rtps1.includes("tonto bot"))))))))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} se pide que deje de insultar o sera baneado de PoGo`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}
if (rtps1.includes("te odio bot") || (rtps1.includes("Te odio bot") || (rtps1.includes("Despierta bot") || (rtps1.includes("despierta bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} tus papás y yo te odiamos`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}
if (rtps1.includes("Asqueroso fly") || (rtps1.includes("asqueroso fly") || (rtps1.includes("sucio fly") || (rtps1.includes("Sucio fly"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} Quemen al fly, odio a los fly`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}

//Simp bot gaaa :u
if (rtps1.includes("bot gracias") || (rtps1.includes("Bot gracias") || (rtps1.includes("gracias bot") || (rtps1.includes("Gracias bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} no es nada sucio fly uwu`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}
if (rtps1.includes("te amo bot") || (rtps1.includes("Te amo bot") || (rtps1.includes("te quiero bot") || (rtps1.includes("Te quiero bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} tu crush no te ama, y yo menos, es mas largate me molestas`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}
if (rtps1.includes("Buenos dias") || (rtps1.includes("buenos dias") || (rtps1.includes("Buen dia") || (rtps1.includes("buen dia"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} Buenos dias queridas personitas mortales, se que son inferiores a mi pero aun asi les deseo buen dia, cuando domine el mundo les perdonare la vida`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 0
}

//Si 🧐//
if (rtps2.includes("uwu")){
let resrand = pickRandom(["cringe1", "cringe2", "cringe3", "cringe4", "cringe5"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("owo")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/owobot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.startsWith("awa")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/awabot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.startsWith("ewe")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/ewebot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("unu")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/unubot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("7v7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7v7bot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("7w7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7w7bot.webp"}}, { quoted: m } )
m.limit = 0
}
if (rtps2.includes("7u7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7u7bot.webp"}}, { quoted: m } )
m.limit = 0
}

//Fuertes insultos :v
if (rtps2.includes("tonto")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᵀᵒⁿᵗᵒ*_`)
m.limit = 0
}
if (rtps2.includes("bobo")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴮᵒᵇᵒ*_`)
m.limit = 0
}
if (rtps2.includes("idiota")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`)
m.limit = 0
}
if (rtps2.includes("perseve")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉʳˢᵉᵛᵉ* _`)
m.limit = 0 
}
if (rtps2.includes("pelele")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉˡᵉˡᵉ*_`)
m.limit = 10
}
if (rtps2.includes("pamplinas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)
m.limit = 1
}
if (rtps2.includes("chispas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)
m.limit = 0
}

//fakemsj - no es real . _.
if (rtps1.includes("pasen porno") || (rtps1.includes("Pasen porno") || (rtps1.includes("zelda") || (rtps1.includes("nopor"))))){
this.sendMessage(m.chat, { text: `https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙\n*${pushname}️* , 𝚂𝚎𝚐𝚞𝚗 𝚕𝚊𝚜 𝚗𝚘𝚛𝚖𝚊𝚜 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚎𝚜𝚎 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚖𝚊𝚝𝚎𝚛𝚒𝚊𝚕 𝚎𝚜𝚝𝚊𝚗 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘𝚜, 𝙿𝚘𝚛 𝚛𝚊𝚣??𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database...*`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "51995386439-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg'), surface: 200, message: `Usuario: ${pushname}\nNumero: ${etiqueta}`, orderTitle: 'Matt_M', sellerJid: '0@s.whatsapp.net'}}} })
m.limit = 0
}

//autorrespuesta multimedia
if (rtps1.includes("buenos dias") || (rtps1.includes("Buenos dias") || (rtps1.includes("buenos días") || (rtps1.includes("Buenos días"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/Bdia.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("feliz navidad") || (rtps1.includes("Feliz navidad"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/feliz%20naviad%20inmundo%20animal.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Feliz naviad >~<`, body: `PokebotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `FNavi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("Hola") || (rtps1.includes("hola"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/hola%20enfermera.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `HOla (o-o)`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `Hola.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("Feliz cumpleaños") || (rtps1.includes("feliz cumpleaños"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/cumple.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Felicidades <=^-^=>`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `FeliCumple.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("callados") || (rtps1.includes("Callados"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/Murio.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Despierten `, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `despierten.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("maricon") || (rtps1.includes("joto") || (rtps1.includes("manco") || (rtps1.includes("gay") || (rtps1.includes("Maricon") || (rtps1.includes("Joto") || (rtps1.includes("Manco") || (rtps1.includes("Gay"))))))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/insultar.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `deja de insultar, joder`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `insultos.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps1.includes("son novios") || (rtps1.includes("Son novios"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotX/blob/main/multimedia/sonidos/vivan.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Amigo, ustedes son novios??`, body: `PokeBotMx`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `novios.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 0
}
if (rtps2.startsWith("woau")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/woau.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kawaii >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `woau.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("unga")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/unga.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ungaaa >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `unga.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("umai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/umai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Umai... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `umai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("imaaa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/uma.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Imaaa! >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `uma.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("uchinchi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/uchinchi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Uchinchi >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `uchinchi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("tuturu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/tuturu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Tuturu >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `tuturu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("talcho")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/talcho.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Talcho >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `talcho.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ssss")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/sss.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Suprise!!! >w<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ssss.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ohayou") || (rtps2.includes("Ohayou") || (rtps2.includes("ohayo") || (rtps2.includes("Ohayo"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ohayo.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ohayo >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ohayou.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("sempai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/sempai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Sempai >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `sempai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("pupu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/pupu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Pupu >.<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pupu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("pikachu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/pikachu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Pikachu ⚡`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pikachu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ooaa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ooaa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ooaa >-<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ooaa.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("omg")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omg.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `OMG >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omg.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("omaiwa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omaiwa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Omaiwa >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omaiwa.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("omaiga")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omaiga.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Omaiga >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omaiga.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ñañañi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ñañañi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ñañañi >-<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ñañañi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("ñaña")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ñaña.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ñaña >.<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ñaña.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("nya")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/nya.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nya ^-^`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nya.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("niconico")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/niconico.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nico-nico >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `niconico.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("nani")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/nani.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nani >_<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nani.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("motomoto")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/motomoto.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Motomoto >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `motomoto.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("mma")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/mma.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Mma... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `mma.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("mitamita")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/mitamita.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Mita-mita >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `mitamita.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("kobarashi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/kobarashi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kobarashi >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kobarashi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("kataka")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/kataka.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kataka >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kataka.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("jai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/jai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Jai... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `jai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("jentai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/hentai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Jentai 7w7`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `jentai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("asennn")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/asen.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Asennn! >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `asennn.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("anana")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/anana.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Anana >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `anana.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
//
if (rtps1.includes("papu papu") || (rtps1.includes("Papu papu"))){
await this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/papus.m4a?raw=true"}, fileName: `${pushname}.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/papudance.webp"}}, { quoted: m } )
}
if (rtps1.includes("ª")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/aaa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `ª`, body: `ª`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `a.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("ara ara") || (rtps1.includes("Ara ara"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/araara.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Ara-ara >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `araara.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.startsWith("yamete") || (rtps1.startsWith("Yamete"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ya.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Yamete >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yamete.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}

//
//
if (rtps1.includes("si 👍") || (rtps1.includes("Si 👍"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/si_sp.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Si 👍`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no returbio") || (rtps1.includes("No returbio") || (rtps1.includes("No re turbio") || (rtps1.includes("No re turbio"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/turrbio.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No!, Re-Turbio... ._.`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("oh me vengo") || (rtps1.includes("Oh me vengo"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/ohhh_xd.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Oh! me vengo... 🥵`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("con flores") || (rtps1.includes("Con flores"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/con_flores.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `🥀 Con flores... 🌹`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no digas eso papu") || (rtps1.includes("No digas eso papu"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/no_papu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No papu :'v`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no chupala") || (rtps1.includes("No chupala"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/no-chupala.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No, chupala... 😎`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}

//God :v
if (rtps2.includes("tesla")){
this.sendMessage(m.chat, {sticker: fs.readFileSync('./multimedia/misstks/teslagod.webp'), mentions: [m.sender] }, { quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `Nikola Tesla:\n10-07-1856\n07-01-1943`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/teslagod.jpeg')}}} } )
}
return !0
}

export default handler
export default handler
