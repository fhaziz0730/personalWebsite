// Main JavaScript for HTMX interactions
document.addEventListener('DOMContentLoaded', function() {
    // Fetch projects when the projects section is loaded
    const projectsSection = document.getElementById('projects');
    
    if (projectsSection) {
        // Use HTMX to fetch projects from the backend
        projectsSection.innerHTML = `
            <div id="projects-container" hx-get="/api/projects" hx-trigger="load" hx-target="#projects-container" hx-indicator="#projects-loading">
                <p id="projects-loading">Loading projects...</p>
            </div>
        `;
    }
});