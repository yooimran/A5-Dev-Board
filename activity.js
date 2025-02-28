
// Set today's date on page load
window.addEventListener("load", function () {
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    document.getElementById("dateDisplay").textContent = today.toLocaleDateString('en-US', options);
});



document.getElementById("themeButton").addEventListener("click", function () {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});




