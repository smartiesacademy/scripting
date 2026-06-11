// ==SE_module==
// name: nyx_power_toolbox
// displayName: Nyx Power Toolbox
// description: Massive collection of fun & useful tools in one conversation menu
// version: 1.0
// author: Nyx
// ==/SE_module==

var im = require('interface-manager');  // toolbox builder (as in your example)

module.onSnapApplicationLoad = context => {
    im.create("conversationToolbox", (builder, args) => {
        const convId = args["conversationId"];
        builder.text("🔥 Nyx Power Toolbox");
        builder.text("Conv ID: " + convId);

        // === DOWNLOAD TOOLS ===
        builder.button("Download All Media", () => {
            const media = require("snapenhance/media") || require("media");
            media.downloadAllInConversation(convId);
            console.log("Downloaded all media in " + convId);
        });

        builder.button("Save Current Snap/Story", () => {
            // Trigger download for visible content
            require("snapenhance").downloadCurrentMedia();
        });

        // === STEALTH & SPOOF ===
        builder.button("Toggle Full Stealth", () => {
            const hooks = require("snapenhance/hooks");
            hooks.bypassScreenshotDetection();
            hooks.hideTypingIndicator();
            hooks.preventReadReceipts();
            hooks.hideBitmojiPresence();
            console.log("Full stealth enabled");
        });

        builder.button("Spoof Typing 15s", () => {
            const hooks = require("snapenhance/hooks");
            hooks.spoofTyping(true);
            setTimeout(() => hooks.spoofTyping(false), 15000);
        });

        builder.button("Spoof Location (NYC)", () => {
            const hooks = require("snapenhance/hooks");
            hooks.spoofLocation({ latitude: 40.7128, longitude: -74.0060 });
        });

        // === FUN REACTIONS & MESSAGING ===
        builder.button("Spam Random Reactions", () => {
            const ui = require("snapenhance/ui");
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    ui.sendRandomReaction(convId, ["❤️", "🔥", "👀", "💀", "😂"]);
                }, i * 800);
            }
        });

        builder.button("Send Fake Message", () => {
            require("snapenhance/messaging").sendMessage(convId, "🔥 Sent via Nyx Toolbox");
        });

        // === AUTOMATION & UTILS ===
        builder.button("Mark All Read", () => {
            require("snapenhance/hooks").markAllRead(convId);
        });

        builder.button("Export Chat Log", () => {
            const logger = require("snapenhance/logger");
            logger.exportConversation(convId, "json");
            console.log("Chat exported");
        });

        builder.button("Streak Maintainer (toggle)", () => {
            // Simple daily auto action placeholder
            console.log("Streak tools active for this chat");
            // Extend with setInterval if needed in full script
        });

        builder.button("Dismiss", () => {
            args["alertDialog"].dismiss();
        });
    });
};
