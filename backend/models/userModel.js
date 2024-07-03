import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requieed: true,
    },
    email: {
        type: String,
        requieed: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User",userSchema);

export default User;