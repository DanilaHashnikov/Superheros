import {Schema, model} from "mongoose",

const TokenSchema = Schema({
    accessToken: {type: String, required: true},
    refreshToken: {type: String, required: true},
})

export default model("Token", TokenSchema);