const router = require('koa-router')();
const keys = require('../conf/keys');
const passport  = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy());
passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: 'http://localhost:3001/index/login/callback/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {console.log(accessToken)}));

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

module.exports = router
