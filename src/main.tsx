import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Providers from "./providers/PrivyProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { I18nProvider } from "./i18n.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Providers> */}
    <GoogleOAuthProvider clientId="65861690395-3t7mkbqa0r69jen7reoc6t61s5locvpb.apps.googleusercontent.com">
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </GoogleOAuthProvider>
    {/* </Providers> */}
  </StrictMode>
);
