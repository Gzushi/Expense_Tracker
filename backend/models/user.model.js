import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "dev", "admin"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ username });

    if (!user) {
        throw Error("Incorrect username");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect password");
    }

    return user;
};

UserSchema.statics.signup = async function (username, password, email) {
    if (!username || !password || !email) {
        throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw Error("Must be a valid Email");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough");
    }

    const existUser = await this.findOne({ username });

    if (existUser) {
        throw Error("User already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ username, password: hash, email });
    return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
