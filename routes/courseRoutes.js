const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSubscription = require('../middlewares/requireSubscription');

const Course = mongoose.model('courses');

module.exports = app => {
  app.post('/api/course_submit', requireLogin, requireSubscription, async (req, res) => {
    const { title, description, video, length, author, content, image, linkTitle, free, preview } = req.body;
    console.log('this is req ', req.body);
    const course = new Course({
      title,
      linkTitle,
      author,
      description,
      content,
      source: video,
      votes: 0,
      length,
      image,
      free,
      preview,
      _user: req.user.id,
      dateCreated: Date.now()
    });
    try {
      await course.save();
      console.log(course.id);
      res.send(course.id);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/courses', async (req, res) => {
    Course.find({}, function(err, courses) {
      var userMap = {};
      res.send(courses);
    });
  });

  app.get('/api/course_details_from_linkTitle/:id', async (req, res) => {
    const course = await Course.findOne({ linkTitle: req.params.id });
    res.send(course);
  });

  app.get('/api/course_details', async (req, res) => {
    const course = await Course.findOne({ _id: req.query.id });
    res.send(course);
  });
  
  app.get('/api/get_video/:id', requireLogin, requireSubscription, async (req, res) => {
    const course = await Course.findOne({ linkTitle: req.params.id });
    res.send(course);
  });
};
