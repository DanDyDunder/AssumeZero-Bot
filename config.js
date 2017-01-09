const utils = require("./configutils"); // Utility functions

// The trigger word that precedes most commands and will activate the bot
exports.trigger = "physics";

// Choose whether to allow bot to respond in any chat it is added to
// If true, group properties will be generated dynamically at runtime
// Otherwise, set them below
exports.dynamic = true;

// Name of chat
exports.groupName = "Assume Zero Brain Power";

// The regular expression used for detecting names in commands issued to the bot
// By default, it will look for the names listed as keys in the group's members dictionary in ids.js
// For custom name detection, remove this function call and replace it with a string containing regex
exports.userRegExp = utils.setRegexFromMembers();

// Time in seconds to ban users for Order 66
exports.order66Time = 15;

// Time in seconds to ban users for violating the GIF policy
exports.banTime = 30;

// Number of times to message user with the "wake up" commands
exports.wakeUpTimes = 20;

// Default color (hex)
exports.defaultColor = "#67B868";

// Default emoji
exports.defaultEmoji = "🚀";

// For xkcd searching capability
// Custom search engine that searches the xkcd website only
// (keep unless you want to customize the results) and an API key from Google Dev Console
exports.xkcd = {
    "engine": "017207449713114446929:kyxuw7rvlw4",
    "key": "AIzaSyCHfJCpWEYUCydDMbb9PqK42XpPQd9L-F8"
};
