const env = require('dotenv').config();
const { parsed: { WEBHOOK_URL } } = env;

const { Webhook, MessageBuilder } = require('../src');

const IMAGE_URL = "https://www.online-tech-tips.com/wp-content/uploads/2019/12/discord-colors.jpg.optimal.jpg";
const hook = new Webhook(WEBHOOK_URL);

(async () => {
    try {
        hook.setUsername("discord-webhook-node");
        hook.setAvatar(IMAGE_URL);
        await hook.send("Sent plain text message");

        console.log("1/2 TESTS PASSED [Successfully sent plain text message]");

        const embed = new MessageBuilder();
        embed.setAuthor("Author", IMAGE_URL, 'https://google.com');
        embed.setTitle("Title");
        embed.setColor(5678582);
        embed.setText("Text");
        embed.setImage(IMAGE_URL);
        embed.setThumbnail(IMAGE_URL);
        embed.setURL("https://google.com");
        embed.setDescription("Description");
        embed.addField("Field Name", "Field Value", false);
        embed.addField("Inline Field Name", "Inline Field Value", true);
        embed.addField("Inline Field Name", "Inline Field Value", true);
        embed.setTimestamp();
        embed.setFooter("discord-webhook-node", IMAGE_URL);

        await hook.send(embed);

        console.log("2/2 TESTS PASSED [Successfully sent embed message]");
    }
    catch(e){
        console.error('Failed to pass tests!');
        console.log(e);
    };
})();