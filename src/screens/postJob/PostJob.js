import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SelectPackage from "./SelectPackage";
import ManageLogo from "./ManageLogo";
import ManageJobInfomation from "./ManageJobInfomation";
import PreviewPost from "./PreviewPost";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "เลือก แพคเกจ",
    "จัดการ โลโก้ และ แบนเนอร์",
    "จัดการ ข้อมูลผู้ประกอบการ และ ตำแหน่งงานที่ลงประกาศ",
    "รีวิว และ ลงประกาศงาน",
  ];
}

function getStepContent(stepIndex, handleNext) {
  console.log("getStepContent " + stepIndex);

  switch (stepIndex) {
    case 0:
      return <SelectPackage />;
    case 1:
      return <ManageLogo />;
    case 2:
      return <ManageJobInfomation />;
    case 3:
      return <PreviewPost />;
    default:
      return "Unknown stepIndex";
  }
}

function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const childRef = React.useRef();

  const handleNext = async () => {
    if (await callChildFunc("next")) {
      await setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = async () => {
    if (await callChildFunc("back")) {
      await setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const callChildFunc = (btnEvent) => {
    let isSuccess = false;
    switch (childRef.current.constructor.name) {
      case "SelectPackage":
        console.log("current SelectPackage");
        if (btnEvent == "next") {
          // isSuccess = childRef.current.nextStep(btnEvent);
          isSuccess = childRef.current.nextStep();
        } else {
          isSuccess = childRef.current.backStep();
        }
        break;
      case "ManageLogo":
        console.log("current ManageLogo");
        if (btnEvent == "next") {
          isSuccess = childRef.current.nextStep();
        } else {
          isSuccess = childRef.current.backStep();
        }
        break;
      case "ManageJobInfomation":
        console.log("current ManageJobInfomation");
        isSuccess = true;
        break;
      case "PreviewPost":
        console.log("current PreviewPost");
        isSuccess = true;
        break;
      default:
        console.log("current default");
    }
    return isSuccess;
  };

  return (
    <div className={classes.root} style={{ maxWidth: 1200 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ justifyContent: "end" }}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {activeStep == 0 && <SelectPackage ref={childRef} />}
              {activeStep == 1 && <ManageLogo ref={childRef} />}
              {activeStep == 2 && <ManageJobInfomation ref={childRef} />}
              {activeStep == 3 && <PreviewPost ref={childRef} />}
            </Typography>
            <div style={{ float: "right", marginTop: 20 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default class PostJob extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: 150,
          marginBottom: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HorizontalLabelPositionBelowStepper />
      </div>
    );
  }
}
