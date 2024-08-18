import { InputBase,Box,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox=styled(Box)`
   background:#fff ;
   width:38%;
   border-raduis:7px ;
   margin-left:20px ;
   margin-right:20px;
   display:flex;
   align-items : center;
`;

const InputBaseStyle= styled(InputBase)`
 width:100%;
`;

const SearchIconStyle= styled(Box)`
color: grey;
display:flex;
margin-right : 10px;
`;

const Search=() =>{

    return(
        <SearchBox>
            <SearchIconStyle>
                <SearchIcon/>
            </SearchIconStyle>
            <InputBaseStyle placeholder="Search anything..."/>
        </SearchBox>
    )
};

export default Search;