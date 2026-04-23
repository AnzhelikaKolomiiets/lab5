
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'inactive');
    };
    const autoCheckTime = () => {
        const hour = new Date().getHours();
        if (hour >= 7 && hour < 21) {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    };
    let darkmode = localStorage.getItem('darkmode');
    if (darkmode === "active") {
        enableDarkmode();
    } else if (darkmode === "inactive") {
        disableDarkmode();
    } else {
        autoCheckTime();
    }
    if (themeSwitch) {
        themeSwitch.addEventListener("click", () => {
            if (document.body.classList.contains('darkmode')) {
                disableDarkmode();
            } else {
                enableDarkmode();
            }
        });
    } else {
        console.error("Кнопку з ID 'theme-switch' не знайдено на сторінці!");
    }
});