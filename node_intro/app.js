const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

// set up express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://salocode14:111@node-test.l9nfp1b.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI) // asynchronous
  .then((result) => app.listen(3000))
  .catch((err) =>  console.log(err));


// view engine
app.set('view engine', 'ejs');


// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));


// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//   // using the model to create a new instance of the Blog document in the code
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about the new blog',
//     body: 'the blog body',
//   });

//   blog.save() // async that returns a promise
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   });
// })


// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })

app.get('/single-blog', (req, res) => {
  Blog.findById('63ff16750fb48556adefa1f3')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);

//   next();
// });



app.get('/', (req, res) => {
  // res.send('<p>Home</p>');
  // res.sendFile('./views/index.html', {root: __dirname});
  // const blogs = [
  //   {title: 'Yoshi', snippet: 'Lorem ipsum dolor sit amet'},
  //   {title: 'Mario', snippet: 'Lorem ipsum dolor sit amet'},
  //   {title: 'Luigi', snippet: 'Lorem ipsum dolor sit amet'},
  // ]
  // res.render('index', {title: 'Home', blogs});

  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  // res.sendFile('./views/about.html', {root: __dirname});
  res.render('about', {title: 'About'});
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({createdAt: -1})
    .then((result) => {
      res.render('index', { title: 'All blogs', blogs: result});
    })
    .catch((err) => {
      console.log(err);
    })
});

app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'Create Blog'});
});

// 404
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', {root: __dirname});

  res.status(404).render('index', {title: '404'});
});


app.post((req, res) => {
  // Blog.
});
