
    // Change Hero Text
    function changeText() {
        document.getElementById("mainHeading").innerText =
            "Welcome to ForeverBond 💖";
    }

    // Register Button Click
    function showMessage() {
        alert("Registration feature coming soon 💍");
    }

    // Search Button Action
    function searchAction() {
        alert("Searching matches... 🔍");
    }


    // DOM + Event: Change text
    function changeText() {
        document.getElementById("mainHeading").innerText =
            "Welcome to ForeverBond 💖";
    }

    // Event: Register button
    function showMessage() {
        alert("Registration feature coming soon 💍");
    }

    // Event + DOM: Search button
    function searchAction() {
        alert("Searching matches... 🔍");
    }


    document.addEventListener("DOMContentLoaded", function () {

        let slides = document.querySelectorAll(".slide");
        let index = 0;

        function showSlide() {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");

            index = (index + 1) % slides.length;
        }

        setInterval(showSlide, 3000);

    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

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

    function handleSubmit(event) {
        event.preventDefault();

        const btn = document.getElementById("sendBtn");
        const msg = document.getElementById("formMessage");

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        if (!name || !email || !message) {
            msg.innerText = "Please fill all fields!";
            msg.style.color = "red";
            return;
        }

        // Loading state
        btn.innerText = "Sending...";
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            msg.innerText = "Message sent successfully! ✅";
            msg.style.color = "green";

            btn.innerText = "Send Message";
            btn.disabled = false;

            event.target.reset();
        }, 1500);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const msgError = document.getElementById("msgError");

        // Reset errors
        nameError.innerText = "";
        emailError.innerText = "";
        msgError.innerText = "";

        // Name validation
        if (name.value.trim().length < 3) {
            nameError.innerText = "Enter valid name";
            isValid = false;
        }

        // Email validation
        if (!email.value.includes("@")) {
            emailError.innerText = "Enter valid email";
            isValid = false;
        }

        // Message validation
        if (message.value.trim().length < 5) {
            msgError.innerText = "Message too short";
            isValid = false;
        }

        if (!isValid) return;

        const btn = document.getElementById("sendBtn");
        const formMsg = document.getElementById("formMessage");

        btn.innerText = "Sending...";
        btn.disabled = true;

        setTimeout(() => {
            formMsg.innerText = "Message sent successfully ✅";
            formMsg.style.color = "green";

            btn.innerText = "Send Message";
            btn.disabled = false;

            event.target.reset();
        }, 1500);
    }
