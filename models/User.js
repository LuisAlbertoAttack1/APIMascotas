const { model, Schema} = require("mongoose");
const UserSchema = new Schema({
    //CONTENIDO DE API
    Usuario: {
        type: String,
        require: true,
        unique: true
    },
    pasword: {
        type: String,
        require: true

    }

});
module.exports = model("User", UserSchema)