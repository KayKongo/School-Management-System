const Student = require('../models/studentModel');


exports.getSingleStudent = async (req, res) => {
    try {
        const singlestudent = await Student.findById(req.params.studentId);
        res.json({ singlestudent });
    } catch (err) {
        res.json({ message: err })
    }
}

exports.createStudent = async (req, res) => {
    try {
        const student = new Student({
            ...req.body
        })
        const saveStudent = await student.save();
        res.json(saveStudent);
    } catch (err) {
        res.json({ message: err })
    }
}