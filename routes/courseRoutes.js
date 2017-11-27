const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSubscription = require('../middlewares/requireSubscription');

const Course = mongoose.model('courses');

module.exports = app => {
  app.post('/api/course_submit', requireLogin, requireSubscription, async (req, res) => {
    const { title, description, video, length, author, content, image, linkTitle } = req.body;

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
    // Course.findById(id).then(user => {
    //   done(null, user);
    // });
    // console.log('here')
    // Course.find({}).then(courses => {
    //   var courseMap = {};

    //   courses.forEach(function(course) {
    //     courseMap[course._id] = course;
    //   });

    //   res.send(courseMap);
    // });

    Course.find({}, function(err, courses) {
      var userMap = {};
      // courses.forEach(function(user) {
      //   userMap[user._id] = user;
      // });

      res.send(courses);
    });
  });

  app.get('/api/course_details/:id', async (req, res) => {

    // console.log('req ', req.params.id);
    const course = await Course.findOne({ linkTitle: req.params.id });
    // console.log('course ', course);
    // Course.find({}, function(err, courses) {

      res.send(course);
    // });
  });
};
