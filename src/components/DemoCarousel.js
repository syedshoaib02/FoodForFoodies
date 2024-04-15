import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import dosa from '../assets/dosa.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:<center><h1>'Dosa– South Inian Food'</h1></center>,
    imgPath:'https://media.istockphoto.com/photos/plain-dosa-dish-picture-id1318600400?b=1&k=20&m=1318600400&s=170667a&w=0&h=aKwtxtg1IdudCXRHrC-CgxxQA19qrnEXN2oXdixZCko='
  },
  {
    label: <h1>'Biryani - Hyderabadi Special'</h1>,
    imgPath:
      'https://media.istockphoto.com/photos/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-picture-id1333127675?b=1&k=20&m=1333127675&s=170667a&w=0&h=5LesU0-2fQMMIeajFJBmEjOvnD5NmYRFVkmg31onSXM=',
  },
  {
    label: <h1>'Choole - North Inian Food'</h1>,
    imgPath:
      'https://media.istockphoto.com/photos/rajma-chawal-an-indian-food-picture-id1309964339?b=1&k=20&m=1309964339&s=170667a&w=0&h=tNTwsoo0CiBlgSlxugX3-kI2Api-jhk0DJVY5U5N2Gc=',
  },
  {
    label: <h1>'Punjabi Tadka'</h1>,
    imgPath:
      'https://media.istockphoto.com/photos/indian-food-collection-dishes-on-the-table-picture-id1226251500?b=1&k=20&m=1226251500&s=170667a&w=0&h=iqzuhv7auoNNyRK6Z2PznDiQsvTs03_3czLVIlFH2As=',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
   
    <Box sx={{ maxWidth: 1350,  flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  padding:5,
                  height: 450,
                  display: 'block',
                  maxWidth: 2500,
                  overflow: 'hidden',
                  width: '100%',
                  
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    
  );
}

export default SwipeableTextMobileStepper;
