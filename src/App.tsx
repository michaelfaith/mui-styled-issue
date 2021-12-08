import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

export const classes = {
  root: "mf-demo-root",
  text: "mf-demo-text"
};
export const testIds = classes;
const StyledRoot = styled("div")(({ theme }) => {
  console.log(`Theme: ${theme.palette.mode}`);
  return {
    [`&.${classes.root}`]: {
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.grey[900]
          : theme.palette.grey[50]
    },
    [`& .${classes.text}`]: {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.common.white
          : theme.palette.common.black
    }
  };
});

/**
 * how you used the components
 */
export default function App() {
  const theme = useTheme();
  return (
    <StyledRoot className={classes.root} data-testid={testIds.root}>
      <Typography className={classes.text} data-testid={testIds.text}>
        This should have {theme.palette.mode} background
      </Typography>
    </StyledRoot>
  );
}
