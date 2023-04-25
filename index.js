const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    const password = document.querySelector('input[name="password"]');
    const confirmPassword = document.querySelector('input[name="confirmPassword"]');

    const errors = document.querySelectorAll("p.error");

    errors.forEach(error => {
        error.classList.remove("display");
    });

    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        const error = document.querySelector('p[data-name="password"]');
        error.textContent = "* The passwords must match";
        error.classList.add("display");
    }
});