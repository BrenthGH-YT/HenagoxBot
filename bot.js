const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hb>ping') {
    	message.reply('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>bing') {
    	message.reply('Bong!');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>creator') {
    	message.reply('Discord of the Creator: https://discord.gg/fqB8p2t DiscordTag of the Creator: Brenth#4650 Channel of the Creator: https://www.youtube.com/channel/UCs-h0-6bpZkWtnNlb1oWM1g?view_as=subscriber');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>info') {
    	message.reply('Hi! Im Henagox your friendly multi-purpose bot! Type hb>help for a list of modules/commands! I was made by Brenth#4650!');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>download') {
    	message.reply('Download Link of Bot: https://discordapp.com/oauth2/authorize?client_id=417264861379035147&scope=bot&permissions=0');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>botfriend') {
    	message.reply('This is the first bot of the creator! Check it out! He is my best friend! https://discordapp.com/oauth2/authorize?client_id=369375342466433025&scope=bot&permissions=0');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>discord') {
    	message.reply('https://discord.gg/fqB8p2t');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>hi') {
    	message.reply('Hello!');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>hello') {
    	message.reply('Hi!');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>paul') {
    	message.reply('Jake Paul: https://www.youtube.com/channel/UCcgVECVN4OKV6DH1jLkqmcA Logan Paul: https://www.youtube.com/channel/UCG8rbF3g2AMX70yOd8vqIZg');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>tools') {
    	message.reply('Heroku, DiscordDeveloper and Github');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>uganda') {
    	message.reply('http://i0.kym-cdn.com/photos/images/original/001/329/453/ba0.jpg https://orig00.deviantart.net/e70c/f/2018/017/1/0/ugandan_knuckles_by_imprimez-dc0cj6c.png https://a.wattpad.com/cover/135019871-352-k690698.jpg');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>dev') {
    	message.reply('Discord Creators Discord: https://discord.gg/discord-developers');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>keymoji') {
    	message.reply(':) :D :( :L :P :p :o :O xD xd :| :d');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>friends') {
    	message.reply('Creators Friends: NICO_THE_PRO#5337 MC Gods#2808 xBlazerPK#9165');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>support') {
    	message.reply('https://www.youtube.com/channel/UCs-h0-6bpZkWtnNlb1oWM1g?view_as=subscriber');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>iphone') {
    	message.reply('https://www.apple.com/');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>android') {
    	message.reply('https://www.android.com/');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>microsoft') {
    	message.reply('https://www.microsoft.com/');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>kahoot') {
    	message.reply('Kahoot is a website/mobile app where you can play other peoples trivias/questions in fast time pacing games. You can also create your own Kahoot! https://www.kahoot.it');
  	}
});

client.on('message', message => {
    if (message.content === 'hb>help') {
    	message.reply('hb>info hb>kahoot hb>iphone hb>android hb>microsoft hb>help hb>creator hb>bing hb>ping hb>botfriend hb>dev hb>support hb>tools hb>download hb>paul hb>hi hb>hello hb>uganda hb>discord hb>keymoji');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
