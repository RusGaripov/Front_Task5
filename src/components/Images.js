import React from "react"
import mu from './mu.jpg';
import juve from './juve.jpg';
import barca from './barca.jpg';
import rm from './rm.jpg';

function Images() {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img align="center" className="photo" src={mu} />
                <h3><font color="red">Manchester United</font></h3>
                <p><font color="red">Country: England</font></p>
                <p><font color="red">Head coach: mr.Ferguson</font></p>
            </div>

            <div className="contact-card">
                <img align="center"  className="photo" src={juve} />
                <h3><font color="grey">Juventus</font></h3>
                <p><font color="grey">Country: Italy</font></p>
                <p><font color="grey">Head coach: senior Allegri</font></p>
            </div>

            <div className="contact-card">
                <img align="center"  className="photo" src={barca} />
                <h3><font color="blue"> FC Barcelona</font></h3>
                <p><font color="blue">Country: Spain</font></p>
                <p><font color="blue">Head coach: don Guardiola</font></p>
            </div>

            <div className="contact-card">
                <img align="center"  className="photo" src={rm} />
                <h3><font color="orange">Real Madrid</font></h3>
                <p><font color="orange">Country: Spain</font></p>
                <p><font color="orange">Head coach: monsieur Zidane</font></p>
            </div>
        </div>
    )
}


export default Images