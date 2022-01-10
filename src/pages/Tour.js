import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material"
import CustomizedAccordions from "../components/Accordion"
import ImageCollage from "../components/ImageCollage"
import BasicModal from "../components/Modal"

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the word in Word
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={325} alt="img"/>
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently asked Question
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour
