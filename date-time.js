// دالة لحساب التاريخ الهجري
function getHijriDate(date) {
    // خوارزمية تقريبية لحساب التاريخ الهجري
    const gYear = date.getFullYear();
    const gMonth = date.getMonth() + 1;
    const gDay = date.getDate();
    
    // حساب عدد الأيام منذ التاريخ المرجعي
    let ld = Math.floor((gYear + ((gMonth - 14) / 12)) / 100);
    let jd = Math.floor((1461 * (gYear + 4800 + Math.floor((gMonth - 14) / 12))) / 4) +
             Math.floor((367 * (gMonth - 2 - 12 * (Math.floor((gMonth - 14) / 12)))) / 12) -
             Math.floor((3 * Math.floor((gYear + 4900 + Math.floor((gMonth - 14) / 12)) / 100)) / 4) +
             gDay - 32075;
    
    let l = jd - 1948440 + 10632;
    let n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    let j = (Math.floor((10985 - l) / 5316)) * (Math.floor((50 * l) / 17719)) + 
            (Math.floor(l / 5670)) * (Math.floor((43 * l) / 15238));
    l = l - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - 
        (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
    
    const hMonth = Math.floor((24 * l) / 709);
    const hDay = l - Math.floor((709 * hMonth) / 24);
    const hYear = 30 * n + j - 30;
    
    return { day: hDay, month: hMonth, year: hYear };
}

// أسماء الأشهر الهجرية
const hijriMonths = [
    'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني',
    'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان',
    'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
];

// أسماء الأيام العربية
const arabicDays = [
    'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء',
    'الخميس', 'الجمعة', 'السبت'
];

// أسماء الأشهر الميلادية بالعربية
const gregorianMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

// تحديث التاريخ والوقت
function updateDateTime() {
    const now = new Date();
    
    // التاريخ الميلادي
    const dayName = arabicDays[now.getDay()];
    const day = now.getDate();
    const monthName = gregorianMonths[now.getMonth()];
    const year = now.getFullYear();
    
    // التاريخ الهجري
    const hijri = getHijriDate(now);
    const hijriMonthName = hijriMonths[hijri.month - 1];
    
    // الوقت
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // تحديث العناصر
    const gregorianDateElement = document.getElementById('gregorian-date');
    const hijriDateElement = document.getElementById('hijri-date');
    const timeElement = document.getElementById('current-time');
    
    if (gregorianDateElement) {
        gregorianDateElement.textContent = `${dayName}، ${day} ${monthName} ${year}م`;
    }
    
    if (hijriDateElement) {
        hijriDateElement.textContent = `${hijri.day} ${hijriMonthName} ${hijri.year}هـ`;
    }
    
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// تحديث كل ثانية
setInterval(updateDateTime, 1000);

// تحديث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', updateDateTime);
