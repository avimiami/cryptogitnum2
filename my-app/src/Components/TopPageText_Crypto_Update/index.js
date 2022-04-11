import { Card, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import React from "react";
import ApexChart from "../Chart";
import CryptoBlock from "../CryptoBlock";
//import "./card.css"
//import TrafficIcon from '@mui/icons-material/TrafficIcon';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import { pink } from '@mui/material/colors';

const useStyles1 = makeStyles((theme) => ({
  root: {
    padding: "5px",
    margin: "15px 0px",
  },
  cardHeader: {
    display: "flex",
    "& h2": {
      fontSize: "20px",
      fontWeight: "500",
      margin: "0",
    },
  },
  cardContent: {
    width:"50%",
    [theme.breakpoints.down('md')]: {
      width:"100%"
    },
    "& p": {
      margin: "5px 0",
      color: "#999",
      fontSize: "14px",
    },
  },
  gridBlock: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
  },
  imgClass:{
    width:"28px",
    height:"100%",
    objectFit:"contain",
  }

}));

const useStyles = makeStyles((theme) => ({
  root: {
    //max-width: 1200px,
    maxWidth: "1200px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "10px",
    
    transition: "3.3s",
    border: `1px solid transparent`,
    margin: "10px",
    //width: 100%;
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "5px",
      //padding: "10px",
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
    fontSize: "16px",
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


const TopTextCard_Crypto_Update = ({ crypto }) => {
  const classes = useStyles();
  // console.log('crytpo' , crypto);
  // how do i get this component to take something in (JSON from loading data)
  // text with dynamic icons
  return (
    <Card className={classes.root}>
      <div>Bitcoin (39K / +1.3%) and ETH (2,500/ 0.9%) were up slightly in the past 24 hours. Alt-coins were lower with Curve leading the market lower.  NFTS have been the weakest market over the past month with Defi the best sector year to date. Last update Sunday March 13th, 7:25pm EST.
      </div> 
    </Card>
  );
};

export default TopTextCard_Crypto_Update;
