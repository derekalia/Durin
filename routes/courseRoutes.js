const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSubscription = require('../middlewares/requireSubscription');

const Course = mongoose.model('courses');

module.exports = app => {
  app.post('/api/course_submit', requireLogin, requireSubscription, async (req, res) => {
    const { title, description, video, length, author, content,image } = req.body;

    const course = new Course({
      title,
      author,
      description,
      content,
      source:video,
      votes: 0,
      length,
      image,
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
};
