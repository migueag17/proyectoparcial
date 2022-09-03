const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    season:{
        type: Number,
        require: true
    },
    autors:{
        type: Array,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('MovieSchema', movieSchema)