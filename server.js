import express from 'express';
import axios from 'axios';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Serve main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to fetch projects from GitHub
app.get('/api/projects', async (req, res) => {
    try {
        const username = 'fhaziz0730';
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'PersonalWebsite'
            }
        });

        const projects = response.data.slice(0, 6).map(repo => ({
            name: repo.name,
            description: repo.description || 'No description provided',
            url: repo.html_url,
            language: repo.language || 'Unknown',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated: new Date(repo.updated_at).toLocaleDateString()
        }));

        // Generate HTML for projects
        const projectsHtml = projects.map(project => `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p><strong>Language:</strong> ${project.language}</p>
                <p><strong>Stars:</strong> ${project.stars} | <strong>Forks:</strong> ${project.forks}</p>
                <p><strong>Last updated:</strong> ${project.updated}</p>
                <a href="${project.url}" target="_blank">View on GitHub</a>
            </div>
        `).join('');

        res.send(projectsHtml);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).send('<p>Error fetching projects. Please try again later.</p>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});