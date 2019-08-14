import dotenv from 'dotenv';
dotenv.config();
export const networks = ['github', 'google', 'facebook'];

const callbacks = networks.map(network => `https://localhost:${process.env.PORT}/${network}/callback`);

const [githubURL, googleURL, facebookURL] = callbacks;

export const GITHUB_CONFIG = {
    clientID: process.env.GITHUB_KEY,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: githubURL
}

export const GOOGLE_CONFIG = {
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: googleURL
}

export const FACEBOOK_CONFIG = {
    clientID: process.env.FACEBOOK_KEY,
    clientSecret: process.env.FACEBOOK_SECRET,
    profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
    callbackURL: facebookURL
}

