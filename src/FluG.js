import {Client, Intents} from "discord.js"

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
})

client.login("token here")

client.on('ready',  async() => {
    console.log('FluG bot up and ready!')
    client.user.setStatus('invisible')

})

client.on('message', async (message) => {
    //bohl
    if (message.author.id === "344845337623658497") {
        await new Promise(resolve => setTimeout(resolve, 5000))
        message.react('966411876865040455')
    }
})
