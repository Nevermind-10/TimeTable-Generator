document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!\nName: " + document.getElementById("name").value + "\nEmail: " + document.getElementById("email").value);
});

document.getElementById("showMsgBtn").addEventListener("click", function() {
    alert("Button clicked!");
});
