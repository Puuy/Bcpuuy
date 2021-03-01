
const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"],  });
const humanizeDuration = require("humanize-duration");
const prefix = '-';
client.on('ready', () => {
    console.log(`${client.user.tag} is nowonline!`)
    
});
const used = new Map();
const client2 = new Discord.Client({});
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const owners = ["455108784579149835", "527826654660132890", "352460871856947200", "665309785544982531", "609544947816988702", "505442667652448277", "732158721257635932", "315100220520267776", "795765805061111848", "765621344586825728" , "734355052075941938" ,  ]

const client6 = new Discord.Client();
client.on("message", async message => {
  if(!owners.includes(message.author.id)) return;
  if(message.channel.type == "dm") return
  if (message.content.startsWith(prefix + "settoken1")) {
      let args = message.content.slice(prefix.length).trim().split(/ +/);
      let token = args[1]
      if(!token) return
      await client2.destroy()
      await message.delete()
       await client2.login(token).then( async m => { 
           
          if(client2.user.bot !== true) {
              await message.reply("**توكن ذا مو حق بوت**") 
              return
          }
          
      
      
      }).catch(error => {
          return message.channel.send("**توكن خربان / مبند**")
         })  
         if(client2.user.bot !== true) return
      
           await message.reply(new Discord.MessageEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
           **Name:** ${client2.user.username}
           **ID:** ${client2.user.id} 
           **Age:** ${humanizeDuration(Date.now() - client2.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
           **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client2.user.id}&permissions=384064&scope=bot)
           
           
           `).setColor('GREEN').setThumbnail(client2.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت 🟢`).setTimestamp())
     
       
   
   
      }
      if (message.content.startsWith(prefix + "settoken2")) {
          let args = message.content.slice(prefix.length).trim().split(/ +/);
          let token = args[1]
          if(!token) return
          await client3.destroy()
          await message.delete()
           await client3.login(token).then( async m => { 
               
              if(client3.user.bot !== true) {
                  await message.reply("**توكن ذا مو حق بوت**") 
                  return
              }
              
          
          
          }).catch(error => {
              return message.channel.send("**توكن خربان / مبند**")
             })  
             if(client3.user.bot !== true) return
          
               await message.reply(new Discord.MessageEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
               **Name:** ${client3.user.username}
               **ID:** ${client3.user.id} 
               **Age:** ${humanizeDuration(Date.now() - client3.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
               **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client3.user.id}&permissions=384064&scope=bot)
               
               
               `).setColor('GREEN').setThumbnail(client3.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت 🟢`).setTimestamp())
         
           
       
       
          }
          if (message.content.startsWith(prefix + "settoken3")) {
              
              let args = message.content.slice(prefix.length).trim().split(/ +/);
              let token = args[1]
              if(!token) return
              await client4.destroy()
              await message.delete()
               await client4.login(token).then( async m => { 
                   
                  if(client4.user.bot !== true) {
                      await message.reply("**توكن ذا مو حق بوت**") 
                      return
                  }
                  
              
              
              }).catch(error => {
                  return message.channel.send("**توكن خربان / مبند**")
                 })  
                 if(client4.user.bot !== true) return
              
                   await message.reply(new Discord.MessageEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                   **Name:** ${client4.user.username}
                   **ID:** ${client4.user.id} 
                   **Age:** ${humanizeDuration(Date.now() - client4.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                   **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client4.user.id}&permissions=384064&scope=bot)
                   
                   
                   `).setColor('GREEN').setThumbnail(client4.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت 🟢`).setTimestamp())
             
               
           
           
              }
              if (message.content.startsWith(prefix + "settoken4")) {
                  let args = message.content.slice(prefix.length).trim().split(/ +/);
                  let token = args[1]
                  if(!token) return
                  await client5.destroy()
                  await message.delete()
                   await client5.login(token).then( async m => { 
                       
                      if(client5.user.bot !== true) {
                          await message.reply("**توكن ذا مو حق بوت**") 
                          return
                      }
                      
                  
                  
                  }).catch(error => {
                      return message.channel.send("**توكن خربان / مبند**")
                     })  
                     if(client5.user.bot !== true) return
                  
                       await message.reply(new Discord.MessageEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                       **Name:** ${client5.user.username}
                       **ID:** ${client5.user.id} 
                       **Age:** ${humanizeDuration(Date.now() - client5.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                       **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client5.user.id}&permissions=384064&scope=bot)
                       
                       
                       `).setColor('GREEN').setThumbnail(client5.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت 🟢`).setTimestamp())
                 
                   
               
               
                  }
                  if (message.content.startsWith(prefix + "settoken5")) {
                      let args = message.content.slice(prefix.length).trim().split(/ +/);
                      let token = args[1]
                      if(!token) return
                      await client6.destroy()
                      await message.delete()
                       await client6.login(token).then( async m => { 
                           
                          if(client6.user.bot !== true) {
                              await message.reply("**توكن ذا مو حق بوت**") 
                              return
                          }
                          
                      
                      
                      }).catch(error => {
                          return message.channel.send("**توكن خربان / مبند**")
                         })  
                         if(client6.user.bot !== true) return
                      
                           await message.reply(new Discord.MessageEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                           **Name:** ${client6.user.username}
                           **ID:** ${client6.user.id} 
                           **Age:** ${humanizeDuration(Date.now() - client6.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                           **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client6.user.id}&permissions=384064&scope=bot)
                           
                           
                           `).setColor('GREEN').setThumbnail(client6.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت 🟢`).setTimestamp())
                     
                       
                   
                   
                      }
     
 

                  })
                  client2.on('message', async message =>{
                    if(!owners.includes(message.author.id)) return;

                    let args = message.content.slice(prefix.length).trim().split(/ +/);
                    if(message.channel.type == "dm") return
                    if (!message.content.startsWith(prefix) || message.author.bot) return;
                    Array.prototype.remove = function() {
                      var what, a = arguments, L = a.length, ax;
                      while (L && this.length) {
                          what = a[--L];
                          while ((ax = this.indexOf(what)) !== -1) {
                              this.splice(ax, 1);
                          }
                      }
                      return this;
                  };
                    switch(args[0]){

        case 'bc1':
         
          
          const members2 = []
          console.log(members2.length)
      await message.guild.members.cache.forEach(async member => {
        if(!member.user.bot) {
          await members2.push(member.user.id)
        }
       
      })
      const time = parseInt(args[1])
      if(!time) return message.reply('bad usage: #bc 1 [message]')
      const messagecontent = message.content.split(" ").slice(2).join(" ");
      if(!messagecontent) return
      var errors = 0;
      var done = 0;
      message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
      message.channel.send(new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
      تم ارسال بنجاح الى: ${done}
      فشل ارسال الى: ${errors}`)).then(msg  => { 
     var sst =  setInterval(async () => {
       if(members2.length === 0) {
        await clearInterval(sst)
         return await  message.channel.send(`تم ارسال الى جميع برود كاست`)
         
       }
      const userget = message.guild.members.cache.find(member1 => member1.id === members2[0])
      if(userget && !userget.user.bot) {
       

        try {
          await members2.remove(userget.user.id)
       await    userget.send(`${userget}\n ${messagecontent}`)
       await done++
      await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
       تم ارسال بنجاح الى: ${done}
       فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))
      
       
        } catch (error) {
          await members2.remove(members2[0])
          await errors++
          await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
           تم ارسال بنجاح الى: ${done}
           فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
        //  console.log(error)
        }
        if(!userget) {
          await members2.remove(members2[0])
         }
      }
      },  time * 1000)
       })


        break;
      }
    })        
  

    client2.on('message', async message =>{
      if(!owners.includes(message.author.id)) return;

      let args = message.content.slice(prefix.length).trim().split(/ +/);
      if(message.channel.type == "dm") return
      if (!message.content.startsWith(prefix) || message.author.bot) return;
      Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };
      switch(args[0]){
    case "obc1": 
    const members2online = []
    //console.log(members2.length)
    await message.guild.members.cache.filter(m => m.presence.status !== "offline").forEach( async m => {
      if(m.user.bot) return
      await members2online.push(m.user.id)
    })
    
    
    
    const time = parseInt(args[1])
    if(!time) return message.reply('bad usage: #obc1 1 [message]')
    const messagecontent = message.content.split(" ").slice(2).join(" ");
    if(!messagecontent) return
    var errors = 0;
    var done = 0;
    message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2online.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
    message.channel.send(new Discord.MessageEmbed().setTitle(` اونلاين  جاري ارسال برود كاست`).setDescription(`
    تم ارسال بنجاح الى: ${done}
    فشل ارسال الى: ${errors}`)).then(msg  => { 
    var sst =  setInterval(async () => {
    if(members2online.length === 0) {
    await clearInterval(sst)
    return await  message.channel.send(`تم ارسال الى جميع برود كاست`)
    
    }
    const userget = message.guild.members.cache.find(member1 => member1.id === members2online[0])
    if(userget && !userget.user.bot) {
    
    
    try {
    await members2online.remove(userget.user.id)
    await    userget.send(`${userget}\n ${messagecontent}`)
    await done++
    await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
    تم ارسال بنجاح الى: ${done}
    فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))
    
    
    } catch (error) {
    await members2online.remove(members2online[0])
    await errors++
    await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
     تم ارسال بنجاح الى: ${done}
     فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
    //  console.log(error)
    }
    if(!userget) {
    await members2online.remove(members2online[0])
    }
    }
    },  time * 1000)
    })
    
    break;
   
  }
  const args0 = message.content.split(" ").slice(1).join(" ");
 
  if (message.content.startsWith(prefix+"setname1")) {
    if(!args0) return me.reply(`**${prefix}setname1 [name]**`)
  await client2.user.setUsername(args0)
  message.channel.send(`تم تغير اسم الى ${args0}`)
  }
  if (message.content.startsWith(prefix+"setavt1")) {
    if(!args0) return message.reply(`**${prefix}setavt1 [avatar URL]**`)
    client2.user.setAvatar(args).then(
      message.channel.send(new Discord.MessageEmbed().setTitle('تم تغير صورة الى').setThumbnail(args0)).catch(error => {
        return message.channel.send(error)
       })  
    
      )
    
    
    }

  })
  client3.on('message', async message =>{
    if(!owners.includes(message.author.id)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/);
    if(message.channel.type == "dm") return
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    Array.prototype.remove = function() {
      var what, a = arguments, L = a.length, ax;
      while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
              this.splice(ax, 1);
          }
      }
      return this;
  };
    switch(args[0]){

case 'bc2':


const members2 = []
console.log(members2.length)
await message.guild.members.cache.forEach(async member => {
if(!member.user.bot) {
await members2.push(member.user.id)
}

})
const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #bc 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2[0])
if(userget && !userget.user.bot) {


try {
await members2.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2.remove(members2[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2.remove(members2[0])
}
}
},  time * 1000)
})


break;
}
})        


client3.on('message', async message =>{
  if(!owners.includes(message.author.id)) return;
let args = message.content.slice(prefix.length).trim().split(/ +/);
if(message.channel.type == "dm") return
if (!message.content.startsWith(prefix) || message.author.bot) return;
Array.prototype.remove = function() {
var what, a = arguments, L = a.length, ax;
while (L && this.length) {
what = a[--L];
while ((ax = this.indexOf(what)) !== -1) {
this.splice(ax, 1);
}
}
return this;
};
switch(args[0]){
case "obc3": 
const members2online = []
//console.log(members2.length)
await message.guild.members.cache.filter(m => m.presence.status !== "offline").forEach( async m => {
if(m.user.bot) return
await members2online.push(m.user.id)
})



const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #obc1 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2online.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(` اونلاين  جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2online.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2online[0])
if(userget && !userget.user.bot) {


try {
await members2online.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2online.remove(members2online[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2online.remove(members2online[0])
}
}
},  time * 1000)
})

break;

}
const args0 = message.content.split(" ").slice(1).join(" ");

