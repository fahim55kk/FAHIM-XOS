const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["-আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ 😇😘",
  "-সুন্দর মাইয়া মানেই-🥱-আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 এর বউ-😽🫶-আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗",
  "-কিরে-🫵-তরা নাকি  prem করস-😐🐸-আমারে একটা করাই দিলে কি হয়-🥺",
  "__Bot বলে অসম্মান করচ্ছিছ,😰😿",
  "-হুদাই আমারে  শয়তানে লারে-😝😑☹️",
  "- বেডি মানুষ বড় ভেজাইল্লা🤧🔪",
  "⎯তো্ঁর্ঁ ন্ঁজ্ঁরে্ঁ স্ঁম্ঁস্যা্ঁ আ্ঁছে্ঁ  ন্ঁজ্ঁর্ঁ ঠি্ঁক্ঁ ক্ঁর্ঁ-🐸🫣⎯⃝''",
  "-চু্ঁপ্ঁ থা্ঁক্ঁ তু্ঁই্ঁ 🫵 বি্ঁছা্ঁনা্ঁয়্ঁ মু্ঁতো্ঁস্ঁ 😽⎯͢⎯⃝🩷🍒🙂",
  "___মন দে !🙂🫴---ছিনি মিনি খেলমু 🤭🤭",
  "- ওই 🫵 তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵",
  "-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 কে দান করেন-🥱🐰🍒",
  "-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸",
  "-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 কে-🐸😾🔪",
  "-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧",
  "- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 কে সন্দেহ করে.!🐸",
  "-তোর কথা তোর বাড়ি কেউ শুনে না তো আমি কোনো শুনবো__🤔😂",
  "—যারে দেহি তারেই ভাল্লাগে..!🙈- মনে হয় রুচি বাড়ছে..!😀😋 তুমি কি দেখো তোমাকেও তো  ভাল্লাগে - 😩🫢🫣",
  "-বুকের বাম পাশে এসি সহ একটা ফ্লাট খালি আছে...একজন বিশ্বস্ত ভাড়াটিয়া চাই😊...!🙈👀",
  "-একদিন ঠাস করে😎🔪 কিউট হয়ে যামু_😩 তারপর তোগোরে  আর পাত্তা দিমু না __🐸🌚🙂",
  "-ভাই তুই একটু আমার কাছে আই তরে মাইরা আমি ঘুমামু_👊😴",
  "-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋",
  "-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️",
  "- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি যামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼",
  "--নাটক কম করো প্রিয় তুমি যে অন্য জনে আসক্ত তা তোমার ব্যবহারেই বুঝা যায় প্রিয়__😒🦋",
  "__বড় আর হইলাম কই, এখনো \n\n-আকাশ দিয়ে হেলিকপ্টার গেলে তাকাই থাকা আমি...! 🌻🙂",
  "-আমাকে এত ডাকছেন কেন আপনার কি চরিত্রের সমস্যা আছে-🤨🤭😼",
  "-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸",
  "জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂",
  "-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦",
  "-নাটক কম করো পিও-🙃-তুমি যে অন্য জনের pream এ আসক্ত..! সেটা তোমার ব্যাবহার দেখেই বুজা যায় পিও..! 🐸👍🏾",
  "__চুনা ও চুনা আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না-😪🤧😭",
  "-জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽",
  "- ঝাং 🫵 থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦",
  "-শুনবো না 😼 তুমি আমাকে প্রেম করাই দাও নি 🥺 পচা তুমি 🥺",
  "-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧",
  "-আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧",
  "আমি এখন বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
  "-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 ধরতে পারছে না-🐸🥲",
  "আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো-🥱😘",
  "-হুম জান তোমার অইখানে উম্মমাহ-😷😘",
  "—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗",
  "-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦",
  "-শখের নারী  বিছানায় মু'তে..!🙃🥴",
  "-এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 𝐈 𝐚𝐦 𝐒𝐢𝐧𝐠𝐥𝐞 🙂",
  "আমি গরীব এর সাথে কথা বলি না-😼😼",
  "-ওই বেডি তোমার বাসায় না আমার বস আরিয়ান মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 কে জানে মারার কি দরকার-🙄🤧",
  "-আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি-🤗",
  "-𝚘𝐢𝐢-ইত্তু 🤏 ভালু’পাসা দিবা-🫣🥺🐼",
  "-জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽",
  "-আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈",
  "-আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇",
  "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱",
  "-আর কত বার ডাকবি ,শুনছি তো,🤭🙈",
  "-আমাকে এতো না ডেকে বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 কে একটা গফ দে-🙄😌",
  "-আরে Bolo আমার জান ,কেমন আছো?-😚😍 ",
  "-হ্যাঁ জানু , এইদিক এ আসো কিস দেই 🤭💋" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };

    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };

   if ((event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("এত হাই-হ্যালো চুদাছ কেনো বোকাচোদা..!🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "fahim") || (event.body.toLowerCase() == "Fahim") || (event.body.toLowerCase() == "@Fahim Ahmed") || (event.body.toLowerCase() == "ফাহিম")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:𝙁𝘼𝙃𝙄𝙈 ⚡💥\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝙁𝘼𝙃𝙄𝙈 ⚡💥.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/hackar.vaiya\nতার সাতে যোগা যোগ করবেন WhatsApp :- +01771240377", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:ULLASH ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস ফাহিম আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is 𝙁𝘼𝙃𝙄𝙈 ッ❤️ তাকে সবাই হৃদয় নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };


   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "magi ami tor boss") || (event.body.toLowerCase() == "magi ami fahim") || (event.body.toLowerCase() == "cup magi ami fahim") || (event.body.toLowerCase() == "magi")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@মে্ঁঘ্ঁ বা্ঁলি্ঁকা্ঁ") || (event.body.toLowerCase() == "@মে্ঁঘ্ঁ বা্ঁলি্ঁকা্ঁ")) {
     return api.sendMessage("খবরদার কেউ এই আইডিতে মেনশন দিবানা এটা BOSS ফাহিম এর আদরের বউ ISRAT এর আইডি 😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Israt") || (event.body.toLowerCase() == "israt")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস ফাহিম এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "israt")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস ফাহিম এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Israt") || (event.body.toLowerCase() == "israt")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস ফাহিম এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@𝐅𝐚𝐡𝐢𝐦 𝐌𝐚𝐠𝐢 𝐁𝐚𝐳 ____ ;* :/ 3:) ۦۦ") || (event.body.toLowerCase() == "Raj")) {
     return api.sendMessage("🥰-রাজ🌺 আমার বস ফাহিম'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS 𝙁𝘼𝙃𝙄𝙈 ⚡💥", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == " Tanjila") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমার ফাহিম কে ও একটা গার্লফ্রেন্ড  দে<🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা 😪🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami fahim") || (event.body.toLowerCase() == "oii kiree")) {
     return api.sendMessage("হ্যা ফাহিম কেমন আছেন..?☺️", threadID);
   };
  mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
