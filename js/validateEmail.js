function validateEmail() {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const warningText = document.getElementById("warningText");
    const inputField = document.getElementById("inputField");
    const warningIcon = document.getElementById("warningIcon");
    var email = inputField.value;

    if (regex.test(email)) {
        warningText.style.display = "none";
        warningIcon.style.display = "none";
        warningText.className = "";
        inputField.className = "";
        warningIcon.className = "";
    } else {
        warningText.style.display = null;
        warningIcon.style.display = null;
        warningText.className = "warning-text";
        inputField.className = "warning";
        warningIcon.className = "warning-icon";
    }
}