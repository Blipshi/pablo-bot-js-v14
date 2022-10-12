const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "usa",
  aliases: ["latency"],
  description: "Good morning usa",
  run: async (client, message, args, prefix, interaction) => {
    return message
      .reply({
        embeds: [
          new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`👍 **Good Morning USA**`)
            .setDescription(`Good morning USA\nI got a feeling that it's gonna be a wonderful day.\nThe sun in the sky has a smile on his face,\nAnd he's shining a salute to the American race.\nOh, boy, it's swell to say Good morning USA!\n(Good morning USA!).`)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now()),
        ],
      })
      .catch(() => null);
  },
};