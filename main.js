// Foydalanuvchidan ismni so'rash
let ism = prompt("Ismingizni kiriting:");

// Foydalanuvchidan harfni so'rash
let harf = prompt("Birorta harf kiriting:");

// Harfning ishtirokini tekshirish
if (ism && harf) {
    // Ismning birinchi harfini katta, qolganini kichik harfga o'zgartirish
    ism = ism.charAt(0).toUpperCase() + ism.slice(1).toLowerCase();
    
    // Katta-kichik harfni farq qilmaslik uchun harfni kichik harfga o'tkazamiz
    harf = harf.toLowerCase();

    if (ism.toLowerCase().includes(harf)) {
        alert(`${ism} ismida '${harf}' harfi ishtirok etgan.`);
    } else {
        alert(`${ism} ismida '${harf}' harfi ishtirok etmagan.`);
    }
} else {
    alert("Iltimos, ism va harfni to'g'ri kiriting!");
}
