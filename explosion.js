// explosion.js

function explodeBlock(cell) {
    const numParticles = 8; // jumlah partikel
    const colors = ["#8fe388", "#4ea84a", "#c0ffc0", "#6abf6a"];

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "6px";
        particle.style.height = "6px";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";

        // posisi partikel di tengah cell
        const rect = cell.getBoundingClientRect();
        particle.style.left = rect.left + rect.width / 2 - 3 + "px";
        particle.style.top = rect.top + rect.height / 2 - 3 + "px";
        particle.style.zIndex = 1000;
        particle.style.opacity = 1;
        particle.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";

        document.body.appendChild(particle);

        // arah dan jarak ledakan acak
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 20;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        // jalankan animasi
        requestAnimationFrame(() => {
            particle.style.transform = `translate(${dx}px, ${dy}px) scale(0.5)`;
            particle.style.opacity = 0;
        });

        // hapus partikel setelah animasi selesai
        setTimeout(() => {
            particle.remove();
        }, 500);
    }
                   }
