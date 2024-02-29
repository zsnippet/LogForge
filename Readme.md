# LogForge

Forge efficient log management with LogForge. Streamline error tracking, debugging, and gain insights into your application. Powerful tools for creating, managing logs, and an intuitive dashboard for seamless integration.

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/zsnippet/LogForge.git
   ```

2. Navigate to the project directory:
   ```bash
   cd LogForge
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run:
   ```bash
   node index.js
   ```

## Importing LogForge


#### ESM (ECMAScript Modules) Pattern

To use LogForge in your project using ESM, import it into your JavaScript file:

```javascript
import LogForge from "./src/LogForge.js";
```

<details>
  <summary>CommonJS Pattern</summary><br>

  If you are using CommonJS, you can import LogForge like this:

  ```javascript
  const LogForge = require("./src/LogForge.js");
  ```

</details>




## Initializing LogForge

To use LogForge for error tracking and logging, you can initialize it with or without custom configuration options. Below are examples of how to initialize LogForge.

### Default Initialization

```javascript
const errorLogger = new LogForge();
```

### Custom Initialization

```javascript
const customErrorLogger = new LogForge({
  errorLogFileName: 'errors.txt',
  logsFolderName: 'error_logs',
});
```

## Configuration Options

LogForge provides the following configuration options:

### 1. Error Log File Name

- **Option Name**: `errorLogFileName`
- **Description**: Sets the name of the file that stores the errors.
- **Default Value**: `errorLog.txt`

### 2. Logs Folder Name

- **Option Name**: `logsFolderName`
- **Description**: Sets the name of the folder where logs are stored.
- **Default Value**: `logs`

## Logging and Handling Errors with LogForge

To enhance error handling and gain insights into your application, LogForge provides two key methods:

### 1. Logging Errors with `logErrorInfo`

You can use the `logErrorInfo` method to log error information. Simply pass the error object as a parameter.

```javascript
try {
  // Your code that may throw an error
} catch (error) {
  // Log the error using LogForge
  errorLogger.logErrorInfo(error);
}
```

### 2. Reading Logged Errors with `readErrors`

After logging errors, you can use the `readErrors` method to retrieve and handle the logged error information.

```javascript
errorLogger.readErrors();
```


## Example Usage in `index.js`

For example purposes, a sample `index.js` file is provided. This file demonstrates basic usage of LogForge:

```javascript
// Import LogForge
import LogForge from "./src/LogForge.js";

// Initialize LogForge
const errorLogger = new LogForge();

// Example: Logging an error
try {
  // Your code that may throw an error
} catch (error) {
  // Log the error using LogForge
  errorLogger.logErrorInfo(error);
}
```

## Running the Example

To run the provided example in `index.js`, open a terminal or command prompt, navigate to the project directory, and use the following command:

```bash
node index.js
```

This command will execute the `index.js` file, demonstrating basic error tracking and logging functionalities using LogForge.