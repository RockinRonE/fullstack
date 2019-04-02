const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

// fetches user model. User is 'model class'
const User = mongoose.model('users')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const {
        id,
        name: { givenName, familyName }
      } = profile

      try {
        const existingUser = await User.findOne({ googleId: id })
        if (existingUser) {
          return done(null, existingUser)
        }

        const user = await new User({
          googleId: id,
          firstName: givenName,
          lastName: familyName
        }).save()

        done(null, user)
      } catch (err) {
        done(err, null)
      }
    }
  )
)
