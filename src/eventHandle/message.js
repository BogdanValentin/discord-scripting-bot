const Discord = require("discord.js");

module.exports = (msg = Discord.Message) => {
    if(msg.content.split('```')[0].replace(/ /g, "").replace(/\n/g, "") == ">run"){
        if(msg.content.split('```')[1]){
            let code = msg.content.split('```')[1];
            var lines = code.split('\n');
            lines.splice(0,1);
            code = lines.join('\n');
            console.log(code);
            let res = "A";
            if(code.match(/(require)|(Buffer)/g)){
                res = new Discord.MessageEmbed().setTitle(`You cannot use buffers or import modules, these words have been flagged in your code`)
            }else{
                
            }
            msg.channel.send(res);
        }else{
            let res = new Discord.MessageEmbed().setTitle(`You require too have code after this`)
            .setDescription(`This command must be followed by triple \` a js code block find out how [here](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)`);
            msg.channel.send(res);
        };
    };
};