if (message.content.startsWith(prefix+"setname2")) {
if(!args0) return me.reply(`**${prefix}setname2 [name]**`)
await client3.user.setUsername(args0)
message.channel.send(`تم تغير اسم الى ${args0}`)
}
if (message.content.startsWith(prefix+"setavt2")) {
if(!args0) return message.reply(`**${prefix}setavt2 [avatar URL]**`)
client3.user.setAvatar(args).then(
message.channel.send(new Discord.MessageEmbed().setTitle('تم تغير صورة الى').setThumbnail(args0)).catch(error => {
return message.channel.send(error)
})  

)


}

})

client4.on('message', async message =>{
  if(!owners.includes(message.author.id)) return;

  let args = message.content.slice(prefix.length).trim().split(/ +/);
  if(message.channel.type == "dm") return
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
  switch(args[0]){

case 'bc3':


const members2 = []
console.log(members2.length)
await message.guild.members.cache.forEach(async member => {
if(!member.user.bot) {
await members2.push(member.user.id)
}

})
const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #bc 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2[0])
if(userget && !userget.user.bot) {


try {
await members2.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2.remove(members2[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2.remove(members2[0])
}
}
},  time * 1000)
})


break;
}
})        


client4.on('message', async message =>{
if(!owners.includes(message.author.id)) return;
let args = message.content.slice(prefix.length).trim().split(/ +/);
if(message.channel.type == "dm") return
if (!message.content.startsWith(prefix) || message.author.bot) return;
Array.prototype.remove = function() {
var what, a = arguments, L = a.length, ax;
while (L && this.length) {
what = a[--L];
while ((ax = this.indexOf(what)) !== -1) {
this.splice(ax, 1);
}
}
return this;
};
switch(args[0]){
case "obc3": 
const members2online = []
//console.log(members2.length)
await message.guild.members.cache.filter(m => m.presence.status !== "offline").forEach( async m => {
if(m.user.bot) return
await members2online.push(m.user.id)
})



const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #obc1 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2online.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(` اونلاين  جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2online.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2online[0])
if(userget && !userget.user.bot) {


try {
await members2online.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2online.remove(members2online[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2online.remove(members2online[0])
}
}
},  time * 1000)
})

break;

}
const args0 = message.content.split(" ").slice(1).join(" ");

