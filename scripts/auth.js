document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = ''; // Clear previous errors

    try {
        // Simulated authentication against Google Sheets data (replace with actual API call)
        const isAuthenticated = await authenticateUser(username, password);

        if (isAuthenticated) {
            // Redirect based on user type
            const userType = await getUserType(username); // Replace with actual logic

            if (userType === 'staff') {
                window.location.href = 'staff.html';
            } else if (userType === 'customer') {
                window.location.href = 'customer.html';
            } else {
                errorMessage.textContent = 'Unauthorized Access';
            }
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again.';
        console.error('Authentication error:', error);
    }
});

async function authenticateUser(username, password) {
    // Placeholder for Google Sheets API call to validate credentials
    // Replace with actual implementation
    const mockData = {
        'staffUser': 'password123',
        'customerUser': 'password456'
    };

    return mockData[username] === password;
}

async function getUserType(username) {
    // Placeholder for user type retrieval from Google Sheets
    // Replace with actual implementation
    const mockUserTypes = {
        'staffUser': 'staff',
        'customerUser': 'customer'
    };

    return mockUserTypes[username];
}
