import { Typography ,Box, styled} from "@mui/material";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import Search from './InputSearch.js';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Heading=styled(Box)`
   display: flex;
   background: #fff;
   margin-left: 50px;
   margin-top:10px;
`;

const Nav=styled(Box)`
 display:flex;
 height:fit-contents;
 padding: 5px;
 justify-content : space-between;
`;

const Home= styled(Typography)`
 color:#C0C0C0;
`;

const Dashboard= styled(Typography)`
 font-weight:bold;
`;

const BellIcon= styled(Typography)`
 color:#5c8ab9;
`;


const Navbar=()=>{

    return(
        <Nav>

        <Heading>
        <Home>Home</Home>
        <Home><NavigateNextOutlinedIcon/></Home>
        <Dashboard>Dashboard V2</Dashboard>
        </Heading>

        <Search/>

        <BellIcon> <NotificationsActiveOutlinedIcon style={{marginRight:70, marginTop:10}}/>  </BellIcon>   
             
        </Nav>
    )
};

export default Navbar;