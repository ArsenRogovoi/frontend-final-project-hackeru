import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  styled,
  Typography,
} from "@mui/material";

//MuiIcon must be MUI Icon component from MUI library
const DashboardCard = ({
  title,
  text,
  MuiIcon,
  handleClick,
  bgColor = "#f5f5f5",
}) => {
  const StyledCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(2),
    transition: theme.transitions.create("box-shadow"),
    "&:hover": {
      boxShadow: theme.shadows[5],
    },
    backgroundColor: bgColor,
    borderRadius: theme.shape.borderRadius * 2,
  }));

  return (
    <Grid item md={4} sm={6} xs={12}>
      <StyledCard onClick={handleClick}>
        <CardActionArea>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              {MuiIcon ? (
                <Box mb={1}>
                  <MuiIcon />
                </Box>
              ) : null}
            </Box>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};
export default DashboardCard;
