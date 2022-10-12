const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Show all of the Commands",
  run: async (client, message, args, prefix, interaction) => {
    return message
      .reply({
        embeds: [
          new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`👍 **Here is a list of all of my Commands**`)
            .setDescription("https://pastebin.com/GxGsZXw5")
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now()),
        ],
      })
      .catch(() => null);
  },
};
