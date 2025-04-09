// const é o  objeto icone pra trocar cor do site
const toggleTheme = document.getElementById("toggleTheme")
const rootHtlm = document.documentElement;

function changeTheme() {

    const currentTheme = rootHtlm.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtlm.setAttribute("data-theme", "light") : rootHtlm.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-moon-stars")
    toggleTheme.classList.toggle("bi-sun")

}

toggleTheme.addEventListener("click", changeTheme)