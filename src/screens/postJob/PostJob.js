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
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

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
  let history = useHistory();
  const childSelectPackageRef = React.useRef();
  const childManageLogoRef = React.useRef();
  const childManageJobInfomationRef = React.useRef();
  const childPreviewPostRef = React.useRef();

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

  const handleFinish = async () => {
    console.log("handleFinish");
    var isSuccess = await childPreviewPostRef.current.finishStep();
    if (isSuccess) {
      await history.push("/home");
    }
  };

  const callChildFunc = (btnEvent) => {
    let isSuccess = false;
    console.log("childSelectPackageRef : ", childSelectPackageRef);
    console.log("childManageLogoRef : ", childManageLogoRef);
    console.log("childManageJobInfomationRef : ", childManageJobInfomationRef);
    console.log("childPreviewPostRef : ", childPreviewPostRef);

    if (childSelectPackageRef.current) {
      console.log("if childSelectPackageRef");
      if (btnEvent == "next") {
        isSuccess = childSelectPackageRef.current.nextStep();
      } else {
        isSuccess = childSelectPackageRef.current.backStep();
      }
    } else if (childManageLogoRef.current) {
      console.log("if childManageLogoRef");
      if (btnEvent == "next") {
        isSuccess = childManageLogoRef.current.nextStep();
      } else {
        isSuccess = childManageLogoRef.current.backStep();
      }
    } else if (childManageJobInfomationRef.current) {
      console.log("if childManageJobInfomationRef");
      isSuccess = true;
    } else if (childPreviewPostRef.current) {
      console.log("if childPreviewPostRef");
      if (btnEvent == "next") {
        // isSuccess = childPreviewPostRef.current.nextStep();
      } else {
        isSuccess = childPreviewPostRef.current.backStep();
      }
    }

    // switch (childRef.current.constructor.name) {
    //   case "SelectPackage":
    //     console.log("current SelectPackage");
    //     if (btnEvent == "next") {
    //       // isSuccess = childRef.current.nextStep(btnEvent);
    //       isSuccess = childRef.current.nextStep();
    //     } else {
    //       isSuccess = childRef.current.backStep();
    //     }
    //     break;
    //   case "ManageLogo":
    //     console.log("current ManageLogo");
    //     if (btnEvent == "next") {
    //       isSuccess = childRef.current.nextStep();
    //     } else {
    //       isSuccess = childRef.current.backStep();
    //     }
    //     break;
    //   case "ManageJobInfomation":
    //     console.log("current ManageJobInfomation");
    //     isSuccess = true;
    //     break;
    //   case "PreviewPost":
    //     console.log("current PreviewPost");
    //     if (btnEvent == "next") {
    //       isSuccess = childRef.current.nextStep();
    //     } else {
    //       isSuccess = childRef.current.backStep();
    //     }
    //     break;
    //   default:
    //     console.log("current default");
    // }
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
              <div style={{ textAlign: "center" }}>
                <Link to="/home">กลับหน้าหลัก</Link>
              </div>
            </Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {activeStep == 0 && <SelectPackage ref={childSelectPackageRef} />}
              {activeStep == 1 && <ManageLogo ref={childManageLogoRef} />}
              {activeStep == 2 && (
                <ManageJobInfomation ref={childManageJobInfomationRef} />
              )}
              {activeStep == 3 && <PreviewPost ref={childPreviewPostRef} />}
            </Typography>
            <div style={{ float: "right", marginTop: 20 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFinish}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
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
