// Courses page functionality

function searchCourses() {
    const searchTerm = document.getElementById('courseSearch').value.toLowerCase();
    const courses = document.querySelectorAll('.course-item');
    
    courses.forEach(course => {
        const title = course.querySelector('h3').textContent.toLowerCase();
        const description = course.querySelector('.description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            course.style.display = 'flex';
        } else {
            course.style.display = 'none';
        }
    });
}

function sortCourses() {
    const sortBy = document.getElementById('sortBy').value;
    const coursesList = document.getElementById('coursesList');
    const courses = Array.from(coursesList.querySelectorAll('.course-item'));
    
    courses.sort((a, b) => {
        if (sortBy === 'title') {
            const titleA = a.querySelector('h3').textContent;
            const titleB = b.querySelector('h3').textContent;
            return titleA.localeCompare(titleB);
        } else if (sortBy === 'rating') {
            const ratingA = parseFloat(a.querySelector('.rating').textContent.match(/[\d.]+/)[0]);
            const ratingB = parseFloat(b.querySelector('.rating').textContent.match(/[\d.]+/)[0]);
            return ratingB - ratingA;
        }
        return 0;
    });
    
    courses.forEach(course => coursesList.appendChild(course));
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);
    const selectedLevels = Array.from(document.querySelectorAll('input[name="level"]:checked'))
        .map(cb => cb.value);
    
    const courses = document.querySelectorAll('.course-item');
    
    courses.forEach(course => {
        const category = course.getAttribute('data-category');
        const level = course.getAttribute('data-level');
        
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
        const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(level);
        
        if (categoryMatch && levelMatch) {
            course.style.display = 'flex';
        } else {
            course.style.display = 'none';
        }
    });
    
    showNotification('Filters applied', 'success');
}