if (message.content.startsWith(prefix+"setname3")) {
if(!args0) return me.reply(`**${prefix}setname3 [name]**`)
await client4.user.setUsername(args0)
message.channel.send(`تم تغير اسم الى ${args0}`)
}
if (message.content.startsWith(prefix+"setavt3")) {
if(!args0) return message.reply(`**${prefix}setavt3 [avatar URL]**`)
client4.user.setAvatar(args).then(
message.channel.send(new Discord.MessageEmbed().setTitle('تم تغير صورة الى').setThumbnail(args0)).catch(error => {
return message.channel.send(error)
})  

)


}

})
client5.on('message', async message =>{
  if(!owners.includes(message.author.id)) return;

  let args = message.content.slice(prefix.length).trim().split(/ +/);
  if(message.channel.type == "dm") return
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
  switch(args[0]){

case 'bc4':


const members2 = []
console.log(members2.length)
await message.guild.members.cache.forEach(async member => {
if(!member.user.bot) {
await members2.push(member.user.id)
}

})
const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #bc 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2[0])
if(userget && !userget.user.bot) {


try {
await members2.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2.remove(members2[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2.remove(members2[0])
}
}
},  time * 1000)
})


break;
}
})        


client5.on('message', async message =>{
if(!owners.includes(message.author.id)) return;
let args = message.content.slice(prefix.length).trim().split(/ +/);
if(message.channel.type == "dm") return
if (!message.content.startsWith(prefix) || message.author.bot) return;
Array.prototype.remove = function() {
var what, a = arguments, L = a.length, ax;
while (L && this.length) {
what = a[--L];
while ((ax = this.indexOf(what)) !== -1) {
this.splice(ax, 1);
}
}
return this;
};
switch(args[0]){
case "obc4": 
const members2online = []
//console.log(members2.length)
await message.guild.members.cache.filter(m => m.presence.status !== "offline").forEach( async m => {
if(m.user.bot) return
await members2online.push(m.user.id)
})



const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #obc1 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2online.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(` اونلاين  جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2online.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2online[0])
if(userget && !userget.user.bot) {


try {
await members2online.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2online.remove(members2online[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2online.remove(members2online[0])
}
}
},  time * 1000)
})

break;

}
const args0 = message.content.split(" ").slice(1).join(" ");

