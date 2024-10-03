// Validate the registration form
function validateForm() {
    // Get form elements
    var course = document.forms["registrationForm"]["course"].value;
    var studentID = document.forms["registrationForm"]["studentID"].value;
  
    // Check if course is selected
    if (course == "") {
      alert("Please select a course.");
      return false;
    }
  
    // Check if student ID is filled
    if (studentID == "") {
      alert("Please enter your Student ID.");
      return false;
    }
  
    return true;
  }
  
  // Validate Course Prerequisites
  function checkPrerequisites(selectedCourse, registeredCourses) {
    var prerequisites = {
      "course1": ["course0"], // Course 1 has Course 0 as a prerequisite
      "course2": ["course1"]  // Course 2 has Course 1 as a prerequisite
    };
  
    if (selectedCourse in prerequisites) {
      var requiredCourses = prerequisites[selectedCourse];
      for (var i = 0; i < requiredCourses.length; i++) {
        if (!registeredCourses.includes(requiredCourses[i])) {
          alert("You must complete " + requiredCourses[i] + " before registering for " + selectedCourse);
          return false;
        }
      }
    }
    return true;
  }
  
  // Example usage for prerequisite check
  var registeredCourses = ["course0"];  // List of registered courses (mock data)
  
  document.getElementById("course").addEventListener("change", function() {
    var selectedCourse = this.value;
    if (!checkPrerequisites(selectedCourse, registeredCourses)) {
      this.value = "";  // Reset the selection if prerequisites are not met
    }
  });
  