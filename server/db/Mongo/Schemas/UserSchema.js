import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: 'Enter the email',
        unique: 'This email is already exist'
    },
    passwordHash: String,
    salt: String
}, {
    timestamps: true
});

UserSchema.virtual('password')
    .set(password => {
        this._plainPassword = password;
        if (password) {
            this.salt = crypto.randomBytes(128).toString('base64');
            this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
        } else {
            this.salt = undefined;
            this.passwordHash = undefined;
        }
    })
    .get(() => {
        return this._plainPassword;
    })
UserSchema.methods.checkPassword = password => {
    if (!password) {
        return false;
    }
    if (!this.passwordHash) {
        return false;
    }
    return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.passwordHash;
};

const User = mongoose.model('User', UserSchema);

export default User;