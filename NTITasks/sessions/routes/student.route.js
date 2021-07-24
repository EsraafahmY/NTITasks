const studentController = require("../controller/student.controller");
const express = require("express");
const router = express.Router();

router.get("/students", studentController.getAllStudents);
router.post("/students/add", studentController.addStudent);
router.get("/students/:id", studentController.getOneStudent);
router.delete("/students/:id/delete", studentController.deleteStudent);
router.patch("/students/:id/edit", studentController.editStudent);
router.patch("/students/:id/addCourses", studentController.addNewCourseToStudent);
router.patch(
  "/students/:id/deleteCourse",
  studentController.deleteCourseForOneStudent
);
router.get("/students/:id/courses", studentController.getStudentCourses);

module.exports = router;