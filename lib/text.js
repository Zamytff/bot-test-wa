const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0

	return `*Good ${salam} ${pushname}, Have a nice day :)*

*⬡ Bot Name* : *Exneph Bot*
*⬡ Creator* : @${configs.ownerList[0].split('@')[0]} *(Zyy.)*
*⬡ Prefix* : *Multi* 
*⬡ Time* : *${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB*

*</Group only>*
• ${prefix}group (Open/Close)
• ${prefix}antilink (On|Off)
• ${prefix}antitagall (On|Off)
• ${prefix}antiviewonce (On|Off)
• ${prefix}welcome (On|Off)
• ${prefix}leave (On|Off)
• ${prefix}setgroupicon (replyImage)
• ${prefix}setgroupname (Text)
• ${prefix}setgroupdesc (Text)
• ${prefix}hidetag (Text)
• ${prefix}promote (@Tag)
• ${prefix}demote (@Tag)
• ${prefix}kick (@Tag)
• ${prefix}add (628xxx)
• ${prefix}getpp (@Tag)
• ${prefix}tagall
• ${prefix}linkgroup
• ${prefix}revoke
• ${prefix}leave

*</Downloader>*
• ${prefix}play (Query)
• ${prefix}playvid (Query)
• ${prefix}youtubedl (Query)
• ${prefix}ytmp3 (Link)
• ${prefix}ytmp4 (Link)
• ${prefix}igstory (Username)
• ${prefix}ig (Link)
• ${prefix}joox (Song)
• ${prefix}tiktoknowm (Link)
• ${prefix}tiktokwm (Link)
• ${prefix}tiktokaudio (Link)
• ${prefix}soundcloud (Link)

*</Sticker>*
• ${prefix}stickerwm (Pack|Author)
• ${prefix}takestick (Pack|Author)
• ${prefix}toimg (Reply sticker)
• ${prefix}togif (Reply sticker)
• ${prefix}semoji (Emoji)
• ${prefix}ipemoji (Emoji)
• ${prefix}stickerfire
• ${prefix}stickernobg
• ${prefix}stickergif
• ${prefix}sticker

*</Anime>*
• ${prefix}anime (Query)
• ${prefix}manga (Query)
• ${prefix}chara (Query)
• ${prefix}waifu

*</Education>*
• ${prefix}nulis (Text)
• ${prefix}brainly (Query)
• ${prefix}kbbi (Query)
• ${prefix}wiki (Query)
• ${prefix}fakta

*</Searching>*
• ${prefix}playstore (Apk)
• ${prefix}happymod (Apk)
• ${prefix}iguser (Username)
• ${prefix}igstalk (Username)
• ${prefix}ytsearch (Query)
• ${prefix}ytplaylist (Query)
• ${prefix}ytchannel (Channel)
• ${prefix}shopee (Product)
• ${prefix}spotify (Song))
• ${prefix}gsmarena (Hp)
• ${prefix}searchmusic (Reply audio)
• ${prefix}wallpaper (Query)
• ${prefix}pinterest (Query)
• ${prefix}googleimage (Query)
• ${prefix}jagokata (Kata)

*</Primbon>*
• ${prefix}jodoh (Kamu|Dia)
• ${prefix}artinama (Nama)
• ${prefix}artimimpi (Mimpi)

*</Kerang ajaib>*
• ${prefix}apakah (Query)
• ${prefix}kapankah (Query)
• ${prefix}bisakah (Query)

*</Fun>*
• ${prefix}truth
• ${prefix}dare

*</Games>*
• ${prefix}tebakgambar
• ${prefix}tebakan
• ${prefix}family100
• ${prefix}siapakahaku
• ${prefix}tebakkota

*</Random>*
• ${prefix}fml
• ${prefix}randomquran
• ${prefix}meme
• ${prefix}darkjoke
• ${prefix}pantun
• ${prefix}katabijak
• ${prefix}nickepep
• ${prefix}quotes
• ${prefix}estetikpic
• ${prefix}speed

*</Textmaker>*
• ${prefix}wolflogo (Text1|Text2)
• ${prefix}logoaveng (Text1|Text2)
• ${prefix}phlogo (Text1|Text2)
• ${prefix}marvellogo (Text1|Text2)
• ${prefix}gtext (Text1|Text2)
• ${prefix}pubglogo (Text1|Text2)
• ${prefix}snowwrite (Text1|Text2)
• ${prefix}watercolour (Text1|Text2)
• ${prefix}harta (Text)
• ${prefix}thundertext (Text)
• ${prefix}flametext (Text)
• ${prefix}glowtext (Text)
• ${prefix}smoketext (Text)
• ${prefix}lithgtext (Text)
• ${prefix}flowertext (Text)
• ${prefix}bneon (Text)
• ${prefix}matrix (Text)
• ${prefix}breakwall (Text)
• ${prefix}gneon (Text)
• ${prefix}dropwater (Text)
• ${prefix}tfire (Text)
• ${prefix}sandw (Text)
• ${prefix}epep (Text)
• ${prefix}gplaybutton (Text)
• ${prefix}splaybutton (Text)
• ${prefix}text3dbox (Text)
• ${prefix}text3d (Text)
• ${prefix}logobp (Text)
• ${prefix}leavest (Text)
• ${prefix}tlight (Text)
• ${prefix}naruto (Text)
• ${prefix}crosslogo (Text)
• ${prefix}cslogo (Text)
• ${prefix}crismes (Text)

*</Imagemaker>*
• ${prefix}missing (text1|text2|text3|@tag)
• ${prefix}calender (Reply image / tag)
• ${prefix}drawing (Reply image / tag)
• ${prefix}sketch (Reply image / tag)

*</Other>*
• ${prefix}tomp3 (Reply video)
• ${prefix}removebg (Reply image / tag)
• ${prefix}tts (Code|Text)
• ${prefix}qrencode (Text)
• ${prefix}barcode (Text)
• ${prefix}jadwalsholat (Daerah)
• ${prefix}jadwaltv (Channel)
• ${prefix}join (Link grup)

*</Info>*
• ${prefix}stickermenu
• ${prefix}owner
• ${prefix}limit
• ${prefix}info
• ${prefix}donasi
• ${prefix}botstat
• ${prefix}listvn
• ${prefix}botstat

*</Owner>*
• ${prefix}setpp (Reply image)
• ${prefix}eval (Text)
• ${prefix}term (Code)
• ${prefix}block (@Tag)
• ${prefix}unblock (@Tag)
• ${prefix}bc (Text)
• ${prefix}addvn (Reply Audio/vn)
• ${prefix}delvn (Name)
• ${prefix}premium add (@Tag)
• ${prefix}premium del (@Tag)
• ${prefix}premium list
• ${prefix}clearall
• ${prefix}resetlimit
• ${prefix}self
• ${prefix}public`
}

