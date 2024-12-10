import express from 'express';
import path from 'path';
import ejs from 'ejs';
const app = express();
const PORT = 3000;

app.use(express.static(path.join(process.cwd(), 'public')));

app.set('view engine', 'html');
app.engine("html", ejs.renderFile);
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/catalogue', (req, res)=>{
    res.render('catalog')
});

app.get('/services', (req, res)=>{
    res.render('services')
});

app.get('/login', (req, res)=>{
    res.render('login');
});

app.get('/signup', (req, res)=>{
    res.render('signup');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
