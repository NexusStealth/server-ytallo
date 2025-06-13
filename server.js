const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const firebaseConfig = require('./config/firebase-admin.json');
const iaRoute = require('./routes/ia');
const uploadRoute = require('./routes/upload');
const deployRoute = require('./routes/deploy');

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/upload', uploadRoute);
app.use('/deploy', deployRoute);
app.use('/ia', iaRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
