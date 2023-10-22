import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormContact.css"
import Footer from '../Footer/Footer';

const FormContact = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        

       // const serviceId = "service_prn6w77";
       // const templateId = "template_9o4vyca"
       // const apikey = "YjnxhHB9Ism-Cye4Y" 

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error) )
    }

    return (
        <div className='form-container'>
            <div className='imgyform-container'>
                <div className='help-info'>
                    <img src="https://cdn.discordapp.com/attachments/791413136111697935/1165378760829321236/381458347_211760551718246_5893086089647260274_n.jpg?ex=6546a28c&is=65342d8c&hm=70d0a175d2aa2950372bcfffbc3e5cd475f2deb3d32411c0a646b6762c6c70e0&" alt="" />
                    <h1>SEND EMAIL FOR HELP</h1>
                </div>

                <form ref={refForm} onSubmit={handleSubmit}>

                    <h2>SE TE RESPONDERA A LA BREVEDAD...</h2>
                    <h5>Email desactivado momentáneamente</h5>
    
                    <div className="input-group input-first">
                        <fieldset><input type="text" id="nombre" name="username" placeholder="Nombre/s" required readOnly /></fieldset>
                        <input type="text" id="apellido" name="apellido" placeholder="Apellido/s" required readOnly />
                        <fieldset><input type="email" id="email" name="email" placeholder="Email" required readOnly /></fieldset>
                    </div>

                    <div className="input-group input-first">
                        <input type="number" id="numero" name="numero" placeholder="Numero" readOnly />
                        <input type="text" id="pais" name="pais" placeholder="Pais" readOnly />
                    
                    </div>
                    
                    <div className="input-group">
                        <fieldset><textarea id="mensaje" name="message" placeholder="Mensaje" required  readOnly/></fieldset>
                    </div>
                    <button readOnly type="submit">Enviar Email</button>
                </form>
            </div>
        </div>
    );
}

export default FormContact;
