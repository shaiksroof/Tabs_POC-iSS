import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, useSearchParams } from "react-router-dom";
import configureStore from "redux-mock-store";
import Tabs from "@/components/Tabs";
import { setActiveTab } from "@/store/tabsSlice";

const mockStore = configureStore([]);

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useSearchParams: vi.fn(),
  };
});

vi.mock("../store/tabsSlice", () => ({
  setActiveTab: vi.fn(),
}));

describe("Tabs component", () => {
  let store;
  let mockSetSearchParams;

  beforeEach(() => {
    store = mockStore({
      tabs: {
        tabs: [
          { label: "Tab 1", description: "Content 1" },
          { label: "Tab 2", description: "Content 2" },
          { label: "Tab 3", description: "Content 3" },
        ],
        activeTab: 0,
      },
    });

    store.dispatch = vi.fn();

    mockSetSearchParams = vi.fn();
    useSearchParams.mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);
  });

  it("should render tabs correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Tabs />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("button", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tab 2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tab 3" })).toBeInTheDocument();
  });

  it("should display content for the active tab", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Tabs />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("should update active tab on button click", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Tabs />
        </MemoryRouter>
      </Provider>
    );

    const tabButton = screen.getByText("Tab 2");
    fireEvent.click(tabButton);

    expect(store.dispatch).toHaveBeenCalledWith(setActiveTab(1));
    expect(mockSetSearchParams).toHaveBeenCalledWith({ tab: 1 });
  });

  it("should set active tab based on URL query parameter", () => {
    useSearchParams.mockReturnValue([
      new URLSearchParams("?tab=2"),
      mockSetSearchParams,
    ]);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Tabs />
        </MemoryRouter>
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(setActiveTab(2));
  });
});
