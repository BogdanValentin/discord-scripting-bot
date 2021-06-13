const Discord = require("discord.js");

const runCode = require("../runCode");

module.exports = async (msg = Discord.Message) => {
    if(msg.content.split('```')[0].replace(/ /g, "").replace(/\n/g, "") == ">run"){
        if(msg.content.split('```')[1]){
            let code = msg.content.split('```')[1];
            var lines = code.split('\n');
            lines.splice(0,1);
            code = lines.join('\n');
            let {res, success} = runCode.scanCode(code);
            msg.channel.send(res);
            if(success){
                let outPut = await runCode.runCode(code, msg);
            }
        }else{
            let res = new Discord.MessageEmbed().setTitle(`You require too have code after this`)
            .setDescription(`This command must be followed by triple \` a js code block find out how [here](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)`);
            msg.channel.send(res);
        };
    };
};