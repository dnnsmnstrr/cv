const resumeSchema = require("@jsonresume/schema");
const fetch = require("node-fetch");

const GIST_URL = process.env.NEXT_PUBLIC_GIST_URL || "";

async function validateResume() {
  try {
    const response = await fetch(GIST_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch resume data");
    }
    const jsonResume = await response.json();

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
      }
    );
  } catch (error) {
    console.error("Error fetching or validating resume data:", error);
  }
}

validateResume();
