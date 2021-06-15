const childProcess = require('child_process');

const saveCode = require('./saveCode');
const deleteCode = require('./deleteCode');
const Discord = require('discord.js');

module.exports = (code = new String(), msg = Discord.Message) => {
    return new Promise((resolve)=>{
        let fileName = saveCode(code);
        let output = '';
        let active = true;
        let process = childProcess.exec(`node ${fileName}`, (err, stdout, stderr)=>{
            if(stdout.length < 1500 && stdout){
                msg.channel.send(stdout);
            }
            if(stderr){
                msg.channel.send("We have encountered an error in this code!");
            };
        });
        process.on('close', ()=>{active  = false});
        process.on('exit', ()=>{active  = false});
        setTimeout(()=>{
            if(active){
                msg.channel.send("Timed out...");
                process.kill();
            }
            resolve()
        }, 3000)
    })
}