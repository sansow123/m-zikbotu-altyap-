const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "durdur",
  description: "Şu anda çalan müziği duraklatın",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("çalan hiçbir şarkı bulunamıyor").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ paused the music.`).catch(console.error);
    }
  }
};
