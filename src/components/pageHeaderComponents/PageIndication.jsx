import Typography from "@mui/material/Typography";
const PageIndication = () => {
  return (
    <Typography
      variant="h6"
      component="div"
      // sx={{ flexGrow: 1 }}
      sx={{ display: { md: "none" } }}
    >
      Home
    </Typography>
  );
};

export default PageIndication;
