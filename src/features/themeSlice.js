import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dark:
    JSON.parse(localStorage.getItem("theme")) &&
    JSON.parse(localStorage.getItem("theme")).dark,
  light:
    JSON.parse(localStorage.getItem("theme")) &&
    JSON.parse(localStorage.getItem("theme")).light,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      let theme = JSON.parse(localStorage.getItem("theme"));
      theme.dark = !theme.dark;
      theme.light = !theme.light;
      localStorage.setItem("theme", JSON.stringify(theme));
      theme = JSON.parse(localStorage.getItem("theme"));
      state.dark = theme.dark;
      state.light = theme.light;
    },
    setInitialTheme: (state) => {
      localStorage.setItem(
        "theme",
        JSON.stringify({
          dark: matchMedia("(prefers-color-scheme:dark)").matches,
          light: matchMedia("(prefers-color-scheme:light)").matches,
        })
      );
      state.dark = JSON.parse(localStorage.getItem("theme")).dark;
      state.light = JSON.parse(localStorage.getItem("theme")).light;
    },
  },
});
export default themeSlice.reducer;
export const getThemes = (state) => state.theme;
export const { toggleTheme, setInitialTheme } = themeSlice.actions;
