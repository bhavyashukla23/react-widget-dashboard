import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";

const NoDataCard = () => (
  <Card style={{width: 300, display: "flex", alignItems: "center", justifyContent: "center",textAlign: "center",}}>

    <CardContent>

      <BarChartIcon style={{ fontSize: 40, color: "grey" }} />
      <Typography style={{  color: "grey" }}> No Graph data available </Typography>

    </CardContent>

  </Card>
);

export default NoDataCard;
