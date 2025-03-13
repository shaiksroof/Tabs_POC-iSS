import { createSlice } from "@reduxjs/toolkit";

/**
 * A slice for managing tabs state in a Redux store.
 * 
 * @namespace tabsSlice
 * @property {Object} initialState - The initial state of the tabs slice.
 * @property {Array} initialState.tabs - An array of tab objects.
 * @property {number} initialState.activeTab - The index of the currently active tab.
 * @property {Object} reducers - The reducers for the tabs slice.
 * @property {Function} reducers.setTabs - A reducer to set the tabs array.
 * @property {Function} reducers.setActiveTab - A reducer to set the active tab index.
 * 
 * @function setTabs
 * @param {Object} state - The current state of the tabs slice.
 * @param {Object} action - The action object.
 * @param {Array} action.payload - The new tabs array to set in the state.
 * 
 * @function setActiveTab
 * @param {Object} state - The current state of the tabs slice.
 * @param {Object} action - The action object.
 * @param {number} action.payload - The new active tab index to set in the state.
 */
const tabsSlice = createSlice({
  name: "tabs",
  initialState: { tabs: [], activeTab: 0 },
  reducers: {
    setTabs: (state, action) => {
      state.tabs = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setTabs, setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
