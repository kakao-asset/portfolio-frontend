import { BsGithub } from "react-icons/bs";

export default function Footer() {
 
    return (
        <div style={{ width: '100rem', height: '5rem'}}>
            <div style={{display: 'flex', float: 'right'}} onClick={() => window.open('https://github.com/kakao-asset')}>
            <BsGithub style={{color: 'white', paddingTop: '1rem'}} size='30px'></BsGithub>
            <h3 style={{color: 'white', marginLeft: '0.5rem', marginRight: '2rem'}}>동동유원지</h3>
            </div>

        </div>

    );
}