import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";



const Searchbar = () => {
    return (
        <Search>
            <Input type="text" placeholder='Search GIFs/Stickers/Clips' />
            <SearchIcon>
            <MdOutlineSearch size={70}/>
            </SearchIcon>
        </Search>
    );
}

export default Searchbar;

const Search = styled.div`
    height: 79px;
    width: 1371px;
    margin: 0 22px;
    display: flex;
    align-items: center;
`;

const SearchIcon = styled.div`
    height: 79px;
    width: 87px;
    background: linear-gradient(to top,  #FF002E ,#FF047C);
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

const Input = styled.input`
    width: 100%; 
    height: 100%; 
    box-sizing: border-box;
    padding: 20px;
    font-size: 32px;
    background-color: #D9D9D9;
    border:none;
    &::placeholder {
        color: #000000;
    }
`;
