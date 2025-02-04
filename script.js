document.addEventListener("DOMContentLoaded", () => {
    // Remover loading após 2 segundos
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);

    // Navbar fixa ao rolar a página
    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 100) {
            navbar.classList.add("active");
        } else {
            navbar.classList.remove("active");
        }
    });

    // Carregar imagens da seção "Sobre"
    const aboutImages = [
        `https://picsum.photos/300/300?random=1`,
        `https://picsum.photos/300/300?random=2`,
        `https://picsum.photos/300/300?random=3`
    ];

    const aboutContainer = document.getElementById("about-images");
    aboutImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("random-img");
        aboutContainer.appendChild(img);
    });

    // Carregar cursos no slider
    const courses = [
        { name: "Violão", image: `https://picsum.photos/300/200?random=4` },
        { name: "Piano", image: `https://picsum.photos/300/200?random=5` },
        { name: "Bateria", image: `https://picsum.photos/300/200?random=6` },
        { name: "Violino", image: `https://picsum.photos/300/200?random=7` }
    ];

    const sliderContainer = document.getElementById("course-slider");
    courses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("curso-card");
        card.innerHTML = `<img src="${course.image}" alt="${course.name}">
                          <p>${course.name}</p>`;
        sliderContainer.appendChild(card);
    });

    // Testimonials Mock

    // PODEEEEM ALTERAR AQUIIII:
    const testimonials = [
        { name: "João", course: "Violão", text: "Melhor curso que já fiz!", img: `https://picsum.photos/100/100?random=8` },
        { name: "Maria", course: "Piano", text: "Aprendi a tocar em 3 meses!", img: `https://picsum.photos/100/100?random=9` },
        { name: "Aecio", course: "Guitarra", text: "Já estou melhor que Chimbinha", img: `https://picsum.photos/100/100?random=50` },
        { name: "Mendes", course: "Pandeiro", text: "É no batuque do tambor", img: `https://picsum.photos/100/100?random=51` },
        { name: "Minoru", course: "Pandeiro (Mas com um toque de humor)", text: "É no batuque do tambor, mas é melhor que o som de um despertador!", img: `https://picsum.photos/100/100?random=52` },
        { name: "Clodoaldo", course: "Bateria", text: "Dediquei 12 anos ao instrumento e não aprendi tudo ", img: `https://picsum.photos/100/100?random=60` },
      { name: "Nilsa", course: "piano", text: "A sensação é de como tocar as nuvens! uma melodia angelical", img: `https://picsum.photos/100/100?random=22` },
         { name: "Gabriel", course: "Bateria", text: "ótimo curso! ja estou procurando vaga no slipknot", img: `https://picsum.photos/100/100?random=55` }
    ];

    const testimonialContainer = document.getElementById("testimonials-content");
    testimonials.forEach(({ name, course, text, img }) => {
        const div = document.createElement("div");
        div.classList.add("testimonial");
        div.innerHTML = `<img src="${img}" class="aluno-foto">
                         <p>"${text}"</p>
                         <span>- ${name}, curso de ${course}</span>`;
        testimonialContainer.appendChild(div);
    });

    // Slider functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll(".curso-card");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".prev").addEventListener("click", () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    });

    showSlide(slideIndex); // Mostrar primeiro slide inicialmente

    // Adiciona efeito de hover nos cards dos cursos
    const cursoCards = document.querySelectorAll(".curso-card");
    cursoCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