if (message.content.startsWith(prefix+"setname4")) {
if(!args0) return me.reply(`**${prefix}setname4 [name]**`)
await client5.user.setUsername(args0)
message.channel.send(`تم تغير اسم الى ${args0}`)
}
if (message.content.startsWith(prefix+"setavt4")) {
if(!args0) return message.reply(`**${prefix}setavt4 [avatar URL]**`)
client5.user.setAvatar(args).then(
message.channel.send(new Discord.MessageEmbed().setTitle('تم تغير صورة الى').setThumbnail(args0)).catch(error => {
return message.channel.send(error)
})  

)


}

})
client6.on('message', async message =>{
  if(!owners.includes(message.author.id)) return;

  let args = message.content.slice(prefix.length).trim().split(/ +/);
  if(message.channel.type == "dm") return
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
  switch(args[0]){

case 'bc5':


const members2 = []
console.log(members2.length)
await message.guild.members.cache.forEach(async member => {
if(!member.user.bot) {
await members2.push(member.user.id)
}

})
const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #bc 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2[0])
if(userget && !userget.user.bot) {


try {
await members2.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2.remove(members2[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2.remove(members2[0])
}
}
},  time * 1000)
})


break;
}
})        


client6.on('message', async message =>{
if(!owners.includes(message.author.id)) return;
let args = message.content.slice(prefix.length).trim().split(/ +/);
if(message.channel.type == "dm") return
if (!message.content.startsWith(prefix) || message.author.bot) return;
Array.prototype.remove = function() {
var what, a = arguments, L = a.length, ax;
while (L && this.length) {
what = a[--L];
while ((ax = this.indexOf(what)) !== -1) {
this.splice(ax, 1);
}
}
return this;
};
switch(args[0]){
case "obc5": 
const members2online = []
//console.log(members2.length)
await message.guild.members.cache.filter(m => m.presence.status !== "offline").forEach( async m => {
if(m.user.bot) return
await members2online.push(m.user.id)
})



const time = parseInt(args[1])
if(!time) return message.reply('bad usage: #obc1 1 [message]')
const messagecontent = message.content.split(" ").slice(2).join(" ");
if(!messagecontent) return
var errors = 0;
var done = 0;
message.channel.send(`**الوقت متوقع لارسال:**\n ${humanizeDuration(members2online.length * time * 1000, { units: ['h','m','s'], round: true, language: "en"})}`)
message.channel.send(new Discord.MessageEmbed().setTitle(` اونلاين  جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`)).then(msg  => { 
var sst =  setInterval(async () => {
if(members2online.length === 0) {
await clearInterval(sst)
return await  message.channel.send(`تم ارسال الى جميع برود كاست`)

}
const userget = message.guild.members.cache.find(member1 => member1.id === members2online[0])
if(userget && !userget.user.bot) {


try {
await members2online.remove(userget.user.id)
await    userget.send(`${userget}\n ${messagecontent}`)
await done++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`تم ارسال الى بنجاح`, userget).setColor('GREEN'))


} catch (error) {
await members2online.remove(members2online[0])
await errors++
await msg.edit( new Discord.MessageEmbed().setTitle(`جاري ارسال برود كاست`).setDescription(`
تم ارسال بنجاح الى: ${done}
فشل ارسال الى: ${errors}`).addField(`فشل ارسال الى`, userget).setColor('RED'))
//  console.log(error)
}
if(!userget) {
await members2online.remove(members2online[0])
}
}
},  time * 1000)
})

break;

}
const args0 = message.content.split(" ").slice(1).join(" ");

if (message.content.startsWith(prefix+"setname5")) {
if(!args0) return me.reply(`**${prefix}setname5 [name]**`)
await client6.user.setUsername(args0).catch(error => {
return  message.reply(error)
})
message.channel.send(`تم تغير اسم الى ${args0}`)
}
if (message.content.startsWith(prefix+"setavt5")) {
if(!args0) return message.reply(`**${prefix}setavt5 [avatar URL]**`)
client6.user.setAvatar(args).then(
message.channel.send(new Discord.MessageEmbed().setTitle('تم تغير صورة الى').setThumbnail(args0)).catch(error => {
return message.channel.send(error)
})  

)


}

})
client.login(process.env.token)
