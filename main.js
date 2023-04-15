const {app, BrowserWindow, Menu, ipcMain} = require('electron')
const url = require('url')
const path = require('path');

const options = true;

Menu.setApplicationMenu(false)

function createWindow () { 
    if(options == true){
        const mainWindow = new BrowserWindow({
            show: false,
            height: 440,
            width: 753,
            resizable: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            },
            frame: false,
            maximizable: false,
            minimizable: false,
            title: 'HCR',
        });
        mainWindow.loadURL('http://localhost:4200')
        mainWindow.once('ready-to-show', () => {
            mainWindow.show();
        });
    }else{
        const mainWindow = new BrowserWindow({
            show: false,
            height: 440,
            width: 753,
            resizable: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            },
            frame: false,
            maximizable: false,
            minimizable: false,
            title: 'HCR',
        });
        mainWindow.loadURL(url.format({pathname: path.join(__dirname, `/dist/hcr-updater/index.html`),protocol: "file:",slashes: true}));
        mainWindow.once('ready-to-show', () => {
            mainWindow.show();
        });
    }
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.allowRendererProcessReuse = false