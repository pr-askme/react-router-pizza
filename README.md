# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Configuring ESLint for your project

1. Run npm to install relevant packages.
        ```npm I eslint vite-plugin-eslint eslint-config-react-app --save-dev```

2. Create a `.eslintrc.json` file in the root of your project. This file can be used to configure ESLint for your project. Add the following code:
        ```
        {
          "extends": "react-app"
        }
        ```

3. Also, install the ESLint extension in your VSCode.

4. Go to the `vite.config.js` file, where we can change all kinds of settings for the vite application. Add the following code:

        ```
        import { defineConfig } from "vite";
        import react from "@vitejs/plugin-react";
        import eslint from "vite-plugin-eslint";
        
        // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [react(), eslint()],
        });
        ```

Finally, you have ESLint configured in your project.

