import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";



const Searchbar = () => {
    return (
        <Search>
            <Input type="text" placeholder='Search GIFs/Stickers/Clips' />
            <SearchIcon>
            <MdOutlineSearch/>
            </SearchIcon>
        </Search>
    );
}

export default Searchbar;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchIcon = styled.div`
    background: linear-gradient(to top,  #FF002E ,#FF047C);
    display: flex;
    width:5%;
    padding: 0.5rem;
    font-size: 2.15rem;
    justify-content: center;
    align-items: center;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
`;

const Input = styled.input` 
    box-sizing: border-box;
    width:90%;
    padding:1rem 2rem;
    font-size: 1rem;
    background-color: #D9D9D9;
    border:none;
    outline:none;
    border-radius: 10px 0 0 10px;
    &::placeholder {
        color: #000000;
    }
`;
