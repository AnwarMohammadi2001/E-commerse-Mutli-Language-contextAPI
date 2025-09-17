import React from "react";
import AppRoutes from "./routes/AppRoutes";
import PageWrapper from "./components/PageWrapper";

const App = () => {
  return (
    <div>
      <PageWrapper>
        {" "}
        <AppRoutes />
      </PageWrapper>
    </div>
  );
};

export default App;
