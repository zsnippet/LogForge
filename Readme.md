# LogForge

Forge efficient log management with LogForge. Streamline error tracking, debugging, and gain insights into your application. Powerful tools for creating, managing logs, and an intuitive dashboard for seamless integration.

## Installation

```bash
npm install logforge
```

## Importing LogForge

To import LogForge in your JavaScript or TypeScript project, you can use either the ES6 `import` syntax or the CommonJS `require` syntax:

### ES6 Import Syntax

```javascript
import LogForge from "logforge";
```

### CommonJS Require Syntax

```javascript
const LogForge = require("logforge");
```


## Initializing LogForge

### Default Initialization

```javascript
const errorLogger = new LogForge();
```

### Custom Initialization

You can pass custom file names and folder locations when creating a new instance.

```javascript
const customErrorLogger = new LogForge({
  errorLogFileName: 'errors.txt', // Custom log file name
  logsFolderName: 'error_logs',   // Custom folder for logs
});
```

## Usage

### 1. Logging Errors with `logErrorInfo`

Use the `logErrorInfo` method to log error information. Simply pass an error object as a parameter.

```javascript
// Import LogForge
import LogForge from "logforge.js";

// Initialize LogForge
const errorLogger = new LogForge();

try {
  console.log(x); // Your code that might throw an error
} catch (error) {
  // Log the error using LogForge
  errorLogger.logErrorInfo(error);
}
```

### 2. Reading Logged Errors with `readErrors`

Use the `readErrors` method to retrieve logged error information.

```javascript
errorLogger.readErrors();
```