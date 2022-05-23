import {Schema, model} from 'mongoose';

const UserSchema = Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: true},
    activationLink: {type: String}
})

export default model("User", UserSchema);