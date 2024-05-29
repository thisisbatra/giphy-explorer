import React, { useContext } from 'react';
import styled from './Searchbar.module.css'
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {cusContext} from '../../Context/StateContext';

const Searchbar = () => {
    const {setSearchVal}=useContext(cusContext);
    const nav=useNavigate();
    const onSearch=()=>{
        nav("/SearchedResultBox");
    }
    const forSearchValue=(e)=>{
        // console.log(e.target.value);
        setSearchVal(e.target.value);
    }

    return (
        <div className={styled.Search}>
            <input type="search" name="searchVal" className={styled.Input} onChange={(e)=>forSearchValue(e)}  placeholder='Search GIFs/Stickers/Clips'/>
            <button className={styled.SearchIcon} onClick={onSearch}><MdOutlineSearch/></button>
        </div>
    );
}

export default Searchbar;