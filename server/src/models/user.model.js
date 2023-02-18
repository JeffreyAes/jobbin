const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    board: {
        type: [Object],
        default: []
    },
    // table: {
    //     type: [Object],
    //     // default: {wishlist: [], applied: [], interview: [], offer: [], rejected: []}
    //     default: [{
    //         list:
    //         {
    //             name: "wishlist",
    //             value: []
    //         }
    //     }, {
    //         list:
    //         {
    //             name: "applied",
    //             value: []
    //         }
    //     }, {
    //         list:
    //         {
    //             name: "interview",
    //             value: []
    //         }
    //     }, {
    //         list:
    //         {
    //             name: "offer",
    //             value: []
    //         }
    //     }, {
    //         list:
    //         {
    //             name: "denied",
    //             value: []
    //         }
    //     }]
    // }

}, { timestamps: true })


UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords do not match');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


module.exports.User = mongoose.model('User', UserSchema)