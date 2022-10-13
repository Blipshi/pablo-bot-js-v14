const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "joke",
  description: "Sends user a bad joke",
  run: async (client, message, args, prefix) => {
    let getJoke = async () => {
      let result = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      let json = await result.json();
      return json;
    };
    let joke = await getJoke();
    return message
      .reply({
        embeds: [
          new MessageEmbed()
            .setColor("PURPLE")
            .setTitle(`Here's your joke,\n\n${joke.setup}\n\n${joke.punchline}`)
            .setDescription("*these are not funny!*")
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now()),
        ],
      })
      .catch(() => null);
  },
};
