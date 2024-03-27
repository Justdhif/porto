const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Gamer', 'Student', 'Videographer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("active");
}

const optionMenu = document.querySelector(".select-menu"),
        selectBtn = document.querySelector(".select-btn"),
        options = document.querySelectorAll(".option"),
        sBtn_text = document.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector(".options-text").innerText;
        sBtn_text.innerText = selectedOption;
        console.log(selectedOption);
    })
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".select-menu").classList.contains("active")) {
        document.querySelector(".select-menu").classList.remove("active");
    }
});

const styleSwitcherToggle = document.querySelector(".style-switcher-toogler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/*=================== Change Theme Color ===================*/
const alternativeStyle = document.querySelectorAll(".alternative-style");
function setActiveStyle(color) {
    alternativeStyle.forEach ((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

function whatsApp() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var country = document.getElementById('country').value;
    var message = document.getElementById('message').value;

    var whatsapp = "https://wa.me/6282113285557?text="
    + "Nama: " + nama + "%0a"
    + "Email: " + email + "%0a"
    + "Number: " + number + "%0a"
    + "Country: " + country + "%0a"
    + "Message: " + message;

    window.open(whatsapp,"_blank").focus();
}

const toggle = document.getElementById('image');

toggle.addEventListener('click', () => {
    document.getElementById('img').classList.toggle('active');
})

const toggler = document.getElementById('xmark');

toggler.addEventListener("click", () => {
    if(document.querySelector(".img").classList.contains("active")) {
        document.querySelector(".img").classList.remove("active");
    }
});