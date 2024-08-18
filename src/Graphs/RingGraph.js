import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";


const RingGraph = ({ data }) => {
  // Calculating the total value from the data
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ResponsiveContainer width="70%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff7300"][index % 4]} />
            ))}
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={20}
            fill="#333"
          >
            {total}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={15}
            fill="#333"
          >
            Total
          </text>
        </PieChart>
      </ResponsiveContainer>

      <Stack sx={{ width: "30%", ml: 2 }}>

        {data.map((entry, index) => (

          <Box key={`legend-${index}`} sx={{ display: "flex", alignItems: "center", mb: 1 }} >
            <Box style={{ width: 20, height: 20, backgroundColor: ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"][index % 4], mr: 1, }} />
            <Typography variant="body2">{entry.name}</Typography>
          </Box>
        ))}

      </Stack>

    </Box>
  );
};

export default RingGraph;
