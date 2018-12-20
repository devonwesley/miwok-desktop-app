const { app, BrowserWindow } = require('electron');

// TODO: setup ENV vars to ignore this
// line in production.
require('electron-reload')(__dirname);

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({ height: 600, width: 800 });
  mainWindow.loadFile(`file://${__dirname}/app/index.html`);
}

app.on('ready', createWindow);
