const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: Date,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    optionalNumber: {
        type: String,
        require: false
    },
    level: {
        type: Number,
        require: true,
    },
    department: {
        type: String,
        require: true,
    }

});

module.exports = Student = mongoose.model("student", studentSchema);1