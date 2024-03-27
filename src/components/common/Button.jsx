import { Button as MuiButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant,
  textColor,
  buttonColor,
  handleClick,
  fullWidth,
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: buttonColor ? buttonColor : "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        variant={variant}
        color="primary"
        sx={{ color: textColor ? textColor : "black" }}
        onClick={handleClick}
        fullWidth={fullWidth}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
