// ==SE_module==
// name: power_toolbox
// displayName: Power Toolbox
// description: Loaded conversation tools
// version: 1.0
// author: Nyx
// ==/SE_module==

var im = require('interface-manager');

module.onSnapApplicationLoad = context => {
    im.create("conversationToolbox", (builder, args) => {
        builder.text("Power Tools - " + args["conversationId"]);
        
        builder.button("Download All Media", () => {
            const media = require("snapenhance/media");
            media.downloadAllInConversation(args["conversationId"]);
            console.log("Downloaded everything");
        });
        
        builder.button("Mark All Read", () => {
            require("snapenhance/hooks").markAllRead(args["conversationId"]);
        });
        
        builder.button("Send Fake Message", () => {
            require("snapenhance/messaging").sendMessage(args["conversationId"], "🔥 Enhanced by Nyx");
        });
        
        builder.button("Dismiss", () => args["alertDialog"].dismiss());
    });
};
