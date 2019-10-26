#Discord Webhook sending
![version](https://img.shields.io/npm/v/discord-webhook-node "Version")
![npm](https://img.shields.io/npm/dt/discord-webhook-node.svg "Total Downloads")

#How to use

Basic use:
```js
const webhook = require('discord-webhook-node');
const hook = new webhook.Webhook("YOUR WEBHOOK URL");

hook.send("Hello there!");
```

Custom embeds:
```js
const webhook = require('discord-webhook-node');
const hook = new webhook.Webhook("YOUR WEBHOOK URL");

const embed = new webhook.messageBuilder()
.setTitle('My title here')
.setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
.setURL('https://www.google.com')
.addField('First field', 'this is inline', true)
.addField('Second field', 'this is not inline')
.setColor(7785669)
.setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
.setDescription('Oh look a description :)')
.setImage('https://cdn.discordapp.com/embed/avatars/0.png')
.setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
.setTimestamp();
```

Keep in mind that the custom embed method `setColor` takes in a decimal color. You can convert hex colors to decimal using this website here: [https://convertingcolors.com](https://convertingcolors.com)

Custom settings:
```js
const webhook = require('discord-webhook-node');
const hook = new webhook.Webhook({
    url: "YOUR WEBHOOK URL",
    //If throwErrors is set to false, no errors will be thrown if there is an error sending
    throwErrors: false,
    //retryOnLimit gives you the option to not attempt to send the message again if rate limited
    retryOnLimit: false
});
```

#Installation
```npm install discord-webhook-node```

#License

MIT