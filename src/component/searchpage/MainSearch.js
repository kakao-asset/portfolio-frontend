import { useParams } from "react-router-dom";

export default function MainSearch({searchStock}){

    let {id} = useParams();

    return (
        <div>
            <p1 style={{color: 'white'}}>{searchStock.sName}</p1>
        </div>
    );
}