import { Box, createTheme, Grid, Paper, Rating, Typography } from "@mui/material";
// import image from "../images/image.jpg";
import { AccessTime } from "@mui/icons-material"
import { ThemeProvider } from "@emotion/react";

// const src = "https://www.tourismebretagne.com/app/uploads/crt-bretagne/2019/04/fort-de-fougres-guillaudeau-donatienne-crtb-ab9165-1920x1080-crop-1556638491.jpg";

const theme = createTheme( {
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11,
          }
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 11
          }
        }
      ]
    }
  }
} );

const TourCard = ( { tour } ) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt="foret" className="img" width={700}/>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: 17, marginLeft: 0.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration} hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3} paddingLeft={0.5}>
            <Rating name="read-only" value={tour.rating} precision={0.25} size="small" readOnly />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              ({tour.numberOfReviews} reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginLeft={0.5}>
              From C ${tour.price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard
