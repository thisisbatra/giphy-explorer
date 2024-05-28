import styled from './Searchbar.module.css'
import { MdOutlineSearch } from "react-icons/md";

const Searchbar = () => {
    return (
        <div className={styled.Search}>
            <input type="search" name="searchVal" className={styled.Input}  placeholder='Search GIFs/Stickers/Clips'/>
            <button className={styled.SearchIcon}><MdOutlineSearch/></button>
        </div>
    );
}

export default Searchbar;