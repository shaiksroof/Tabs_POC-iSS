import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/store";
import DummyPage from "@/pages/DummyPage";
import App from "@/App";

test("renders DummyPage when navigating to /dummy", () => {
    const router = createMemoryRouter(
        [
            { path: "/", element: <div>Home</div> },
            { path: "/dummy", element: <DummyPage /> },
        ],
        { initialEntries: ["/dummy"] }
    );

    render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
screen.debug(undefined, Infinity)
    expect(screen.getByText(/Dummy Page/i)).toBeInTheDocument();
});