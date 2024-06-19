const testimonials = [
    {
        image: 'https://dpemoji.com/wp-content/uploads/2023/01/Whatsapp-dp-for-boys-57.png',
        name: 'John Doe',
        position: 'Software Engineering Intern',
        company: 'University of ABC',
        text: "CSEdge's internship program was a transformative experience! Highly recommend!",
        rating: 5
    },
    {
        image: 'https://dpemoji.com/wp-content/uploads/2023/01/Whatsapp-dp-for-boys-57.png',
        name: 'Jane Smith',
        position: 'UX/UI Design Intern',
        company: 'Tech Innovators Ltd.',
        text: 'Amazing experience with CSEdge. Learned so much!',
        rating: 4.5
    },
    {
        image: 'https://dpemoji.com/wp-content/uploads/2023/01/Whatsapp-dp-for-boys-57.png',
        name: 'Michael Johnson',
        position: 'Data Science Intern',
        company: 'Data Analytics Co.',
        text: "CSEdge's data science internship was top-notch!",
        rating: 4.8
    },
    {
        image: 'https://dpemoji.com/wp-content/uploads/2023/01/Whatsapp-dp-for-boys-57.png',
        name: 'Sarah Williams',
        position: 'Cybersecurity Intern',
        company: 'Security Solutions Inc.',
        text: 'Incredible cybersecurity internship experience at CSEdge!',
        rating: 4.7
    }
    // Add more testimonials as needed
];


let currentIndex = 0;
const itemsPerPage = 3;

const testimonialsContent = document.getElementById('testimonialsContent');

function renderTestimonials() {
    testimonialsContent.innerHTML = '';
    const end = currentIndex + itemsPerPage;
    const visibleTestimonials = end > testimonials.length
        ? [...testimonials.slice(currentIndex), ...testimonials.slice(0, end - testimonials.length)]
        : testimonials.slice(currentIndex, end);

    visibleTestimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= testimonial.rating) {
                stars.push('<i class="fa fa-star"></i>');
            } else if (i === Math.ceil(testimonial.rating) && !Number.isInteger(testimonial.rating)) {
                stars.push('<i class="fa fa-star-half-alt"></i>');
            } else {
                stars.push('<i class="fa fa-star-o"></i>');
            }
        }

        testimonialDiv.innerHTML = `
            <div>
                <img src="${testimonial.image}" alt="${testimonial.name}" width="50" height="50">
                <div>
                    <div class="name">${testimonial.name}</div>
                    <div class="position">${testimonial.position}, ${testimonial.company}</div>
                </div>
            </div>
            <p>${testimonial.text}</p>
            <div class="stars">${stars.join(' ')}</div>
        `;
        testimonialsContent.appendChild(testimonialDiv);
    });
}

function handlePrev() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonials();
}

function handleNext() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonials();
}

document.getElementById('prevBtn').addEventListener('click', handlePrev);
document.getElementById('nextBtn').addEventListener('click', handleNext);

renderTestimonials();
