//שינוי שפה
let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "he" : "en";

    const translatables = document.querySelectorAll("[data-en][data-he]");
    translatables.forEach(el => {
        el.textContent = el.dataset[currentLang];
    });

    // עדכון הטקסט של כפתור השפה
    const langBtn = document.querySelector(".langBtn");
    langBtn.textContent = currentLang === "en" ? "עברית" : "English";
}




//רשימת התמונות של הקבוצה
const images = [
    "main gruop image(2).jpg",
    "main gruop image(3).jpg",
    "main gruop image(4).jpg",
    "main gruop image(1).jpg"
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("carouselImage");
    imgElement.src = images[index];
    imgElement.onload = () => {
        imgElement.style.height = "auto";
        imgElement.style.objectFit = "contain";
    };
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}



//הוספת טקסט לתמונות
function updateCarousel() {
  const img = document.getElementById("carouselImage");
  const caption = document.getElementById("carouselCaption");

  img.src = images[currentIndex];

  // עדכון טקסט רק אם זה לא התמונה הראשונה
  if (currentIndex > 0) {
    caption.textContent = "מהתחרות לפני שנתיים";
  } else {
    caption.textContent = ""; // אין טקסט לתמונה הראשונה
  }
}
window.onload = updateCarousel;


// Auto-scroll
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);



// search bar
function searchText() {
    const input = document.getElementById('searchInput').value;
    if (input) {
        // מחפש את הטקסט הראשון בדף
        window.find(input);
    }


    const found = document.body.textContent.includes(input);
    if (!input) {
        document.getElementById("searchError").textContent = `its not possible to leave the search bar empty.`;
    }
    else if (!found) {
        document.getElementById("searchError").textContent = `'No results found for' "${input}".`
    }
    else {
        document.getElementById("searchError").textContent = "";
    }
}
