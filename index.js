
const Discord = require("discord.js");

const client = new Discord.Client();
const client2 = new Discord.Client({});
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();






const humanizeDuration = require("humanize-duration");



client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`);
  client.user.setActivity(`${prefix}Help`);
  client.user.setStatus("idle");
});

var prefix = "-"; 

client.on("message", async message => {
    if(message.channel.type == "dm") return
  if (message.author.id !== "455108784579149835") return;
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
        
             await message.reply(new Discord.RichEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
             **Name:** ${client2.user.username}
             **ID:** ${client2.user.id} 
             **Age:** ${humanizeDuration(Date.now() - client2.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
             **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client2.user.id}&permissions=384064&scope=bot)
             
             
             `).setColor('GREEN').setThumbnail(client2.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت ?`).setTimestamp())
       
         
     
     
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
            
                 await message.reply(new Discord.RichEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                 **Name:** ${client3.user.username}
                 **ID:** ${client3.user.id} 
                 **Age:** ${humanizeDuration(Date.now() - client3.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                 **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client3.user.id}&permissions=384064&scope=bot)
                 
                 
                 `).setColor('GREEN').setThumbnail(client3.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت ?`).setTimestamp())
           
             
         
         
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
                
                     await message.reply(new Discord.RichEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                     **Name:** ${client4.user.username}
                     **ID:** ${client4.user.id} 
                     **Age:** ${humanizeDuration(Date.now() - client4.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                     **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client4.user.id}&permissions=384064&scope=bot)
                     
                     
                     `).setColor('GREEN').setThumbnail(client4.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت ?`).setTimestamp())
               
                 
             
             
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
                    
                         await message.reply(new Discord.RichEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                         **Name:** ${client5.user.username}
                         **ID:** ${client5.user.id} 
                         **Age:** ${humanizeDuration(Date.now() - client5.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                         **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client5.user.id}&permissions=384064&scope=bot)
                         
                         
                         `).setColor('GREEN').setThumbnail(client5.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت ?`).setTimestamp())
                   
                     
                 
                 
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
                        
                             await message.reply(new Discord.RichEmbed().setTitle('معلومات عن توكن البوت').setDescription(`
                             **Name:** ${client6.user.username}
                             **ID:** ${client6.user.id} 
                             **Age:** ${humanizeDuration(Date.now() - client6.user.createdTimestamp, { units: ['y', 'mo', 'd'], round: true})}
                             **Invite Link:** [رابط هنا](https://discord.com/api/oauth2/authorize?client_id=${client6.user.id}&permissions=384064&scope=bot)
                             
                             
                             `).setColor('GREEN').setThumbnail(client6.user.avatarURL).setFooter(message.guild.name, message.guild.iconURL).setAuthor(`تم تشغيل بوت ?`).setTimestamp())
                       
                         
                     
                     
                        }
       
   
  
                    })
                    client2.on("message", async me => {
                         if (me.author.id !== "455108784579149835") return;
                        if (!me.guild) return;
                            let args = me.content.split(" ").slice(1).join(" ");
                            if (me.content.startsWith(prefix + "obc1")) { 
                         if(!args) return me.reply(new Discord.RichEmbed()
                        .addField(`Online Boardcat`,`${prefix}obc1 [message]`))
                        let number = 1
                        me.channel.send(`**تم ارسال بنجاح الى \`${number}\`**`).then(async ll => { 
                          me.guild.members.filter(m => m.presence.status !== 'offline').forEach( m => {
                          if(m.id != client.user.id && !m.user.bot)
                          
                          m.send(`${args}\n ${m}`).then(()=>{
                             ll.edit(`**تم ارسال بنجاح الى \`${number}\` **`)
                        number++
                       
                                        }).catch(function(){
                                            console.log("An error occured to dm: "+m.user.tag+".");
                                        });
                          })
                                        await me.channel.send(new Discord.RichEmbed()
                                        .setTitle(`BoardCast Online Sended!`)
                                        .setColor('RANDOM')
                                        .setDescription(`**BoardCast Send **`)) 
                        })
                       
                          
                          }
                          if (!me.guild) return;
              if (me.content.startsWith(prefix+"bc1")) {
let number1 = 1
    if(!args) return me.reply(new Discord.RichEmbed()
    .addField(`Boardcat to all`,`${prefix}bc [message]`));
    me.channel.send(`**تم ارسال بنجاح الى \`${number1}\`**`).then(async ll => {
        me.guild.members.forEach( m => {
   if(m.id != client.user.id && !m.user.bot)m.send(`${args}\n ${m}`).then(()=>{
    ll.edit(`**تم ارسال بنجاح الى \`${number1}\` **`)
number1++
                }).catch(function(){
                    console.log("An error occured to dm: "+m.user.tag+".");
                });
            
     })
    })
    me.channel.send(new Discord.RichEmbed()
   .setTitle(`BoardCast Sended!`)
   .setDescription(`BoardCast Send To all members conut`)); 
    
    };    




                                   
                          
                          });
                          client3.on("message", async me => {
                              if (me.author.id !== "455108784579149835") return;
                            if (!me.guild) return;
                                let args = me.content.split(" ").slice(1).join(" ");
                                if (me.content.startsWith(prefix + "obc2")) {
                             if(!args) return me.reply(new Discord.RichEmbed()
                            .addField(`Online Boardcat`,`${prefix}obc [message]`));
                            let number = 1
                            me.channel.send(`**تم ارسال بنجاح الى \`${number}\`**`).then(async ll => { 
                              me.guild.members.filter(m => m.presence.status !== 'offline').forEach( m => {
                              if(m.id != client.user.id && !m.user.bot)
                              
                              m.send(`${args}\n ${m}`).then(()=>{
                                 ll.edit(`**تم ارسال بنجاح الى \`${number}\` **`)
                            number++
                           
                                            }).catch(function(){
                                                console.log("An error occured to dm: "+m.user.tag+".");
                                               
                                
                                            });
                                            
                              })
                              await me.channel.send(new Discord.RichEmbed()
                                            .setTitle(`BoardCast Online Sended!`)
                                            .setColor('RANDOM')
                                            .setDescription(`**BoardCast Send **`)) 
                            })
                           
                              
                              }
                              if (!me.guild) return;
                              if (me.content.startsWith(prefix+"bc2")) {
                let number1 = 1
                    if(!args) return me.reply(new Discord.RichEmbed()
                    .addField(`Boardcat to all`,`${prefix}bc [message]`));
                    me.channel.send(`**تم ارسال بنجاح الى \`${number1}\`**`).then(async ll => {
                     me.guild.members.forEach( m => {
                   if(m.id != client.user.id && !m.user.bot)m.send(`${args}\n ${m}`).then(()=>{
                    ll.edit(`**تم ارسال بنجاح الى \`${number1}\` **`)
                    
                    number1++
                                }).catch(function(){
                                    console.log("An error occured to dm: "+m.user.tag+".");
                                });
                            
                     })
                    })
                    me.channel.send(new Discord.RichEmbed()
                   .setTitle(`BoardCast Sended!`)
                   .setDescription(`BoardCast Send To all members conut`)); 
                    
                    };    
                
                
                                
                              });
                              client4.on("message", async me => {
                                if (me.member.hasPermission("ADMINISTRATOR")) return;
                                if (!me.guild) return;
                                    let args = me.content.split(" ").slice(1).join(" ");
                                    if (me.content.startsWith(prefix + "obc3")) {
                                 if(!args) return me.reply(new Discord.RichEmbed()
                                .addField(`Online Boardcat`,`${prefix}obc [message]`));
                                let number = 1
                                me.channel.send(`**تم ارسال بنجاح الى \`${number}\`**`).then(async ll => { 
                                  me.guild.members.filter(m => m.presence.status !== 'offline').forEach( m => {
                                  if(m.id != client.user.id && !m.user.bot)
                                  
                                  m.send(`${args}\n ${m}`).then(()=>{
                                     ll.edit(`**تم ارسال بنجاح الى \`${number}\` **`)
                                number++
                               
                                                }).catch(function(){
                                                    console.log("An error occured to dm: "+m.user.tag+".");
                                                   
                                    
                                                });
                                                
                                  })
                                  await me.channel.send(new Discord.RichEmbed()
                                                .setTitle(`BoardCast Online Sended!`)
                                                .setColor('RANDOM')
                                                .setDescription(`**BoardCast Send **`)) 
                                })
                               
                                  
                                  }
                                  if (!me.guild) return;
                                  if (me.content.startsWith(prefix+"bc3")) {
                    let number1 = 1
                        if(!args) return me.reply(new Discord.RichEmbed()
                        .addField(`Boardcat to all`,`${prefix}bc [message]`));
                        me.channel.send(`**تم ارسال بنجاح الى \`${number1}\`**`).then(async ll => {
                            me.guild.members.forEach( m => {
                       if(m.id != client.user.id && !m.user.bot)m.send(`${args}\n ${m}`).then(()=>{
                        ll.edit(`**تم ارسال بنجاح الى \`${number1}\` **`)
                       
                    number1++
                                    }).catch(function(){
                                        console.log("An error occured to dm: "+m.user.tag+".");
                                    });
                                
                         })
                        })
                        me.channel.send(new Discord.RichEmbed()
                       .setTitle(`BoardCast Sended!`)
                       .setDescription(`BoardCast Send To all members conut`)); 
                        
                        };    
                    
                    
                                    
                                  });
                                  client5.on("message", async me => {
                                      if (me.author.id !== "455108784579149835") return;
                                    if (!me.guild) return;
                                        let args = me.content.split(" ").slice(1).join(" ");
                                        if (me.content.startsWith(prefix + "obc4")) {
                                     if(!args) return me.reply(new Discord.RichEmbed()
                                    .addField(`Online Boardcat`,`${prefix}obc [message]`));
                                    let number = 1
                                    me.channel.send(`**تم ارسال بنجاح الى \`${number}\`**`).then(async ll => { 
                                      me.guild.members.filter(m => m.presence.status !== 'offline').forEach( m => {
                                      if(m.id != client.user.id && !m.user.bot)
                                      
                                      m.send(`${args}\n ${m}`).then(()=>{
                                         ll.edit(`**تم ارسال بنجاح الى \`${number}\` **`)
                                    number++
                                   
                                                    }).catch(function(){
                                                        console.log("An error occured to dm: "+m.user.tag+".");
                                                       
                                        
                                                    });
                                                    
                                      })
                                      await me.channel.send(new Discord.RichEmbed()
                                                    .setTitle(`BoardCast Online Sended!`)
                                                    .setColor('RANDOM')
                                                    .setDescription(`**BoardCast Send **`)) 
                                    })
                                   
                                      
                                      }
                                      if (!me.guild) return;
                                      if (me.content.startsWith(prefix+"bc4")) {
                        let number1 = 1
                            if(!args) return me.reply(new Discord.RichEmbed()
                            .addField(`Boardcat to all`,`${prefix}bc [message]`));
                            me.channel.send(`**تم ارسال بنجاح الى \`${number1}\`**`).then(async ll => {
                                me.guild.members.forEach( m => {
                           if(m.id != client.user.id && !m.user.bot)m.send(`${args}\n ${m}`).then(()=>{
                            ll.edit(`**تم ارسال بنجاح الى \`${number1}\` **`)
                            
                        number1++
                                        }).catch(function(){
                                            console.log("An error occured to dm: "+m.user.tag+".");
                                        });
                                    
                             })
                            })
                            me.channel.send(new Discord.RichEmbed()
                           .setTitle(`BoardCast Sended!`)
                           .setDescription(`BoardCast Send To all members conut`)); 
                            
                            };    
                        
                        
                                        
                                      });
                                      client6.on("message", async me => {
                                        if (me.author.id !== "455108784579149835") return;
                                        if (!me.guild) return;
                                            let args = me.content.split(" ").slice(1).join(" ");
                                            if (me.content.startsWith(prefix + "obc")) {
                                         if(!args) return me.reply(new Discord.RichEmbed()
                                        .addField(`Online Boardcat`,`${prefix}obc [message]`));
                                        let number = 1
                                        me.channel.send(`**تم ارسال بنجاح الى \`${number}\`**`).then(async ll => { 
                                          me.guild.members.filter(m => m.presence.status !== 'offline').forEach( m => {
                                          if(m.id != client.user.id && !m.user.bot)
                                          
                                         m.send(`${args}\n ${m}`).then(()=>{
                                             ll.edit(`**تم ارسال بنجاح الى \`${number}\` **`)
                                        number++
                                       
                                                        }).catch(function(){
                                                            console.log("An error occured to dm: "+m.user.tag+".");
                                                           
                                            
                                                        });
                                                        
                                          })
                                          await me.channel.send(new Discord.RichEmbed()
                                                        .setTitle(`BoardCast Online Sended!`)
                                                        .setColor('RANDOM')
                                                        .setDescription(`**BoardCast Send **`)) 
                                        })
                                       
                                          
                                          }
                                          if (!me.guild) return;
                                          if (me.content.startsWith(prefix+"bc5")) {
                            let number1 = 1
                                if(!args) return m.reply(new Discord.RichEmbed()
                                .addField(`Boardcat to all`,`${prefix}bc [message]`));
                                me.channel.send(`**تم ارسال بنجاح الى \`${number1}\`**`).then(async ll => {
                                    me.guild.members.forEach( m => {
                               if(m.id != client.user.id && !m.user.bot)m.send(`${args}\n ${m}`).then(()=>{
                                ll.edit(`**تم ارسال بنجاح الى \`${number1}\` **`)
                                
                            number1++
                                            }).catch(function(){
                                                console.log("An error occured to dm: "+m.user.tag+".");
                                            });
                                        
                                 })
                                })
                                me.channel.send(new Discord.RichEmbed()
                               .setTitle(`BoardCast Sended!`)
                               .setDescription(`BoardCast Send To all members conut`)); 
                                
                                };    
                            
                            
                                            
                                          });
                        

                                          





client.login(process.env.token);

