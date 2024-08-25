import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IngenuityPage } from "@/pages/ingenuity";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ingenuity" Component={IngenuityPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
