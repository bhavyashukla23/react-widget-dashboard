import { Box, styled, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Topbar = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const DashType = styled(Typography)`
  margin-top: 10px;
  font-weight: bold;
`;

const ButtonBar = styled(Box)`
  margin: 5px;
  padding: 2px;
  display: flex;
  flex-direction: row;
`;

const Button = styled('button')({
  alignItems: "center",
  display: "flex",
  fontSize: 15,
  marginLeft: 5,
  color: "#808080",
  background: "#fff",
  border: "#C0C0C0",
  borderRadius: 4,
  padding: 10,
});

const Header = ({ onAddWidgetClick }) => {
  return (
    <Topbar>
      <DashType>CNAPP Dashboard</DashType>

      <ButtonBar>

        <Button onClick={onAddWidgetClick}> Add Widget &nbsp;<AddOutlinedIcon style={{ width: 17, height: 17 }} /> </Button>

        <Button> <LoopOutlinedIcon style={{ width: 17, height: 17 }} /> </Button>

        <Button> <MoreVertOutlinedIcon style={{ width: 17, height: 17 }} /> </Button>

        <Button style={{ color: "#000080", fontWeight: "bold" }}>
          <AccessTimeFilledOutlinedIcon style={{ width: 17, height: 17 }} /> &nbsp; Last 2 days &nbsp;
          <KeyboardArrowDownOutlinedIcon style={{ width: 17, height: 17 }} />
        </Button>

      </ButtonBar>
    </Topbar>
  );
};

export default Header;
