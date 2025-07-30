import { DiagnosisApp } from './components/DiagnosisApp.js';


document.addEventListener('DOMContentLoaded', function() {
    window.app = new DiagnosisApp();
    document.body.classList.add('loaded');
});
