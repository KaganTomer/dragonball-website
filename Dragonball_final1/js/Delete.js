const deleteBox = document.getElementById("deleteBox");
const overlay = document.getElementById("overlay");

function confirmDelete() {
    deleteBox.classList.remove("hidden");
    deleteBox.classList.add("visible");
    overlay.classList.add("visible");
}

function cancelDelete() {
    deleteBox.classList.remove("visible");
    deleteBox.classList.add("hidden");
    overlay.classList.remove("visible");
}

function proceedDelete() {
    window.location.href = "Delete.aspx";
}