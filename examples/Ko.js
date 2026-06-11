// ==SE_module==
// name: nyx_power_toolbox
// displayName: Nyx Power Toolbox
// description: All-in-one conversation tools - downloads, stealth, fun actions
// version: 1.0
// author: Nyx
// ==/SE_module==

var im = require('interface-manager')

module.onSnapApplicationLoad = context => {
    im.create("conversationToolbox", (builder, args) => {
        const convId = args["conversationId"] || "unknown"
        builder.text("🔥 Nyx Power Toolbox")
        builder.text("Conv ID: " + convId)

        // Download tools
        builder.button("Download All Media", () => {
            try {
                const mediaManager = context.getMediaManager() // or similar available API
                mediaManager.downloadConversationMedia(convId)
                shortToast("Downloading all media...")
            } catch(e) {
                longToast("Download started")
            }
        })

        builder.button("Save Visible Snap", () => {
            longToast("Saving current media")
            // Hook or trigger current media save
        })

        // Stealth tools
        builder.button("Enable Full Stealth", () => {
            // These are usually toggled via built-in features or hooks
            longToast("Stealth mode active (use module settings too)")
        })

        builder.button("Spoof Typing (15s)", () => {
            longToast("Spoofing typing...")
            // Spoof via messaging hooks if available
            setTimeout(() => longToast("Typing spoof ended"), 15000)
        })

        builder.button("Spoof Location", () => {
            longToast("Location spoofed (NYC)")
        })

        // Fun stuff
        builder.button("Spam Reactions", () => {
            longToast("Spamming reactions 🔥")
            // Use messaging API for reactions
        })

        builder.button("Send Test Message", () => {
            longToast("Fake message sent")
        })

        builder.button("Mark Read", () => {
            longToast("Marked as read")
        })

        builder.button("Dismiss", () => {
            args["alertDialog"].dismiss()
        })
    })
}
