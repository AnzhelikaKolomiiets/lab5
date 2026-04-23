const displaySystemInfo = () => {
    const systemData = {
        os: navigator.platform,
        browser: navigator.userAgent,
        language: navigator.language || navigator.userLanguage
    };

    localStorage.setItem('userBrowserInfo', JSON.stringify(systemData));
    const stored = JSON.parse(localStorage.getItem('userBrowserInfo'));
    let footer = document.querySelector('footer');
    if (!footer) {
        footer = document.createElement('footer');
        const mainContent = document.querySelector('.main-content') || document.body;
        mainContent.after(footer);
    }
    footer.style.marginTop = "20px";
    footer.style.padding = "20px 0";
    footer.style.borderTop = "1px solid #ccc";
    footer.style.textAlign = "center";
    footer.style.clear = "both"; 
    footer.innerHTML = `
        <p style="margin: 0; padding-bottom: 5px; font-family: serif;">© 2026 Anzhelika Kolomiiets</p>
        <p style="margin: 0; font-family: serif; font-size: 12px; color: #555;">
            ОС: ${stored.os}, ${stored.browser}, ${stored.language}
        </p>
    `;
};

window.addEventListener('load', displaySystemInfo);