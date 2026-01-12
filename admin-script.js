// ===============================
// SIDEBAR SECTION SWITCHING
// ===============================
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update active menu item
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => item.classList.remove("active"));

    event.target.closest(".menu-item").classList.add("active");
}



// ===============================
// MOBILE MENU TOGGLE
// ===============================
function toggleMobileMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}



// ===============================
// PREVIEW UPLOADED IMAGES
// ===============================
function previewImages(event) {
    const imagePreview = document.getElementById("imagePreview");
    imagePreview.innerHTML = ""; // Clear previous images

    const files = event.target.files;

    if (files.length > 10) {
        alert("Maximum 10 images allowed!");
        event.target.value = "";
        return;
    }

    [...files].forEach(file => {
        if (!file.type.startsWith("image/")) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.className = "preview-img";
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}



// ===============================
// ADD CAR SUBMIT HANDLER
// ===============================
function handleAddCar(event) {
    event.preventDefault();
    alert("Car added successfully!");
    event.target.reset();
    document.getElementById("imagePreview").innerHTML = "";
}



// ===============================
// CONFIRM DELETE
// ===============================
function confirmDelete() {
    const confirmBox = confirm("Are you sure you want to delete this car?");
    if (confirmBox) {
        alert("Car deleted successfully!");
    }
}



// ===============================
// APPROVE / REJECT ACTIONS
// ===============================
function approveRequest(type) {
    alert(type.toUpperCase() + " request approved!");
}

function rejectRequest(type) {
    alert(type.toUpperCase() + " request rejected!");
}