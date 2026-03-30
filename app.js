async function loadImages() {
    try {
        const response = await fetch("images.json");
        const data = await response.json();

        const gallery = document.getElementById("gallery");

        data.forEach(item => {
            const card = createCard(item);
            gallery.appendChild(card);
        });

    } catch (error) {
        console.error("Error cargando imágenes:", error);
    }
}

function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("card-image");

    const img = document.createElement("img");
    img.src = "images/" + item.file;

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = item.title;

    imageWrapper.appendChild(img);
    card.appendChild(imageWrapper);
    card.appendChild(caption);

    return card;
}

loadImages();