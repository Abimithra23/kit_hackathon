// Dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
        window.location.href = 'login.html';
        return;
    }
    
    // Initialize charts if canvas elements exist
    const performanceCanvas = document.getElementById('performanceChart');
    if (performanceCanvas && typeof Chart !== 'undefined') {
        initializePerformanceChart();
    }
    
    // Load user data
    const userEmail = localStorage.getItem('userEmail');
    console.log('Dashboard loaded for:', userEmail);
});

function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Performance Score',
                data: [65, 70, 75, 80, 85, 88],
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
