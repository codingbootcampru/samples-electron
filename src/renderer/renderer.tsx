import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as electronLog from 'electron-log';
import { LOG_LEVEL } from '../constants/app';
import Root from './root';

// Set log level for the renderer process
electronLog.transports.file.level = LOG_LEVEL;

ReactDOM.render(<Root />, document.getElementById('root'));

// const self = remote.getCurrentWindow();

// NOTIFICATIONS
// setTimeout(() => {
//     let myNotification = new Notification('Message from RENDERER', {
//         body: 'Test notification',
//         icon: IS_MAC ? null : './images/icon.png'
//     });

//     myNotification.onclick = () => {
//         console.log('RENDERER notification clicked');
//     };
// }, 2000);
