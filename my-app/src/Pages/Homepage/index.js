import { Container } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import CryptoCard from "../../Components/CryptoCard";
import NavBar from "../../Components/NavBar";
import data from "./../../utils/data.json";
import TopTextCard from "../../Components/TopPageText";
import TopTextCard_Crypto_Update from "../../Components/TopPageText_Crypto_Update";
import TopTextCard_Stock_Update from "../../Components/TopPageText_Stock_Update";
import TopPagePill from "../../Components/TopPagePill";
//
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) => ({
  paginate:{
      display:"flex",
      listStyle:"none",
      alignItems:"center",
      justifyContent: "flex-end",      
    
    '& li':{
      padding:"10px 15px",
      margin:"0 5px",
      background:"#fff",
      borderRadius:"5px", 
      cursor:"pointer",
      [theme.breakpoints.down('md')]: {
        padding:"5px"
      },
    },
    "& .selected":{
      background:"#acaaaa",
    }
  }
}));

function Items({ currentItems }) {
  return (
    <Fragment>
      {currentItems &&
        currentItems.map((crypto, index) => {
          return <CryptoCard crypto={crypto} />;
        })}
    </Fragment>
  );
}

const Homepage = () => {
  const classes = useStyles();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 3;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.crypto_full_data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.crypto_full_data.length / 3));
  }, [itemOffset, 3]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % data.crypto_full_data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <NavBar />
      <TopPagePill />
      <TopTextCard_Crypto_Update />
      <TopTextCard_Stock_Update />
      <TopTextCard />
        <Container>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          className={classes.paginate}
        />
      </Container>
    </Fragment>
  );
};

export default Homepage;
