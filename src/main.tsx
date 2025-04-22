import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./providers/PrivyProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { I18nProvider } from "./i18n.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </Providers>
  </StrictMode>
);
