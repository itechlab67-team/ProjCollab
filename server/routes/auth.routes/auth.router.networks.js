import { Router } from 'express';
import passport from 'passport';
import { google, facebook, github } from '../auth.controllers/auth.controller.networks';
const router = Router()

const googleAuth = passport.authenticate('google', { scope: ['profile'] })
const facebookAuth = passport.authenticate('facebook')
const githubAuth = passport.authenticate('github')

router.get('/google/callback', googleAuth, google)
router.get('/facebook/callback', facebookAuth, facebook)
router.get('/github/callback', githubAuth, github)
router.get('/google', googleAuth)
router.get('/facebook', facebookAuth)
router.get('/github', githubAuth)

export default router;