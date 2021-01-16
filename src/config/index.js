require('dotenv').config();

const config = {
    username: process.env.TWITCH_USERNAME,
    password: process.env.OAUTH_TOKEN
}

module.exports = { config };