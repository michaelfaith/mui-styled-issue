import { ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import darkTheme from "./darkTheme";
import App, { classes } from "./App";

describe("App", () => {
  it("should have black background with dark theme", () => {
    const sut = render(
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    );

    expect(sut.queryByTestId(classes.root)).toHaveStyle(
      `background-color: ${darkTheme.palette.grey[900]}`
    );
    expect(sut.queryByTestId(classes.text)).toHaveStyle(
      `color: ${darkTheme.palette.common.white}`
    );
  });
});