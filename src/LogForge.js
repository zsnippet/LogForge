import fs, { promises as fsPromises } from 'fs';
import Table from 'cli-table3';
import moment from 'moment';
import { join } from 'path';
import os from 'os';

class LogForge {
  constructor(options = {}) {
    this.projectRoot = os.homedir();
    this.logsFolderPath = join(this.projectRoot, options.logsFolderName || 'logs');
    this.errorLogFilePath = options.errorLogFileName || 'errorLog.txt';
    this.fullLogFilePath = join(this.logsFolderPath, this.errorLogFilePath);
    this.initPFolder = (async () => {
      try {
        await this.createFolderIfNotExists();
      } catch (error) {
        console.error('Error While creating Folder:', error);
      }
    })();
    this.initPFile = (async () => {
      try {
        await this.createFileIfNotExists();
      } catch (error) {
        console.error('Error While creating File:', error);
      }
    })();  

  }

  async createFolderIfNotExists() {
    try {
      await fsPromises.access(this.logsFolderPath);
    } catch (error) {
      await fsPromises.mkdir(this.logsFolderPath, { recursive: true });
    }
  }

  async createFileIfNotExists() {
    try {
      await this.initPFolder;
      await fsPromises.access(this.fullLogFilePath);
    } catch (error) {
        await fsPromises.writeFile(this.fullLogFilePath, '');
    }
  }

  async writeError(error) {
    try {
      await this.initPFolder;
      await this.initPFile;
      const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
      const formattedError = `${timestamp},${error.type},${error.lineNumber},${error.columnNumber},${error.functionName},${error.filePath},${error.message}\n`;
      await fsPromises.appendFile(this.fullLogFilePath, formattedError);
    } 
    catch (error) {
      console.error('Error appending to file:', error);
    }
  }

  async readErrors() {
    try {
      await this.initPFolder;
      await this.initPFile;
      const data = fs.readFileSync(this.fullLogFilePath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== '');

      const table = new Table({
        head: ['Create Date', 'Type', 'Line number', 'Column number', 'Function Name', 'File path', 'Error message'],
        colWidths: [22, 20, 15, 15, 20, 20, 30],
        style: { head: ['cyan'] },
      });

      lines.forEach((line) => {
        // Split the line into its components
        const [timestamp, type, lineNumber, columnNumber, functionName, filePath,  message] = line.split(',');

        // Push each component as a row to the table
        table.push([timestamp, type, lineNumber, columnNumber, functionName, filePath, message]);
      });

      console.log(table.toString());
    } 
    catch (error) {
      console.error('Error reading file:', error);
    }
  }

   logErrorInfo(error) {
    try {
      
      const errorInfo = {
        type: error.constructor.name,
        message: error.message,
      };
  
      if (error.stack) {
        const stackLines = error.stack.split('\n');
        const pattern = /at\s+.+?:(\d+):(\d+)/;
        for (let i = 1; i < stackLines.length; i++) {
          const line = stackLines[i];
  
          if (pattern.test(line)) {
            const sourceInfo = line.match(/at\s+(.+?)\s+\((file:\/\/\/.+):(\d+):(\d+)\)/);
            if (sourceInfo) {
              const [, functionName, filePath, lineNumber, columnNumber] = sourceInfo;
              errorInfo.functionName =  functionName;
              errorInfo.filePath = decodeURI(filePath);
              errorInfo.lineNumber = lineNumber;
              errorInfo.columnNumber = columnNumber;
              break;
            } else {
              //console.log('No match found.');// commented on live
            }
          }
        }
      }
      
     this.writeError(errorInfo);

    } catch (error) {
      console.error('Error in logErrorInfo:', error);
    } 
  }
}

export default LogForge;
