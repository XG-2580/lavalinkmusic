/* THIS POSTS STATS TO DISCORDBOTS.ORG */
const botlist = require('discord-lister');
module.exports = {
	/**
	 * Starts to post stats to DBL
	 * @param {object} client The Discord Client instance
	 */
	async init(client) {

		try {
			var myarray = [];
			client.guilds.cache.keyArray().forEach(async function(item, index) {
				let guildMember = client.guilds.cache.get(item).memberCount;
				myarray.push(guildMember)
			})
			let sum = myarray.reduce(function(a, b) {
				return a + b
			});
			let settings = {
				listings: {
					topgg: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MTI0OTQ1Mjc4OTU5NjIwMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjM5MjA0NzAxfQ.p9EmDgcVQBPnFayZ1nL4TzSj6-8IVV0tmx9U1gx_1OY",
					discordbotsgg: " ",
					discordboats: "",
					botsondiscord: "",
					botsfordiscord: " ",
					botlistspace: " ",
					topcord: "",
					discordextremelist: "",
					discordbotlist: " ",
					sentcord: "",
					dbotsco: "",
					discordlabs: "",
					blist: ""
				},
				// the following is required
				clientid: "861249452789596200",
				servercount: client.guilds.cache.size,
				shardscount: 1,
				shardsid: 0,
				usercount: sum,
				output: true
			}
			await botlist.post(settings)
			setInterval(async () => {
				await botlist.post(settings)
			}, 60000 * 30);
		} catch {/* */ }
	}
};