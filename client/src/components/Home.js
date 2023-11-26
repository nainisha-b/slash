import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  }
});

export default function Home() {
  const classes = useStyles();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Fetch cart data from cartData.json
    const fetchCartData = async () => {
      try {
        const response = await fetch("/cartData.json");
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <Grid container>
      <Grid item md={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              SLASH
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              SE 2023
            </Typography>
            <Button size="medium" variant="contained" color="primary" onClick={() => console.log(cartData)}>
              Get Cart Data
            </Button>
            {cartData.length > 0 && (
              <table>
                <thead>
                  <tr>
                    {Object.keys(cartData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
