# Monorepo Microfrontend Example

This project demonstrates a basic **microfrontend setup** using **Module Federation** within a **Vite monorepo** structure.

---

## 📁 Project Structure

- **Host Application:** `apps/container`This is the main application that consumes remote components or pages.
- **Remote Application(s):** `apps/remote`
  These apps expose components/pages that can be consumed by the host or other remotes.

---

## 🔧 Vite Configuration

### ✅ Remote App (`apps/remote`)

In `vite.config.ts` or `vite.config.js`, add:

```ts
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    federation({
      name: "remote", // Unique name for the remote
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Component to expose
      },
      shared: ["react", "react-dom"], // Shared dependencies
    }),
  ],
  build: {
    target: "esnext", // Ensure compatibility across environments
  },
});
```

---

### ✅ Host App (`apps/container`)

In `vite.config.ts` or `vite.config.js`, add:

```ts
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    federation({
      name: "container", // Unique name for the host
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js", // Remote app entry URL
      },
      shared: ["react", "react-dom"], // Shared dependencies
    }),
  ],
  build: {
    target: "esnext", // Ensure compatibility across environments
  },
});
```

---

## 🧩 TypeScript Setup

To support TypeScript in the host app when importing remote modules:

1. Create a `remote.d.ts` file in the `apps/container/src` (or root `src`) directory.
2. Add the following declaration:

```ts
// remote.d.ts
declare module "remote/App"; // Match your remote expose path
```

---

## ✅ Notes

- Ensure the remote application is running before the host tries to consume it.
- Use consistent shared dependencies (`react`, `react-dom`, etc.) across apps to avoid conflicts.
- You can scale this setup by adding more remotes following the same pattern.
