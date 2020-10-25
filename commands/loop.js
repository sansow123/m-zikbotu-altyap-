const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "döngü",
  aliases: ['d'],
  description: "Müzik döngüsünü aç / kapat",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Oynayan hiçbir şey yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Loop is now ${queue.loop ? "**aç**" : "**kapa**"}`)
      .catch(console.error);
  }
};
