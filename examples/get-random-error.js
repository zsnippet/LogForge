import LogForge from "../index.js";

const errorLogger = new LogForge();

function getRandomNumberErrorScenario() {
    const randomErrorType = Math.floor(Math.random() * 6); // Generating a random number from 0 to 5 
    try {
      switch (randomErrorType) {
        case 0:
          // Generic Error
          throw new Error("This is a generic error");
        case 1:
          // RangeError
          const invalidArray = new Array(-1);
          break;
        case 2:
          // ReferenceError
          console.log(undefinedVariable);
          break;
        case 3:
          // SyntaxError
          eval("const x =;");
          break;
        case 4:
          // TypeError
          const notAFunction = 42;
          notAFunction();
          break;
        case 5:
          // URIError
          decodeURIComponent("%");
          break;
        default:
            throw new Error("No specific error scenario");
      }
    } catch (error) {
      throw  error ;
    }
}

try {
  getRandomNumberErrorScenario();
} catch (error) {
  errorLogger.logErrorInfo(error);
} finally {
    setTimeout(() => {
      errorLogger.readErrors();
    },100);
}