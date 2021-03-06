import Phaser from 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

// import scenes
import PreloadScene from './phaser/preload-scene';
import TitleScene from './phaser/title-scene';
import LeaderboardScene from './phaser/leaderboard-scene';
import LoginScene from './phaser/login-scene';
import playDinoGame from './phaser/dino-game';
import CreditsScene from './phaser/credits-scene';

const root = ReactDOM.createRoot(document.getElementById('root'));
const config = {
    parent: root,
    type: Phaser.AUTO,
    transparent: true,
    scale: {
        mode: Phaser.Scale.FIT,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: RexUIPlugin,
            mapping: 'rexUI',
        }]
    },
    dom: {
        createContainer: true
    },
    scene: [PreloadScene, LeaderboardScene, CreditsScene,LoginScene, TitleScene, playDinoGame],
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
