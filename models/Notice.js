const {model, Schema} = require('mongoose')

const schema = new Schema({
    title: {type: String, require: true},
    todo: [{}],
    timeInfo: {type: String, require: true},
})

module.exports = model('Notice', schema)
