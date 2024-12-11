import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import {createUser} from './signup.js';
import { signInUser } from './login.js';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set('view engine', 'html');
app.engine("html", ejs.renderFile);
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/catalogue', (req, res)=>{
    res.render('catalogue')
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

app.get('/newpet', (req, res)=>{
    res.render('addnewpet.html');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/signup', async (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, 
        confirmPassword: req.body.confirmPassword
    };
  
    try {
      // Call the createUser function to create the user in Firebase
      await createUser(data.email, data.password);
      res.redirect('/login'); 
    } catch (err) {
      res.send('Error: ' + err.message);
    }
  });

app.post('/login', async(req, res)=> {
    const data = {
        email: req.body.email,
        password: req.body.password
    };

    try {
        await signInUser(data.email, data.password);
        res.redirect('/');
    } catch(err) {
        res.send('Error: '+ err.message);
    }
});