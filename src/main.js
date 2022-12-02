import { createApp } from 'vue';
import App from './App.vue';

// carica i JS di Bootstrap. 
// Solo in questo caso l'import va fatto in main.js
// Per funziona BS richiede anche la libreria "@popperjs/core" che deve essere installa tramite npm install
import "bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).mount('#app');