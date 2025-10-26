export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("movies_state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading from localStorage", err);
    return undefined;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("movies_state", serializedState);
  } catch (err) {
    console.error("Error saving to localStorage", err);
  }
};
