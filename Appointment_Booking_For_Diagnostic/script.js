// Function to handle booking of a test
function bookTest(testName) {
    alert(`You have booked the ${testName}.`);
}


// Register form submission event
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const email = document.getElementById('email').value;

    if (username && password && email) {
        alert(`User registered with username: ${username}`);
    } else {
        alert("Please fill in all fields.");
    }
});
