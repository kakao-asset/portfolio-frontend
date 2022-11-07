import sampledata from "./sampledata.json"
import styles from "./css/Modal.module.css"
import Modal from 'react-modal'

export default function SearchModal(props){
    const {open,close,sTarget} = props;

    return (
        <div>
            <Modal></Modal>
        </div>
    );

}