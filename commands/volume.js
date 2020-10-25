const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "ses",
  aliases: ["ss"],
  description: "Şu anda çalan müziğin ses seviyesini değiştirin",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("oynayan hiçbir şey yok.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Önce bir ses kanalına katılmanız gerekiyor!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 mevcut ses seviyesi: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Please use a number to set volume.").catch(console.error);
    if (parseInt(args[0]) > 10000 || parseInt(args[0]) < 0)
      return message.reply("Lütfen 0 - 2000 arasında bir sayı kullanın.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 10000);

    return queue.textChannel.send(`Volume set to: **${args[0]}%**`).catch(console.error);
  }
};
