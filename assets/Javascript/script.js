function openAppInfo() {
    alert("ForeverBond Mobile App launching soon ❤️");
}

function exploreNow() {
    const section = document.getElementById("explore");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function showMessage() {
    alert("Registration feature coming soon 💍");
}

function searchAction() {
    alert("Searching matches... 🔍");
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("formTitle").innerText = isLogin ? "Login" : "Sign Up";
}

function submitForm() {
    alert(isLogin ? "Login successful!" : "Signup successful!");
    closeModal();
}

document.addEventListener("DOMContentLoaded", function () {

    /* COUNTER */
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;

        const updateCounter = () => {
            const increment = Math.ceil(target / 100);

            if (count < target) {
                count += increment;

                if (count > target) count = target;

                if (target === 97) {
                    counter.innerText = count + "%";
                } else {
                    counter.innerText = count + "+";
                }

                setTimeout(updateCounter, 30);
            }
        };

        updateCounter();
    });

    /* SECTION FADE */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });

    /* NAV ACTIVE */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop;

            if (window.pageYOffset >= top - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

});