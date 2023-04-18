import "./App.css";
import Body from "./components/Body";
import Formik from "./components/Formik";
import { Provider } from "react-redux";
import store from "./containers/store";
import MyTable from "./components/MyTable";
import MyForm from "./components/MyForm";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Outlet />
      </Provider>
    </div>
  );
}

export const approute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MyForm />,
      },
      {
        path: "/table",
        element: <MyTable />,
      },{
        path:"/formik",
        element:<Formik/>
      },
      {
      path:"/body",
      element:<Body/>
      }
    ],
  },
]);

export default App;
