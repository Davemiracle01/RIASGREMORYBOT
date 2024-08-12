//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/267339af1c7e2eb8306e3.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "254769279076";
global.owner = process.env.OWNER_NUMBER || "254114127157";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6b1a45ff8629b85059715.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic003WC9DVXBpSHVJaHRlcm9TWXBlL1JIWHMvOE5yck1uQmFaQ01ZVlFIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDc4RVNLZlQwdEd6a0tlcituc2w2MXN5OUg2eEg4R1BVSm5mMHBSa0F5UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSms2WTVkamUyUXhGRDk5WWFxLzJ4bHhiWmdzY0U1aVhobTc4Z3FtSUhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVmVPMWFjU0UvSGx5WW9jdlFhTzBDR093L3YrU21KUVVZanI0RTdUMFdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJVG93dUxnZUpRYm9WbjRoV29aRzlxUTJEcTBFYXNZL2JpV01PV1JzbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxNVStHVDhzdk42TWg5WjNEakVVU1VNU01kZXh1UjJRL2wxY3MxcXJlMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhHRFpRMHlLNUx6WWlIMWppS0dtaEJxZnh4LzZIVlVTTEJwUGh4REYwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDUvUDRZSytFRWRXTDVBdkdJc3lmN0oxQjFLRy9MM1FmSzRvL00zSWlCVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJMXZKMnVldlQ5S0gxVHVmblFRa3VUNm90bWRpVXYyY3piS2c4U0txMjN6S1YraEptZmdGWFV3QkhqSWsvUGxJdDRsZ2NUaTZiV3d5dHBKVXZIUkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiI2QldPUXVINVFieFhpRVR3SEcrUENuRW5mc0dHZVVsajBKcVpsOENsNWN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5OGpoWVV6a1JuQ1RVdkhVdHB4M29BIiwicGhvbmVJZCI6ImRjZGRhM2E1LWE3MDctNGNmNC1iMGY3LTA1NTg5YWI4N2JjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodENCZ1U2SFFPZTh1WTd1SnUwcUFQakZXWjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTE9uaDNVeDJVa2xaSEJwRUt0ODVFMjNaWFVRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJaOEcyUFdFIiwibWUiOnsiaWQiOiIyNTQxMTQxMjcxNTc6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRMy0zIbMk82AzYvNi8yAzYTMhs2czKZBzLTNncyDzaDNncypzKnMvFbMts2LzIvMncyoRcy4zIzNhMyOzIPMgcyAzL7Mhsy9zYzNjiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0RVNjIwUW5hdnB0UVlZQ3lBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidkpseW9QY0F5WlJXQ0pGYVE4b3ZOQ3pNUkUvY0lILzZPNnYwYW9qV2dpST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSFhzWk9zV0RSM3NXeXFRWi9TWVdndzBObGp6WU1CUmRERFpaMFBsTjRmZ1EvMnRRT0xRNTl3aFhETDZMeDJyamlTMXNnMUhZUWRNbG13TlByUnFSQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlNS014UzhUNjVyMkZweHBNVEpKcFRDWFRkdTRLby92b0hwbW5TSlBOREF1aU5hS1JxSGlVK3h3S0o0cWtpTTR1Vnp4NDFWd1VoVG9JQ0Y3NytXekRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTE0MTI3MTU3OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ5WmNxRDNBTW1VVmdpUldrUEtMelFzekVSUDNDQi8ranVyOUdxSTFvSWkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM0ODc2NjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUERvIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "DAVE MD",
  ownername: process.env.OWNER_NAME || "DAVE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
