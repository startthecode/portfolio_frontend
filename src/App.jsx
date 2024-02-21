import { SiteLoadLoader } from "./interface/ui/SiteLoadLoader";
import { AllRoutes } from "./routes/AllRoutes";
import { Cursor } from "./interface/ui/Cursor";
import { useScreenSize } from "./hooks/useScreenSize";
import { useState } from "react";

function App() {
  let [showCursor, setShowCursor] = useState(useScreenSize("lg"));

  return (
    <>
      <AllRoutes />
      {showCursor && <Cursor />}
      <SiteLoadLoader />
    </>
  );
}

export default App;
