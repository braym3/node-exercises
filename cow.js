const cowsay = require("cowsay");

function makeCowSpeak(text){
    console.log(cowsay.say({
                text: text,
                s: true 
            }));
}

// making the method public & available to other files
module.exports = {
    makeCowSpeak
}