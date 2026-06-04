// Sahifa to'liq yuklangandan keyin kodlar ishga tushishi uchun wrapper
document.addEventListener('DOMContentLoaded', () => {
    
    // HTML elementlarni tanlab olamiz
    const contactForm = document.querySelector('.form form');
    const signUpBtn = document.querySelector('.buttons .btn');
    const navLinks = document.querySelectorAll('.nav a');

    // 1. Forma yuborilishini nazorat qilish (Form Submission)
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Sahifa qayta yuklanib ketishini oldini olamiz
            event.preventDefault();

            // Input qiymatlarini olamiz
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Oddiy tekshiruv (Validation)
            if (name === '' || email === '' || message === '') {
                alert('Iltimos, barcha maydonlarni toʻldiring!');
                return;
            }

            // Muvaffaqiyatli yuborilganini ko'rsatish
            alert(`Rahmat, ${name}! Xabaringiz muvaffaqiyatli qabul qilindi. tez orada javob beramiz.`);

            // Formani tozalash
            contactForm.reset();
        });
    }

    // 2. Sign Up tugmasi bosilganda (Oddiy click hodisasi)
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            alert('Roʻyxatdan oʻtish oynasi tez kunda ishga tushadi!');
        });
    }

    // 3. Navigatsiya menyusi havolalariga "Active" klassini qo'shish (Vizual effekt)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Avvalgi aktiv klasslarni olib tashlaymiz
            navLinks.forEach(item => item.classList.remove('active'));
            // Bosilgan havolaga aktiv klass beramiz
            this.classList.add('active');
        });
    });

});
