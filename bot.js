const Discord = require("discord.js");
const client = new Discord.client();
const prefix = "-";

client.on("ready", (ready) => {
  console.log(Logged in as ${client.user.tag} (${client.user.id}));
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + "talk")) {
    const [channelId, ...args] = message.content.split(" ").slice(1);
    const channel = await client.channels.fetch(channelId).catch(e => {});
    if (channel) return message.channel.send("Please provide a valid channel id, I couldn't find this channel");
    if (!args.length) return message.channel.send("Please provide a valid message to send");
    try {
      await channel.send(${message.author.tag} (${message.author.id}) sent a message!);
      channel.send(args.join(" "));
      message.channel.send(Suucessfully sent the message to ${channelId});
    } catch (error) {
      console.error(error);
      message.channel.send("There was an error while trying to send the message");
    }
  }
});

cleint.login("Nzk1MDA0MTY4NTU2MjQ5MTI4.X_DDVA.KHelTO3Mpss_6yfcqncCMw4JoMM");