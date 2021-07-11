const studentController = require("../controllers/student.controller");
const express = require("express");
const router = express.Router();

router.get("/students", studentController.allStudents);
router.post("/students/add", studentController.addStudent);
router.get("/students/:id", studentController.getSingleStudent);
router.delete("/students/:id/delete", studentController.deleteStudent);
router.patch("/students/:id/edit", studentController.editStudentData);
router.patch("/students/:id/addCourses", studentController.addCourseToStudent);
router.patch(
  "/students/:id/deleteCourse",
  studentController.deleteCourseFromStudent
);
router.get("/students/:id/courses", studentController.getStudentCourses);

module.exports = router;