import { registerRootComponent } from "expo";
import { App } from "./App";
import { AccessProvider } from "./context/AccessContext";

function MainContainer() {
  return (
    <AccessProvider>
      <App />
    </AccessProvider>
  );
}

export default registerRootComponent(MainContainer);