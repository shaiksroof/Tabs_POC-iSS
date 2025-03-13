import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import TabsPage from "./pages/TabsPage";
import DummyPage from "./pages/DummyPage";

const router = createBrowserRouter([
  { path: "/", element: <TabsPage /> },
  { path: "/dummy", element: <DummyPage /> },
]);

/**
 * The main application component that sets up the Redux store provider
 * and the React Router provider.
 *
 * @component
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
