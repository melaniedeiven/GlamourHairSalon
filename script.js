// JavaScript for calendar and form interactions
document.addEventListener("DOMContentLoaded", function () {
    const dateCells = document.querySelectorAll(".calendar .clickable");

    dateCells.forEach(cell => {
        cell.addEventListener("click", function () {
            const selectedDate = this.getAttribute("data-date");
            alert(`You selected ${selectedDate}`);
            // Add your booking logic here
        });
    });

    // Add more JavaScript code if necessary for form interactions
});
