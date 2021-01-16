const tmi = require('tmi.js')
const { config } = require('./config')

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

const client = new tmi.client(options)

client.connect();

client.on('connected', (address, port) => {
    client.action('carlosvldzzz', `Hello I'm carlosvldz-bot for twitch! Connected to ${address}:${port}`)
})

client.on('chat', (target, ctx, message, self) => {
    if (self) return;

    console.log(target);
    console.log(ctx);

    const commandName = message.trim();

    if (commandName === 'hola') {
        client.say(target, `Bienvenido ${ctx.username}`);
    }
});