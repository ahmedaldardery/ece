// ... (الكود السابق)

const clockInButton = document.getElementById('clock-in');
const clockOutButton = document.getElementById('clock-out');

clockInButton.addEventListener('click', () => {
    const now = new Date();
    // هنا يجب إرسال بيانات تسجيل الدخول إلى الخادم وقاعدة البيانات
    console.log("تسجيل دخول في:", now);
});

clockOutButton.addEventListener('click', () => {
    const now = new Date();
    // هنا يجب إرسال بيانات تسجيل الخروج إلى الخادم وقاعدة البيانات
    console.log("تسجيل خروج في:", now);
});