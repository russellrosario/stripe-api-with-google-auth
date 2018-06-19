const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

const AddUser = mongoose.model('addUsers')

module.exports = app => {
  app.get('/api/addUsers', requireLogin, async (req, res) => {
    const addUsers = await AddUser.find({ _user: req.user.id }).select({
      email: false
    })

    res.send(addUsers)
  })

  app.post('/api/addUsers', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, email } = req.body

    const addUser = new AddUser({
      title,
      subject,
      body,
      email,
      _user: req.user.id,
      dateSent: Date.now()
    })

    try {
      await addUser.save()
      const user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
