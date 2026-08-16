// Authentication JavaScript

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    
    // Simulate authentication
    if (email && password) {
        showNotification('Login successful! Redirecting...', 'success');
        
        // Store user data (in production, use secure methods)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', role);
        localStorage.setItem('isAuthenticated', 'true');
        
        // Redirect based on role
        setTimeout(() => {
            if (role === 'student') {
                window.location.href = 'dashboard-student.html';
            } else if (role === 'teacher') {
                window.location.href = 'dashboard-teacher.html';
            }
        }, 1500);
    } else {
        showNotification('Please enter valid credentials', 'error');
    }
    
    return false;
}

function handleRegister(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('regFullName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const role = document.querySelector('#registerForm input[name="role"]:checked').value;
    const terms = document.querySelector('input[name="terms"]').checked;
    
    // Validation
    if (!terms) {
        showNotification('Please accept the terms and conditions', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return false;
    }
    
    if (password.length < 8) {
        showNotification('Password must be at least 8 characters', 'error');
        return false;
    }
    
    // Simulate registration
    showNotification('Account created successfully! Please login.', 'success');
    
    setTimeout(() => {
        showLoginTab('login');
    }, 1500);
    
    return false;
}

// Check authentication on protected pages
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const currentPage = window.location.pathname;
    
    if ((currentPage.includes('dashboard') || currentPage.includes('my-')) && !isAuthenticated) {
        window.location.href = 'login.html';
    }
}

// Run auth check on page load
document.addEventListener('DOMContentLoaded', checkAuth);
