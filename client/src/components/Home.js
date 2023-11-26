// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@mui/styles";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

// export default function Home() {
//   const classes = useStyles();
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     // Fetch cart data from cartData.json
//     const fetchCartData = async () => {
//       try {
//         const response = await fetch("/cartData.json");
//         const data = await response.json();
//         setCartData(data);
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//       }
//     };

//     fetchCartData();
//   }, []); // Empty dependency array to fetch data only once on component mount

//   return (
//     <Grid container>
//       <Grid item md={6}>
//         <Card className={classes.root}>
//           <CardContent>
//             <Typography variant="h5" component="h2">
//               SLASH
//             </Typography>
//             <Typography className={classes.pos} color="textSecondary">
//               SE 2023
//             </Typography>
//             <Button size="medium" variant="contained" color="primary" onClick={() => console.log(cartData)}>
//               Get Cart Data
//             </Button>
//             {cartData.length > 0 && (
//               <table>
//                 <thead>
//                   <tr>
//                     {Object.keys(cartData[0]).map((key) => (
//                       <th key={key}>{key}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartData.map((item, index) => (
//                     <tr key={index}>
//                       {Object.values(item).map((value, index) => (
//                         <td key={index}>{value}</td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#1976D2', // Adjust link color as needed
  },
  image: {
    maxWidth: '100%',
    maxHeight: '150px', // Adjust maximum height as needed
  },
  refreshButton: {
    marginLeft: '8px',
  },
  tableContainer: {
    width: '80%',
    margin: 'auto',
    overflowX: 'auto',
    marginTop: '16px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '12px',
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textTransform: 'capitalize',
  },
});

const hardcodedCartData = [
  {
    title: "61 Key Music Electronic Keyboard Electri...",
    price: "$87.58",
    website: "ebay",
    link: "https://www.ebay.com/itm/61-Key-Music-Electronic-Keyboard-Electric-Digital-Piano-Organ-Stand-/254803804078",
    image: "https://i.ebayimg.com/thumbs/images/g/8UcAAOSwUxhe7BNY/s-l140.jpg",
    rating: "Not Available",
  },
  {
    title: "Digital Piano Keyboard 61 Key - Portable...",
    price: "$58.87",
    website: "ebay",
    link: "https://www.ebay.com/itm/Digital-Piano-Keyboard-61-Key-Portable-Electronic-Instrument-Stand-Mic-/313267275725",
    image: "https://i.ebayimg.com/thumbs/images/g/oLsAAOSwik1fj~qL/s-l140.jpg",
    rating: "Not Available",
  },
];

export default function Home() {
  const classes = useStyles();
  const [cartData, setCartData] = useState(hardcodedCartData);

  const handleRefresh = () => {
    alert("Latest prices updated");
  };

  return (
    <Grid container>
      {cartData.length > 0 && (
        <div className={classes.tableContainer}>
          <h2> My Wishlist </h2>
          <table className={classes.table}>
            <thead>
              <tr>
                {Object.keys(cartData[0]).map((key) => key !== 'timestamp' && (
                  <th key={key} className={classes.th}>{key === 'link' ? 'Get Link' : key}</th>
                ))}
                <th className={classes.th}>Refresh</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={index}>
                  {Object.entries(item).map(([key, value]) => (
                    key !== 'timestamp' && (
                      <td key={key} className={classes.td}>
                        {key === 'link' ? (
                          <a href={value} target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Get Link
                          </a>
                        ) : key === 'image' ? (
                          <img src={value} alt={item.title} className={classes.image} />
                        ) : (
                          value
                        )}
                      </td>
                    )
                  ))}
                  <td className={classes.td}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={handleRefresh}
                      className={classes.refreshButton}
                    >
                      Refresh
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Grid>
  );
}
