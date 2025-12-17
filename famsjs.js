document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".memori-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    cards.forEach(card => observer.observe(card));

    /* ================================
       ANIMASI BERANDA
    ================================ */
    const berandaItems = document.querySelectorAll(
        ".beranda-item, .stat-item, .quote-section p"
    );

    berandaItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
    });

    const observerBeranda = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    berandaItems.forEach(item => observerBeranda.observe(item));

    const sections = document.querySelectorAll(
    ".kisah-section, .profil-card"
);

sections.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(el => observer2.observe(el));

/* ================================
   ALBUM PREVIEW
================================ */
const albumItems = document.querySelectorAll(".album-item img");

albumItems.forEach(img => {
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = 9999;

        const preview = document.createElement("img");
        preview.src = img.src;
        preview.style.maxWidth = "80%";
        preview.style.maxHeight = "80%";
        preview.style.borderRadius = "15px";

        overlay.appendChild(preview);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});


});
