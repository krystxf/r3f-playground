import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IngenuityPage } from "@/pages/ingenuity";
import { LandingPage } from "@/pages/landing-page";
import { pages } from "@/utils";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages.ingenuity} Component={IngenuityPage} />
        <Route path="*" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