const sdk = `Indonesia :

Syarat Dan Ketentuan Exneph Bot
- Dilarang spam terhadap bot
- Dilarang Menelpon Bot
- Harap menggunakan fitur bot dengan baik
- Bot tidak akan menyimpan media yang anda kirimkan
- Bot tidak akan bertanggung jawab atas fitur apapun yang anda gunakan
- Apabila menemukan bug/error pada bot harap hubungi Developer
- Bot berhak membanned/memblokir terhadap user dengan alasan maupun tanpa alasan

English :

Exneph Bot Terms And Conditions
- No spam against bots
- No Calling Bots
- Please use the bot feature well
- The bot will not save the media you send
- Bots will not be responsible for any features you use
- If you find bugs/errors in the bot, please contact the Developer
- Bots have the right to ban / block users or for no reason`

const ingfo = ` Ｅｘｎｅｐｈ　Ｂｏｔ　Ｉｎｆｏｒｍａｔｉｏｎ

Lib : Baileys
Frameworks : Node.js
Language : Javascript
Owner Bot : @${configs.ownerList[0].split('@')[0]} (Zyy.)
Sc Bot : https://github.com/Azyansah/Exneph-bot
Instagram : https://www.instagram.com/creallizy.xd

join group untuk mendapatkan info terbaru tentang bot : https://chat.whatsapp.com/CofHasGNnFI5GAEMY05zRi

if an error occurs, you can contact the owner @${configs.ownerList[0].split('@')[0]} to report a bug

Thank you.`

const donasi = `Ｅｘｎｅｐｈ　Ｂｏｔ　Ｄｏｎａｔｉｏｎｓ

• *ShopeePay* : +62 831-5344-8697
• *Pulsa* : +62 831-5344-8697

Thanks for your donations😁
I will use your donation as well as possible for the use of bots`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Tunggu sebentar yaa',
			 group: 'this command can only be used in groups!',
			 admin: 'only be used by admin!',
			 botAdmin: 'this command can only be used if the bot is an admin groups',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'This command is only for the owner!'
}

module.exports = {
	menu,
	ingfo,
	sdk,
	donasi,
	listCode,
	mess
}
