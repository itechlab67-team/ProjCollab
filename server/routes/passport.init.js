import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as GithubStrategy } from 'passport-github';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Strategy as FacebookStrategy } from 'passport-facebook';

// import { JwtStrategy, ExtractJwt } from 'passport-jwt';
// import JwtStrategy from 'passport-jwt'; 
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

import User from '../db/Mongo/Schemas/UserSchema';

import { GOOGLE_CONFIG, FACEBOOK_CONFIG, GITHUB_CONFIG } from '../config';

const passportInit = () => {
    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((obj, cb) => cb(null, obj));
    const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile);
    
    passport.use(new GoogleStrategy(GOOGLE_CONFIG, callback));
    passport.use(new FacebookStrategy(FACEBOOK_CONFIG, callback));
    passport.use(new GithubStrategy(GITHUB_CONFIG, callback));
    
    passport.use(new LocalStrategy({
        usernameField: 'email',
    }, (email, password, done) => {
        User.findOne({
            email: email
        }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    return done(err);
                }
                if (!isMatch) {
                    return done(null, false);
                }
                return done(null, user);
            });
        });
    }));
    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: process.env.JWT
    };
    passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
        User.findById(payload.id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
    }));
}

export default passportInit;