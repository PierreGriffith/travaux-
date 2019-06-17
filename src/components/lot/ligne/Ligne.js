
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context';



function Ligne (props) {
  let content = "";
   if (props.ligne){




   content =  props.ligne.map((item) => (
       //  let tmp = item.locationsDetails.locations.findIndex(elem =>(elem === ThemeContext._currentValue[0]))
         console.log(item.locationsDetails.locations.findIndex(elem =>(elem === ThemeContext._currentValue[0]))),

           <div className="columns is-mobile" key={item.designation}>
                <div className="column">
                    <p>{item.designation}</p>
                </div>
                <div className="column">
                    <p>{item.prixHT}</p>
                </div>
            <div className="column">
                <p>{item.prixTTC}</p>
            </div>
        </div>

   ));


   }
    return (
        <div>
            {content}
        </div>)

}

Ligne.propTypes = {
    ligne: PropTypes.array
};


export default Ligne;