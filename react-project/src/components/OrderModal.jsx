import { useForm } from 'react-hook-form'

import "./OrderModal.css"
export default function OrderModal({toggleModal}){
    const form = useForm();
    return(
        <div className="modal">
                    <div className="overlay"/>

                    <div className="modal-content">
                        <button className="modal-content-button"
                        onClick={toggleModal}
                        >
                            Close
                        </button>
                        <p>Fill out your data:</p>
                    <form> 
                        <input type="text" placeholder="Your name..."></input>
                        <input type="text" placeholder="Your e-mail address..."></input>
                    </form>
                    </div>
                </div>
    );
}