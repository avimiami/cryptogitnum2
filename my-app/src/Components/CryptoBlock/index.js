import { Help } from "@mui/icons-material";
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { Tooltip, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    transition: "0.3s",
    border: `1px solid transparent`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "5px",
      padding: "10px",
    },
  },
  relative:{
    position: "relative",
  },
  topHeader: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#666464",
    display: "flex",
  },
  helpIcon: {
    color: "#999",
    fontSize: "16px !important",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
  },
  data: {
    fontSize: "23px",
    fontWeight: "700",
  },
  increase: {
    fontSize: "14px",
    color: "#5DBB63",
  },
  decrease: {
    fontSize: "14px",
    color: "#FF2400",
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main, 
    padding: "10px",
    borderRadius: "5px",
    color: "#fff",
    position: "absolute",
    width: "100%",
    zIndex:"1",
    marginTop:"8px",
  },
  toolHeader: {
    fontSize: "14px",
    fontWeight: "500",
  },
  toolContent: {
    fontSize: "13px",
    margin: "5px 0",
  },
  triangle:{
    width: "0",
    height: "0",
    borderStyle: "solid",
    borderWidth: "0 7.5px 13.0px 7.5px",
    borderColor: `transparent transparent ${theme.palette.primary.main} transparent`,
    position:"absolute",
    top:"-7px",
    right:"50%",
  }
}));

const CryptoBlock = (props) => {
  const classes = useStyles();
  const [showToolTip, setShowToolTip] = useState(false);


  const handleHover = () => {
    setShowToolTip(true);
  };
  const handleHoverClose = () => {
    setShowToolTip(false);
  };

  var status;

  if(parseFloat(props.value) > 0){
    status = "positive"
  }else if(parseFloat(props.value) < 0){
    status = "negative";
  }else {
    status = "neutral";
  }

  console.log('status', status);

  return (
    <div className={classes.relative}>
      <div
        className={classes.root}
        onMouseOver={handleHover}
        onMouseOut={handleHoverClose}
      >
        <div className={classes.topHeader}>
          <span>{props.Box_Name}</span>{" "}
          <span className={classes.icon}>
            <InfoSharpIcon className={classes.helpIcon} />{" "}
          </span>
        </div>
        <div className={classes.data}>{props.Box_Value}</div>
        {/* {props.status === "positive" ? 
        <div className={classes.increase}>+{props.value}</div>
        :
        <div className={classes.decrease}>-{props.value}</div>
        } */}
        {props.Box_lower_style == "positive" && <div className={classes.increase}>+{props.Box_lower_value}</div>}
        {props.Box_lower_style == "negative" && <div className={classes.decrease}>{props.Box_lower_value}</div>}
        {props.Box_lower_style == "neutral" && <div className={classes.increase}>{props.Box_lower_value}</div>}

      </div>
      {/* {showToolTip && ( */}
      <Zoom in={showToolTip}>
        <div className={classes.tooltip}>
            <div className={classes.triangle}></div>
          <div className={classes.toolHeader}> {props.Box_Name} </div>
          <div className={classes.toolContent}>
            {" "}
            {props.Box_Desc}
            {" "}
          </div>
          <div className={classes.toolAmount}>{props.Box_Value_tooltip}</div>
        </div>
        </Zoom>
       {/* )} */}
    </div>
  );
};

export default CryptoBlock;
