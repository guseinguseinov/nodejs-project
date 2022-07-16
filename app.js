import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'));
});

app.get('/blog-single', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'blog-single.html'));
});

app.get('/users/:userID/movies/:moviesID', (req, res) => {
    res.send(
        `
        <h1> User name : ${req.params.userID}</h1>
        <h1> Movie name : ${req.params.moviesID}</h1>
        `
    );
});

app.listen(port, () => {
    console.log('Server starts at http://localhost:' + port);
});