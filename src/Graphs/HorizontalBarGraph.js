import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const HorizontalBarGraph = ({ data, height = 80, width = "100%" }) => {
  // Calculating the total value from the data
  const total = data.reduce((acc, entry) => acc + entry.uv + entry.pv + entry.amt,0);

  return (
    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%", }} >

      <Typography variant="h6" gutterBottom align="left" style={{ paddingLeft: 2, fontSize: 15, fontWeight: "bold", marginTop: 5, marginBottom: 2, }}>
        {total} Total
      </Typography>

      <ResponsiveContainer width={width} height={height}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="transparent"
            tick={{ opacity: 0 }}
          />
          <XAxis type="number" stroke="transparent" tick={{ opacity: 0 }} />
          <YAxis
            dataKey="name"
            type="category"
            stroke="transparent"
            tick={{ opacity: 0 }}
          />
          <Tooltip />
          <Legend />

          <Bar dataKey="uv" stackId="a" fill="#8884d8" />
          <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
          <Bar dataKey="amt" stackId="a" fill="#ffc658" />

        </BarChart>

      </ResponsiveContainer>
      
    </Box>
  );
};

export default HorizontalBarGraph;
