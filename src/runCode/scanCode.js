const Discord = require("discord.js");

module.exports = (code = "") => {
    let res, success = false;
    if(code.match(/(require)|(Buffer)|(import)/g)){
        res = new Discord.MessageEmbed().setTitle(`You cannot use buffers or import modules, these words have been flagged in your code`);
    }else{
        success = true;
        res = new Discord.MessageEmbed().setTitle(`Running code...`);
    }
    return {res, success};
}