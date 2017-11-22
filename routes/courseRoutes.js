const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSubscription = require('../middlewares/requireSubscription');

const Course = mongoose.model('courses');



module.exports = app => {
  app.post('/api/course', requireLogin, requireSubscription, async (req, res) => {
    const { title, description, source, length, image } = req.body;

    const course = new Course({
      title,
      description,
      source,
      votes: 0,
      length,
      image,
      _user: req.user.id,
      dateCreated: Date.now()
    });

    try {
      await course.save();
      console.log(course.id)
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
