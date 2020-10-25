const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["y"],
  description: "Tüm komutları ve açıklamaları görüntüler",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Evobot Help")
      .setDescription("List of all commands")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
