// Course details page functionality

function enrollCourse() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
        showNotification('Please login to enroll in this course', 'info');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    } else {
        showNotification('Enrollment successful! Redirecting to your dashboard...', 'success');
        setTimeout(() => {
            window.location.href = 'dashboard-student.html';
        }, 1500);
    }
}

// Load course details based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    // In production, fetch course details from API based on courseId
    console.log('Loading course with ID:', courseId);
});
