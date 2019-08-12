import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../../db/Mongo/Schemas/UserSchema';
import passport from '../passport.init';

const router = express.Router();

router.post('/join', async (ctx, next) => {
    try {
        ctx.body = await User.create(ctx.request.body);
    }
    catch (err) {
        ctx.status = 400;
        ctx.body = err;
    }
})

router.post('/login', async(ctx, next) => {
    await passport.authenticate('local', (err, user) => {
        if (user == false) {
            ctx.body = "Login failed";
        } else {
            const payload = {
                id: user.id,
                displayName: user.displayName,
                email: user.email
            };
            const token = jwt.sign(payload, jwtsecret); //здесь создается JWT
            ctx.body = {user: user.displayName, token: 'JWT ' + token};
        }
    })(ctx, next);  
});

router.get('/custom', async(ctx, next) => {
    await passport.authenticate('jwt', function (err, user) {
    if (user) {
        ctx.body = "hello " + user.displayName;
    } else {
        ctx.body = "No such user";
        console.log("err", err)
    }
    } )(ctx, next)  
});

export default router;