import { readErrors, writeError } from "./src/errorLogger.js";

// Path to the logs directory
const filePath = './logs';

// Function to generate a custom error
function generateCustomError() {
    throw new Error('This is a custom error message');
}

// Try block to catch and handle the custom error
try {
    generateCustomError();
} catch (error) {
    // Writing the custom error message to the log file
    writeError(filePath, error.message);
}

// Reading and outputting errors from the log file
readErrors(filePath);
