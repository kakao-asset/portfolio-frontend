import Searchbar from "./Searchbar";
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";

export default function Header() {
    const Spacer = styled.div`
        flex-grow: 1;
    `
    return (
        <div style={{width: '100%', height: '50px'}}>
            <div style={{display: 'flex', marginTop: '1.5%', marginLeft: '1.5%', width: '100%', height: '55px'}} >
                <div style={{display: 'block', width: '60%'}}>
                <img alt="kalogo" src="img/ka_logo_s.png" style={{float: 'left'}}></img>
                </div>
                <Spacer></Spacer>
                <div style={{marginRight: '10px', display: 'flex', width: '20%'}}>
                    <Searchbar></Searchbar>
                    <Spacer></Spacer>
                    <div style={{marginLeft: '5px', display: 'block', width: '5%'}}>
                    <img alt="kaprofile" src="img/ka_user_profile.png" style={
                        {float: 'right',
                        position: 'absolute',
                        top: '30px',
                        left: '92%',
                        width: '50px',
                        height: '50px'
                        }}></img>
                </div>
                </div>

            </div>
            <div style={{borderBottom: '0.5px solid', color: "#d2d2d2", marginLeft: '1.5%', marginRight: '1.5%'}}></div>
        </div>

    );
}