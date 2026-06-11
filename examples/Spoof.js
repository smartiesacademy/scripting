// ==SE_module==
// name: spoof_typing_toolbox
// displayName: Spoof Typing Toolbox
// version: 1.0
// author: Nyx
// ==/SE_module==

var im = require('interface-manager')

module.onSnapApplicationLoad = context => {
    im.create("conversationToolbox", (builder, args) => {
        builder.text("Conversation id: " + args["conversationId"])
        
        builder.button("Start Spoof Typing", () => {
            const hooks = require("snapenhance/hooks")
            hooks.spoofTyping(true)  // or start continuous spoof
            console.log("Spoof typing activated for this chat")
        })
        
        builder.button("Stop Spoof Typing", () => {
            const hooks = require("snapenhance/hooks")
            hooks.spoofTyping(false)
            console.log("Spoof typing stopped")
        })
        
        builder.button("Dismiss Dialog", () => {
            args["alertDialog"].dismiss()
        })
    })
}
