const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore({ reducer: persistedReducer, middleware: [thunk] });
const persistor = persistStore(store, null, () => {
  const state = store.getState();
  const products = state.products;
  storage.setItem("persist:root", JSON.stringify({ ...state, products }));
});

export { store, persistor };
