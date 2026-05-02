// utils/store.js
export function createStore(initialState) {
  let state = { ...initialState };
  const listeners = new Set();
  return {
    get: () => ({ ...state }),
    set(partial) {
      state = { ...state, ...partial };
      listeners.forEach(fn => fn(state));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
}
