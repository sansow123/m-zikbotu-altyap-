const fs = require("fs");
const config = require("../config.json");

module.exports = {
  name: "pruning",
  description: "bunu bende anlamadım",
  execute(message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("Dosyaya yazılırken bir hata oluştu.").catch(console.error);
      }

      return message.channel
        .send(`Message pruning is ${config.PRUNING ? "**etkinleştirildi**" : "**devredışı**"}`)
        .catch(console.error);
    });
  }
};
