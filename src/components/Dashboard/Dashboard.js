import React, { useState } from "react";
import { Box,Card, CardContent, CardActions,Button, Dialog, DialogTitle,DialogActions,styled,Typography,Stack,FormControlLabel, Checkbox,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Header from "../Header/Header.js";
import NoDataCard from '../../Graphs/NoDataCard.js';
import RingGraph from '../../Graphs/RingGraph.js';
import HorizontalBarGraph from '../../Graphs/HorizontalBarGraph.js';


const Dash = styled(Box)`
  background: #d3d3d3;
  width: 100%;
`;

  const renderWidgets = (categoryId, widgets) => {
    return widgets.map((widget) => (
      <Card key={widget.id} sx={{ width: 500, height: 250, margin: 1, borderRadius: 5, display: "flex", flexDirection: "column", justifyContent: "space-between", }} >
        
        <CardContent sx={{ textAlign: "left", paddingBottom: "8px" }}>

          <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", fontSize: 15 }}> {widget.name} </Typography>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", }} >
            {widget.type === "ring-graph" && <RingGraph data={widget.data} />}
            {widget.type === "stacked-bar-graph" && (<HorizontalBarGraph data={widget.data} />)}
            {widget.type === "empty" && <NoDataCard />}
          </div>

        </CardContent>

      </Card>
    ));
  };

const Dashboard = ({initialData}) => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [newWidget, setNewWidget] = useState({ name: "", content: "" });
  const [activeCategory, setActiveCategory] = useState(null);

  const addWidget = (categoryId, widget) => {
    setData((prevData) => {
      return {
        ...prevData,
        categories: prevData.categories.map((category) => {
          if (category.id === categoryId) {
            return {
              ...category,
              widgets: [...category.widgets, widget],
            };
          }
          return category;
        }),
      };
    });
  };

  const handleClickOpen = (categoryId) => {
    setActiveCategory(categoryId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewWidget({ name: "", content: "" });
  };

  const handleAddWidget = () => {
    if (newWidget.name && newWidget.content) {
      addWidget(activeCategory, { id: Date.now(), ...newWidget });
      handleClose();
    }
  };

  return (
    <Dash>
      <Header onAddWidgetClick={() => handleClickOpen(null)} />

      <div className="dashboard">

        {data.categories.map((category) => (
          <div key={category.id} className="category">

            <h4 style={{ marginLeft: 20 }}>{category.name}</h4>
            <div className="widgets-row" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", }} >

              {renderWidgets(category.id, category.widgets)}

              <Card sx={{width: 500, height: 250, margin: 1, border: "1px solid #ccc", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center",}}>

                <CardActions>
                  <Button variant="outlined" style={{ color: "grey", border: "none" }} onClick={() => handleClickOpen(category.id)}>
                    <AddIcon style={{ height: 20 }} /> Add Widget
                  </Button>
                </CardActions>

              </Card>

            </div>
          </div>
        ))}

      </div>

  <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { position: 'fixed', right: 0, top: 0, height: '100vh', width: '40%', maxHeight: '100vh', maxWidth: '50%', margin: 0, borderRadius: 0, display: 'flex', flexDirection: 'column', }, }} >
      
      <DialogTitle style={{ background: '#001861', color: 'white', height: 20, fontSize: 15, alignItems: 'center', }}> Add New Widget </DialogTitle>

      <div style={{ flex: 1, padding: '10px' }}>

        <Typography style={{marginLeft: 8, fontSize: 18, padding: 10, color: 'grey', fontFamily: 'inherit',}}>
          Personalize your dashboard by adding the following widget
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button onClick={() => setNewWidget({ ...newWidget, name: 'CWPP' })} style={{ color: 'grey' }}> CWPP </Button>
          <Button onClick={() => setNewWidget({ ...newWidget, name: 'CSPM' })} style={{ color: 'grey' }}> CSPM </Button>
          <Button onClick={() => setNewWidget({ ...newWidget, name: 'Image' })} style={{ color: 'grey' }}> Image </Button>
          <Button onClick={() => setNewWidget({ ...newWidget, name: 'Ticket' })} style={{ color: 'grey' }}> Ticket </Button>
        </Stack>

        <Stack style={{ marginLeft: 7 }}>
          <FormControlLabel control={<Checkbox />} label="Widget 1" />
          <FormControlLabel control={<Checkbox />} label="Widget 2" />
        </Stack>

      </div>

      <DialogActions sx={{ marginTop: 'auto', justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={handleClose} style={{ color: '#001861' }}> Cancel </Button>
        <Button variant="contained" onClick={handleAddWidget} style={{ background: '#001861' }}> Confirm </Button>
      </DialogActions>

  </Dialog>

    </Dash>
  );
};

export default Dashboard;
