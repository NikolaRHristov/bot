import{GatewayIntentBits as i}from"discord.js";import t from"../lib/env.js";const d=t.DISCORD_TOKENS.indexOf(",")!==-1?t.DISCORD_TOKENS.split(","):[t.DISCORD_TOKENS],m=[{token:"",events:new Map([["message",async o=>{console.log(o)}]]),options:{intents:[i.GuildMembers,i.GuildMessages,i.Guilds,i.MessageContent]},preflight:async o=>{const e=t.DISCORD_APPLICATION_ID,n=t.DISCORD_TEST_GUILD_ID;if(!t.DISCORD_PUBLIC_KEY)throw new Error("The DISCORD_TOKEN environment variable is required.");async function a(r){const s=await fetch(r,{headers:{"Content-Type":"application/json",Authorization:`Bot ${o}`},method:"PUT",body:JSON.stringify([AWW_COMMAND,INVITE_COMMAND])});if(s.ok)console.log("Registered all commands");else{console.error("Error registering commands");const c=await s.text();console.error(c)}return s}async function g(){if(!n)throw new Error("The DISCORD_TEST_GUILD_ID environment variable is required.");const r=`https://discord.com/api/v10/applications/${e}/guilds/${n}/commands`;(await(await a(r)).json()).forEach(async l=>{(await fetch(`https://discord.com/api/v10/applications/${e}/guilds/${n}/commands/${l.id}`)).ok||console.error(`Problem removing command ${l.id}`)})}async function p(){await a(`https://discord.com/api/v10/applications/${e}/commands`)}await p()}}];var O=m.map((o,e)=>{const n=d[e];return n?o.token=n:console.log(`No token for client: ${e}`),o});export{O as default};
