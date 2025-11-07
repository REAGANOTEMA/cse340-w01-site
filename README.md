## Getting Started

This guide will help you quickly get up and running with your Node.js backend application, complete with pages, backend logic, and a PostgreSQL database.

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Git** (for version control)
- **VS Code** (or your preferred code editor)

---

## Package Management

Node.js projects use packages to add functionality. To manage these packages, we use a **package manager**. Common options are:

- NPM (Node Package Manager)
- Yarn
- PNPM

We use **PNPM** because:

1. Packages are stored locally once and linked to multiple projects, saving space.
2. It improves performance during project builds.

> Install or activate PNPM if you haven’t already: [https://pnpm.io/](https://pnpm.io/)

---

## Install Project Dependencies

1. Open the project folder in VS Code.
2. Open a terminal in VS Code (`Terminal > New Terminal` or `Ctrl + ``).
3. Run the following command:

```bash
pnpm install
```

- This will read the `package.json` file and install all required dependencies.
- A `node_modules` folder will be created to store the packages.
- A `pnpm-lock.yaml` file will also be created. **Do not modify this file manually.**

---

## Start the Express Server

1. Ensure your terminal is open in the project folder.
2. Run the development server:

```bash
pnpm run dev
```

3. If successful, you should see a message similar to:

```
Server running at http://localhost:5500
```

4. Open `package.json` and notice the `"scripts"` section. The `"dev"` script runs `nodemon server.js`, which is what you just executed.

5. Open `server.js` and note the `Port` and `Host` variables near the bottom. These values are stored in the `.env` file and determine where your server listens locally.

---

## Move Your Demo File

If you have a simple HTML page from earlier:

1. Move it to the `public` folder in your project.
2. Make note of the filename for testing.

---

## Test in a Browser

1. Ensure the server is running (`pnpm run dev`).
2. Open a browser and navigate to:

```
http://localhost:5500
```

3. To view your HTML file, append its name to the URL:

```
http://localhost:5500/yourfile.html
```

You should see your page load successfully.

---

### Notes

- All static files (HTML, CSS, images) should reside in the `public` folder.
- The `.env` file should never be committed to GitHub—it contains sensitive information.
- If you encounter a "port already in use" error, check which process is using the port and stop it, e.g., using:

```powershell
netstat -ano | findstr :5500
taskkill /PID <PID> /F
```

---

This README is ready to be pushed to GitHub and will provide clear setup instructions for anyone cloning your repository.
