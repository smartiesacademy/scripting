// ==SE_module==
// name: nyx_power_toolbox
// displayName: Nyx Power Toolbox
// description: All-in-one fun & useful conversation tools
// version: 1.0
// author: Nyx
// ==/SE_module==

var im = require('interface-manager')
var messaging = require('messaging')

module.onSnapApplicationLoad = context => {
    im.create("conversationToolbox", (builder, args) => {
        const convId = args["conversationId"] || "unknown"
        builder.text("🔥 Nyx Power Toolbox")
        builder.text("Conv ID: " + convId)

        // Messaging tools
        builder.button("Send Hello from Nyx", () => {
            messaging.sendChatMessage(convId, "🔥 Enhanced by Nyx Power Toolbox!", (error) => {
                if (error != null) {
                    longToast("Failed: " + error)
                } else {
                    shortToast("Message sent!")
                }
            })
        })

        builder.button("Fetch Recent Messages", () => {
            var statusText = builder.text("Fetching...")
            messaging.fetchConversationWithMessages(convId, (error, messageList) => {
                if (error != null) {
                    statusText.setAttribute("label", "Error: " + error)
                    return
                }
                statusText.setAttribute("label", messageList.size() + " messages fetched")
                shortToast("Loaded " + messageList.size() + " messages")
            })
        })

        // Download / Save (triggers native behavior where possible)
        builder.button("Trigger Media Save", () => {
            longToast("Attempting to save visible media...")
            // Native downloader can be triggered via other hooks if enabled in Purrfect settings
        })

        // Fun / Spam
        builder.button("Spam Reactions (limited)", () => {
            shortToast("Sending reactions...")
            // Limited by API; combine with native reaction features
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    messaging.sendChatMessage(convId, "❤️", (e) => {})
                }, i * 600)
            }
        })

        // Stealth / Info (toasts for feedback)
        builder.button("Stealth Status", () => {
            longToast("Combine with Purrfect native stealth settings for full effect")
        })

        builder.button("Dismiss", () => {
            args["alertDialog"].dismiss()
        })
    })
}
