const childProcess = require('child_process');

const saveCode = require('./saveCode');
const deleteCode = require('./deleteCode');
const Discord = require('discord.js');

module.exports = (code = new String(), msg = Discord.Message) => {
    return new Promise((resolve)=>{
        let fileName = saveCode(code);
        let output = '';
        let active = true;
        let process = childProcess.exec(`node ${fileName}`);
        process.on('exit', ()=>{active  = false});
        process.stdout.on('data', (data)=>{
            if(data.length < 1500 && active){
                msg.channel.send(data.toString());
            };
        });
        setTimeout(()=>{
            if(active){
                msg.channel.send("Timed out...");
                process.kill();
                process = void 0;
            };
            resolve();
        }, 3000);
    });
}