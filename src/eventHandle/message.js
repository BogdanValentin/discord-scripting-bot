const Discord = require("discord.js");

module.exports = (msg = Discord.Message) => {
    if(msg.content.split('```')[0].replace(/ /g, "").replace(/\n/g, "") == ">run"){
        if(msg.content.split('```')[1]){
            console.log(msg.content.split('```')[1].replace(/ /g, ""))
        }else{
            let res = new Discord.MessageEmbed().setTitle(`You require too have code after this`)
            .setDescription(`This command must include js code encased within \`\`\`js /* your code here */ \`\`\``);
            msg.channel.send(res);
        }
    }
}