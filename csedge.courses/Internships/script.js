//NavBar JS
const menuIcon = document.querySelector('img[src*="Menu"]');
const navLinks = document.querySelector('ul');

function disableScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "visible";
}

// Toggle navigation menu on click
menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    if (navLinks.classList.contains('show')) {
        this.src = '../Images/White Close.svg'; // Ensure this path matches the close icon's path
        disableScroll();
    } else {
        this.src = '../Images/White Menu.svg'; // Ensure this path matches the menu icon's path
        enableScroll();
    }
});

// Close navigation menu when a link is clicked
navLinks.addEventListener('click', function () {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuIcon.src = '../Images/White Menu.svg'; // Reset image to initial state. Ensure this path is correct.
        enableScroll();
    }
});

//Timeline Reveal JS
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    timelineItems.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemVisible = (itemRect.top + itemRect.height / 2) < windowHeight;

        if (itemVisible) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

function copyToClipboard(id) {
    const textToCopy = document.getElementById(id).innerText;
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard!');
}
