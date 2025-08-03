import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "@/components/button";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <h1>Curriculum Builder</h1>
      <Button />
   </StrictMode>
);
