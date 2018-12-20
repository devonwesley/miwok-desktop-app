const path = require('path');
const { app, BrowserWindow } = require('electron');

// TODO: setup ENV vars to ignore this
// line in production.
if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname);
}

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({ height: 600, width: 800 });
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.loadFile(path.join(__dirname, './app/index.html'));
}

app.on('ready', createWindow);
