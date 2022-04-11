import { Card, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import React from "react";
import ApexChart from "../Chart";
import CryptoBlock from "../CryptoBlock";

//import "./card.css"

const useStyles = makeStyles((theme) => ({
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
    fontFamily: 'Press Start 2P', //'Courier New', COurier works but not this one
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
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

const CryptoCard = ({ crypto }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
        <Grid item sm={12} md={12}>
        <div className={classes.cardHeader}>
          <img src={crypto.image} alt='crypto icon' className={classes.imgClass} />
            <span>&nbsp;&nbsp;</span>
            <span>{crypto.name || crypto.Name}</span>  
            <span>&nbsp;&nbsp; Icon2</span>
            <span>&nbsp;&nbsp; ICON3</span> 
        
          </div>

        </Grid>
        <Grid item sm={12} md={6}>
        <div className={classes.cardContent}>
            <p>"some longer text here blah blah balh. beep bop. this text could be 2 or 3 sentences long i have to see what makes sense</p>
          </div>
          <div className={classes.gridBlock}>
            <CryptoBlock
              Box_Name={"Box 1"}
              Box_Desc={"pct Change 21D vs ETH "}
              Box_Value={crypto.ROC_520_vsETH_H}
              Box_Value_tooltip={crypto.ROC_520_vsETH_H}
              Box_lower_style={"positive"}
              Box_lower_value={"1.67"}
            />
            <CryptoBlock
              Box_Name={"Box2 Name"}
              Box_Desc={"Box2 Description Tooltip"}
              Box_Value={Math.round(crypto.MarketCap/10000000).toLocaleString()}
              Box_Value_tooltip={"USD " + crypto.MarketCap.toLocaleString()}
              Box_lower_style={""}
              Box_lower_value={""}
            />
            <CryptoBlock
              Box_Name={"MARKETPRICE"}
              Box_Desc={"Total Value Locked (nominal)"}
              Box_Value={"12.5B"}
              Box_Value_tooltip={"12,358,219"}
              Box_lower_style={"negative"}
              Box_lower_value={"-2.6"}
            />
            <CryptoBlock
              Box_Name={"TOKEN"}
              Box_Desc={"Total Value Locked (nominal)"}
              Box_Value={"12.5B"}
              Box_Value_tooltip={"12,358,219"}
              Box_lower_style={"positive"}
              Box_lower_value={"1.67"}
            />
            <CryptoBlock
              Box_Name={"TOKEN PRICE"}
              Box_Desc={"Total Value Locked (nominal)"}
              Box_Value={"12.5B"}
              Box_Value_tooltip={"12,358,219"}
              Box_lower_style={"positive"}
              Box_lower_value={"1.67"}
            />
            <CryptoBlock
              Box_Name={"CAP/TVL"}
              Box_Desc={"Total Value Locked (nominal)"}
              Box_Value={"12.5B"}
              Box_Value_tooltip={"12,358,219"}
              Box_lower_style={"positive"}
              Box_lower_value={"1.67"}
            />
          </div>
        </Grid>
        <Grid item sm={12} md={6} spacing={1}>
          <ApexChart crypto={crypto} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CryptoCard;
