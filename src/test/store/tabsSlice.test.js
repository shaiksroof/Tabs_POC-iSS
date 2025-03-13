import { configureStore } from "@reduxjs/toolkit";
import tabsReducer, { setTabs, setActiveTab } from "../../store/tabsSlice";

describe("tabsSlice", () => {
    let store;

    beforeEach(() => {
        store = configureStore({ reducer: { tabs: tabsReducer } });
    });

    test("should return the initial state", () => {
        const state = store.getState().tabs;
        expect(state).toEqual({ tabs: [], activeTab: 0 });
    });

    test("should handle setTabs", () => {
        store.dispatch(setTabs([{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }]));
        const state = store.getState().tabs;
        expect(state.tabs).toEqual([{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }]);
    });

    test("should handle setActiveTab", () => {
        store.dispatch(setActiveTab(1));
        const state = store.getState().tabs;
        expect(state.activeTab).toBe(1);
    });
});