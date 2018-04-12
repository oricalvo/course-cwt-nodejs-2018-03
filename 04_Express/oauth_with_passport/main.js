const express = require("express");
const GoogleStrategy  = require('passport-google-oauth2').Strategy;
const session = require('express-session');
const passport = require('passport');
const path = require("path");

const GOOGLE_CLIENT_ID = "167808001834-7jqmtmbmei79jguthcb77qsidr3u25nh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "6Z2Q8wpDd1OD_spv8wYSAV6i";
const app = express();

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.use( passport.initialize());
app.use( passport.session());

app.use( session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.get('/auth/google', passport.authenticate('google', { scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        // successRedirect: '/authComplete.html',
        failureRedirect: '/login'
    }), function(req, res) {
        console.log(req.user);
        res.redirect("/authComplete.html?email=" + req.user.email);
    });

passport.use(new GoogleStrategy({
        clientID:     GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        //NOTE :
        //Carefull ! and avoid usage of Private IP, otherwise you will get the device_id device_name issue for Private IP during authentication
        //The workaround is to set up thru the google cloud console a fully qualified domain name such as http://mydomain:3000/
        //then edit your /etc/hosts local file to point on your private IP.
        //Also both sign-in button + callbackURL has to be share the same url, otherwise two cookies will be created and lead to lost your session
        //if you use it.
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // To keep the example simple, the user's Google profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Google account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));

app.use(express.static(path.resolve(__dirname)));

app.listen(3000, function() {
    console.log("Server is running");
});
