const { app, BrowserWindow } = require('electron'); /* eslint-disable import/no-extraneous-dependencies */

// TODO: setup ENV vars to ignore this
// line in production.
require('electron-reload')(__dirname);

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({ height: 600, width: 800 });
  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);
