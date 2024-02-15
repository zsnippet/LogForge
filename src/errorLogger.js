import fs from 'fs';
import moment from 'moment';

function writeError(filePath, message) {
  try {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    const formattedError = `${timestamp} - ${message}\n`;

    if (!fs.existsSync(filePath + '/errorLog.txt')) {
      const header = 'Create Date         - Error message\n';
      fs.writeFileSync(filePath + '/errorLog.txt', header);
    }

    fs.appendFileSync(filePath+'/errorLog.txt', formattedError);
  } catch (error) {
    console.error('Error appending to file:', error);
  }
}

function readErrors(filePath) {
  try {
    const data = fs.readFileSync(filePath+'/errorLog.txt', 'utf8');
    console.log('------------------\nError log content:\n------------------');
    console.log (data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

export default writeError;
export { writeError, readErrors };


