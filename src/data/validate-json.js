const resumeSchema = require("@jsonresume/schema");
const jsonResume = require("./resume.json"); 

resumeSchema.validate(
  jsonResume,
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  },
);
