const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kanye",
  description: "Sends user a kanye tweet",
  run: async (client, message, args, prefix) => {
    let getQuote = async () => {
      let result = await fetch("https://api.kanye.rest");
      let json = await result.json();
      return json;
    };
    let kanye = await getQuote();
    return message
      .reply({
        embeds: [
          new MessageEmbed()
            .setColor("PURPLE")
            .setTitle(`Kanye once said,\n\n${kanye.quote}`)
            .setDescription("*a legend*")
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now()),
        ],
      })
      .catch(() => null);
  },
};
