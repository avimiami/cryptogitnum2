import React from "react";
import { Card, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import {Chip}  from "@mui/material";
import Stack from '@mui/material/Stack';
import DoneIcon  from '@mui/icons-material/Done';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';

//import ApexChart from "../Chart";
//import CryptoBlock from "../CryptoBlock";
//import "./card.css"

const useStyles = makeStyles((theme) => ({
  root: {
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
const handleClick = () => {
  console.info('You clicked the pill.');
};

const TopPagePill = ({ crypto }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
      <Stack direction="row" spacing={1}>
      <Chip
        label="Item List1"
        onClick={handleClick}
        //onDelete={handleDelete}
        icon={<DoneIcon />}
      />
      <Chip
        label="Item List2"
        onClick={handleClick}
        //onDelete={handleDelete}
        //deleteIcon={<DeleteIcon />}
        variant="outlined"
        icon = {<CameraOutlinedIcon/>}
      />
     <Chip
        label="Item List3"
        onClick={handleClick}
        //onDelete={handleDelete}
        //deleteIcon={<DeleteIcon />}
        variant="outlined"
        icon = {<DoneIcon/>}
      />
       <Chip
        label="Item List4"
        onClick={handleClick}
        //onDelete={handleDelete}
        //deleteIcon={<DeleteIcon />}
        variant="outlined"
        icon = {<CameraOutlinedIcon/>}
      />
      <Chip
        label="Item List5"
        onClick={handleClick}
        //onDelete={handleDelete}
        //deleteIcon={<DeleteIcon />}
        variant="outlined"
        icon = {<DoneIcon/>}
      />

    </Stack>
  
If you click on one of the pills the text in the TopTextCard should change and the items in the CryptoCards will update

</div>
      
    </Card>
  );
};

export default TopPagePill;
