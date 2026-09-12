// lang.js
const translations = {
    uz: {
        // Bosh sahifa
        sys_init: "> Tizim ishga tushirilmoqda...",
        welcome: "> KomilUsmonDev terminaliga xush kelibsiz.",
        about_1: "- Salom, men Komil Usmonqulov.",
        about_2: "- 1-yillik tajribaga ega dasturchiman.",
        about_3: "- Android (Kotlin), Web, Python va 3D dizayn yo'nalishlarida ishlayman.",
        main_menu: "--- ASOSIY MENYU ---",
        btn_projects: "[1] Loyihalar va Ilovalar",
        btn_contact: "[2] Men bilan bog'lanish ",
        btn_support: "[3] Ilovalar yordam markazi",
        btn_privacy: "[4] Maxfiylik siyosati",
        social_links: "--- TARMOQLAR ---",
        back_home: "> Bosh sahifaga qaytish",
        
        // Forma va boshqa so'zlar
        name_label: "> Ismingiz",
        email_label: "> Email",
        msg_label: "> Xabar",
        send_btn: "> Yuborish",
        placeholder_name: "Ismingizni kiriting"
    },
    ru: {
        // Главная страница
        sys_init: "> Инициализация системы...",
        welcome: "> Добро пожаловать в терминал KomilUsmonDev.",
        about_1: "- Привет, я Комил Усмонкулов.",
        about_2: "- 1-летний опыт работы в качестве разработчика.",
        about_3: "- Специализируюсь на Android (Kotlin), Web, Python и 3D-моделировании.",
        main_menu: "--- ГЛАВНОЕ МЕНЮ ---",
        btn_projects: "[1] Проекты и Приложения",
        btn_contact: "[2] Связаться со мной",
        btn_support: "[3] Поддержка приложений",
        btn_privacy: "[4] Политика конфиденциальности",
        social_links: "--- СОЦСЕТИ ---",
        back_home: "> Вернуться на главную",
        
        // Формы
        name_label: "> Ваше имя",
        email_label: "> Эл. почта",
        msg_label: "> Сообщение",
        send_btn: "> Отправить",
        placeholder_name: "Введите ваше имя"
    },
    en: {
        // Home page
        sys_init: "> System init...",
        welcome: "> Welcome to KomilUsmonDev terminal.",
        about_1: "- Hi, I am Komil Usmonqulov.",
        about_2: "- 1-year experienced developer.",
        about_3: "- Specializing in Android (Kotlin), Web, Python, and 3D modeling.",
        main_menu: "--- MAIN MENU ---",
        btn_projects: "[1] View Projects & Apps",
        btn_contact: "[2] Contact Me",
        btn_support: "[3] App Support / Tickets",
        btn_privacy: "[4] Privacy Policies",
        social_links: "--- SOCIAL LINKS ---",
        back_home: "> Back to Home",
        
        // Forms
        name_label: "> Your Name",
        email_label: "> Email",
        msg_label: "> Message",
        send_btn: "> Send",
        placeholder_name: "Enter your name"
    }
};

// Tilni o'zgartirish funksiyasi
function setLanguage(lang) {
    localStorage.setItem('app_lang', lang); // Tanlangan tilni xotirada saqlash
    
    // Barcha data-i18n atributiga ega elementlarni topib, tarjima qilish
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Agar input bo'lsa placeholder'ni almashtiradi, matn bo'lsa matnni
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translations[lang][key]);
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // Til tanlash tugmalari rangini yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.style.color = btn.getAttribute('onclick').includes(lang) ? '#d6ad5c' : '#ffffff';
    });
}

// Sahifa yuklanganda xotiradagi tilni qo'yish (yoki standart UZ)
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('app_lang') || 'uz';
    setLanguage(savedLang);
});