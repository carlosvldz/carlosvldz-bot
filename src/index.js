const tmi = require('tmi.js')
const { config } = require('./config')
const greetings = require('./config/greetings')

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: config.username,
        password: config.password
    },
    channels: ['carlosvldzzz']
}

const welcomeList = ['hola', 'hello', 'buenas', 'saludos']

const client = new tmi.client(options)

client.connect();

client.on('connected', (address, port) => {
    client.action('carlosvldzzz', `Hello I'm carlosvldz-bot for Twitch!`)
})

const sendMessage = (target, text, list, message) => {
    list.some((t) => {
        const includes = text.replace(/ /g, "").includes(t);
        if(includes) client.say(target, message);
        return text.includes(t);
    })
}
client.on('chat', (target, ctx, message, self) => {
    if (self) return;

    const text = message.toLowerCase();

    sendMessage(
        target,
        text,
        welcomeList,
        `${ greetings.welcome } @${ ctx.username }`
    );
});