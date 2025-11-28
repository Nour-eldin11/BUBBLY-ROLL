 const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

//   document.getElementById("lang-btn").addEventListener("click", () => {
//     const newLang = currentLang === "en" ? "ar" : "en";
//     setLanguage(newLang);
// });

const allTexts = {
    // عناصر القائمة
    "Fresh Juice": "عصائر طازجة",
    "Smoothie": "سموذي",
    "MilkShake": "ميلك شيك",
    "MixShake": " ميكس شيك ",
    "Milkshake": "ميلك شيك",
    "Mixshake": " ميكس شيك ",
    "Cold Drink": "مشروبات باردة",
    "Hot Drink": "مشروبات ساخنة",
    "Freska": "فريزكا",
    "Ice Roll": "آيس رول",
    "Waffle": "وافل",
    "Pancake": "بانكيك",
    "Taco": "تاكو",
    "Donuts": "دونات",
    "Mango": "مانجو",
    "Strawberry": "فراولة",
    "Blueberry": "توت بري",
    "Watermelon": "بطيخ",
    "Dates With Milk": "تمر بالحليب",
    "Bananas With Milk": "موز بالحليب",
    "mint Lemonade": "ليمون بالنعناع",
    "Kiwi": "كيوي",
    "Peach": "خوخ",
    "Peach smoothie.": "سموذي خوخ.",
    "strawberry smoothie.": "سموذي فراولة.",
    "blueberry smoothie.": "سموذي توت بري.",
    "Vanilla": "فانيليا",
    "Chocolate": "شوكولاتة",
    "Caramel": "كراميل",
    "Creamy Mango": "مانجو كريمي",
    "Creamy Strawberry": "فراولة كريمية",
    "Creamy Watermelon": "بطيخ كريمي",
    "Creamy Kiwi": "كيوي كريمي",
    "Power Bubbly": "فقاقيع قوية",
    "Waffle Cup": "كوب وافل",
    "Mini Waffle": "وافل صغير",
    "Double Sandwich": "ساندويش مزدوج",
    "Waffle Fatta": "وافل فتا",
    "Medium Pancake": "بانكيك متوسطة",
    "Larg Pancake": " بانكيك كبير ",
    "Tagen Pancake": " تاجن بانكيك" ,
    "Nutella Taco": "تاكو نوتيلا",
    "White Chocolate Taco": "تاكو شوكولاتة بيضاء",
    "Lotus Taco": "تاكو لوتس",
    "Caramel Donuts": "دونات كراميل",
    "Ice Coffee": "قهوة مثلجة",
    "sunshine": "سان شاين",
    "Blue Lagoon": "لاجون أزرق",
    "Mohito": "موهيتو",
    "Apple festival": "مهرجان التفاح",
    "Tea": "شاي",
    "Mint Tea": "شاي بالنعناع",
    "Yanson": "يانسون",
    "Mint": "نعناع",
    "Hot lemon": "ليمون ساخن",
    "Sahlab": "سحلب",
    "Special Sahlab": "سحلب خاص",
    "Caramel": "كراميل",
    "White Chocolate": "شوكلاته بيضاء",
    "Nutella": "نوتيلا",
    "Lotus": "لوتس",
    "Oreo": "أوريو",
    "Raffaello": "رافايللو",
    "Twinkies": "تويينكيز",
    "HO Hos": "هو هوس",
    "Todo": "تودو",
    "Ho Hos": "هو هوس",
    "TODO": "تودو",
    "Caramel Fatta": "كعكة الكراميل",
    "White Chocolate Fatta": "كعكة شوكولاتة بيضاء",
    "Nutella Fatta": "كعكة نوتيلا",
    "Lotus Fatta": "كعكة لوتس",
    "Oreo Fatta": "كعكة أوريو",
    "Kit Kat": "كيت كات",
    "Snickers": "سنيكرز ",
    "Galaxy": "جلاكسي ",
    "Cadbury": "كادبوري ",
    "Maltesers": "مالتيزرز ",
    "Lotus": "لوتس ",
    "Kinder": "كيندر ",
    "Ferrero Rocher": "فريرو روشير ",
    "Blueberry": "بلو بيري ",
    "Pineapple": "اناناس ",
    "Banana": "موز ",
    

    // أضف المزيد حسب الحاجة
  };

  function translateToArabic() {
    // استبدال النصوص في عناصر القائمة
    document.querySelectorAll('nav a').forEach(a => {
      const originalText = a.getAttribute('data-original') || a.textContent.trim();
      if (!a.getAttribute('data-original')) {
        a.setAttribute('data-original', originalText);
      }
      if (allTexts[originalText]) {
        a.textContent = allTexts[originalText];
      }
    });

    // استبدال العناوين في الأقسام
    document.querySelectorAll('.banner-card h2').forEach(h => {
      const originalText = h.getAttribute('data-original') || h.textContent.trim();
      if (!h.getAttribute('data-original')) {
        h.setAttribute('data-original', originalText);
      }
      if (allTexts[originalText]) {
        h.textContent = allTexts[originalText];
      }
    });

    // استبدال عناوين الأطباق
    document.querySelectorAll('.menu .card h3').forEach(h => {
      const originalText = h.getAttribute('data-original') || h.textContent.trim();
      if (!h.getAttribute('data-original')) {
        h.setAttribute('data-original', originalText);
      }
      if (allTexts[originalText]) {
        h.textContent = allTexts[originalText];
      }
    });

    // استبدال الفقرات
    document.querySelectorAll('.menu .card p').forEach(p => {
      const originalText = p.getAttribute('data-original') || p.textContent.trim();
      if (!p.getAttribute('data-original')) {
        p.setAttribute('data-original', originalText);
      }
      if (allTexts[originalText]) {
        p.textContent = allTexts[originalText];
      }
    });
  }