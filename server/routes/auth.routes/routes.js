import express from 'express';
import jwt from 'jwt-simple';
import passport from 'passport';
import User from '../../db/Mongo/Schemas/UserSchema';
import sendEmail from '../auth.controllers/nodemailer';
const router = express.Router();

const tokenForUser = user =>{
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT);
}

router.post('/join', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !passport) {
        return res.status(422).send({ err: 'You must provide email and password' });
    }
    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { 
            return next(err); 
        }
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }
        const user = new User({
            email: email,
            password: password
        });
    
        user.save((err) => {
            if (err) { 
                return next(err); 
            }
            sendEmail(user.email);
            res.json({ token: tokenForUser(user) });
        });
    });
})

router.post('/login', passport.authenticate('local', { /* failureMessage: 'Password is invalid', */ /* failureRedirect: 'http://localhost:3000/login' */ }), (req, res) => {
    res.status(200).send({ token: tokenForUser(req.user) });
}); 
/* 
router.get('/custom', async(ctx, next) => {
    await passport.authenticate('jwt', function (err, user) {
    if (user) {
        ctx.body = "hello " + user.displayName;
    } else {
        ctx.body = "No such user";
        console.log("err", err)
    }
    } )(ctx, next)  
}); */

export default router;