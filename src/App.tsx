import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CompRoutes from "./routes/Routes";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <CompRoutes/>
    </Provider>
  );
};

export default App;
