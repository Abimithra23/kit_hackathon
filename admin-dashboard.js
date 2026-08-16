// Admin dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check admin authentication
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
        showNotification('Access denied. Admin privileges required.', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    // Initialize charts
    if (typeof Chart !== 'undefined') {
        initializeEnrollmentChart();
        initializePerformanceComparisonChart();
    }
});

function initializeEnrollmentChart() {
    const ctx = document.getElementById('enrollmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Student Enrollments',
                data: [120, 150, 180, 200, 250, 300, 350, 400],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}

function initializePerformanceComparisonChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Programming', 'Data Science', 'Web Dev', 'AI/ML', 'Business'],
            datasets: [{
                label: 'Average Course Performance',
                data: [85, 78, 92, 88, 75],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(118, 75, 162, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function downloadReport(type) {
    showNotification(`Downloading ${type} report...`, 'info');
    // In production, generate and download actual report
}

function viewWeakAreas() {
    showNotification('Loading weak areas analysis...', 'info');
    // In production, navigate to detailed analysis page
}

function viewRecommendations() {
    showNotification('Loading AI recommendations...', 'info');
    // In production, navigate to recommendations page
}
