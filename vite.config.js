import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 🔁 Hier den Repo-Namen eintragen
export default defineConfig({
    plugins: [react()],
    base: '/freshprinceofberlin/', // z. B. dein GitHub-Repo-Name
});