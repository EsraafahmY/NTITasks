const studentModel = require("../models/student.model");

allStudents = async (req, res) => {
  try {
    const allStudents = await studentModel.find();
    res.status(200).send({
      apiStatus: true,
      message: "done",
      data: allStudents,
    });
  } catch (error) {
    res.status(500).send({
      apiStatus: false,
      message: "Error",
      data: error,
    });
  }
};

addStudent = async (req, res) => {
  try {
    let studentData = new studentModel(req.body);
    let allStudents= await studentModel.find();
    const id =
      allStudents.length === 0
        ? 0
        : allStudents[allStudents.length - 1].id + 1;
    studentData.id = id;
    await studentData.save();
    res.status(200).send({
      apiStatus: true,
      message: "done",
      data: studentData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      apiStatus: false,
      message: "can't save",
      data: error,
    });
  }
};

getOneStudent = async (req, res) => {
  try {
    const student = await studentModel.find({ id: req.params.id });
    if (!student) {
      res.status(404).send({
        apiStatus: true,
        message: "not found",
        data: null,
      });
    }
    res.status(200).send({
      apiStatus: true,
      message: "Student data retrieved",
      data: student,
    });
  } catch (error) {
    res.status(500).send({
      apiStatus: false,
      message: "Can't get student data",
      data: error,
    });
  }
};

deleteStudent = async (req, res) => {
  try {
    let student = await studentModel.findOneAndDelete({ id: req.params.id });
    if (!student) {
      res.status(404).send({
        apiStatus: true,
        message: "Student not found",
        data: null,
      });
    }
    res.status(200).send({
      apiStatus: true,
      message: "Student deleted",
      data: student,
    });
  } catch (error) {
    res.status(500).send({
      apiStatus: false,
      message: "Can't delete the student",
      data: error,
    });
  }
};

editStudent = async (req, res) => {
  const updatedData = ["email", "password"];
  const updates = Object.keys(req.body);
  validToUpdate = updates.every((update) => updatedData.includes(update));
  if (!validToUpdate)
    res.status(500).send({
      apiStatus: false,
      message: "These data can't be modified",
      data: null,
    });
  try {
    const student = await studentModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { runValidators: true, new: true }
    );
    if (!student) {
      res.status(404).send({
        apiStatus: true,
        message: "Student not found",
        data: null,
      });
    }
    student.save();
    res.status(200).send({
      apiStatus: true,
      message: "updated",
      data: student,
    });
  } catch (error) {
    res.status(500).send({
      apiStatus: true,
      message: "Student not updated",
      data: error,
    });
  }
};

getStudentCourses = async (req, res) => {
  try {
    const student = await studentModel.findOne({ id: req.params.id });
    if (!student) {
      res.status(404).send({
        apiStatus: true,
        message: "not found",
        data: null,
      });
    }
    res.status(200).send({
      apiStatus: true,
      message: "Courses retrieved",
      data: student.courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      apiStatus: false,
      message: "error",
      data: error,
    });
  }
};

addNewCourseToStudent = async (req, res) => {
  try {
    let student = await studentModel.findOne({ id: req.params.id });
    let courses = req.body.courses;
    courses.forEach((course) => student.courses.push(course));
    res.status(200).send({
      apiStatus: true,
      message: "saved successfully",
      data: student,
    });
    student.save();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      apiStatus: false,
      message: "Not saved",
      data: error,
    });
  }
};

deleteCourseForOneStudent = async (req, res) => {
  try {
    let student = await studentModel.findOne({ id: req.params.id });
    let course = await student.courses.findIndex((course, index) => {
      if (course.toLowerCase() === req.body.course.toLowerCase()) return index;
    });
    await student.courses.splice(course, 1);
    student.save();
    res.send("done");
  } catch (error) {
    console.log(error);
    res.send("error");
  }
};

module.exports = {
    getAllStudents,
  addStudent,
  getOneStudent,
  deleteStudent,
  editStudent,
  addNewCourseToStudent,
  getStudentCourses,
  deleteCourseForOneStudent,
};