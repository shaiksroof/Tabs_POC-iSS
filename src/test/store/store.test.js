import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import store from "@/store/store";
import tabsReducer from "@/store/tabsSlice";
import { rootSaga } from "@/store/sagas";

describe("Redux Store", () => {
    it("should configure the store with tabs reducer and saga middleware", () => {
        const sagaMiddleware = createSagaMiddleware();
        const testStore = configureStore({
            reducer: { tabs: tabsReducer },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(sagaMiddleware),
        });

        expect(store.getState()).toEqual(testStore.getState());
    });

    it("should run the root saga", () => {
      const sagaMiddleware = createSagaMiddleware();
      const runSagaSpy = vi.spyOn(sagaMiddleware, "run");
        configureStore({
          reducer: { tabs: tabsReducer },
          middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
        });

      sagaMiddleware.run(rootSaga);
      expect(runSagaSpy).toHaveBeenCalledWith(rootSaga);
    });
});