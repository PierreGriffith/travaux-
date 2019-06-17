import React from 'react';
import PropTypes from 'prop-types';
import Ligne from './ligne'


function AffLot (props) {
  let content = "";
   if (props.lot){



     content = props.lot.map((item) => (
      //   console.log(item.lignes, item.label, item.prixTotalHT, item.prixTotalTTC)



         <div key={item.label}>
                    <div className="columns is-mobile">
                        <div className="column">
                            <h1> Label </h1>
                            <p>{item.label}</p>
                        </div>
                        <div className="column">
                            <p> prixTotalHT</p>
                            <p>{item.prixTotalHT}</p>
                        </div>
                        <div className="column">
                            <p> prixTotalTTC</p>
                            <p>{item.prixTotalTTC}</p>
                        </div>

                    </div>

             <div className="columns">

                 <div className="column">
                     <h3 className="subtitle">Détails</h3>

                 </div>
                 <div className="column">

                 </div>
                 <div className="column">

                 </div>
             </div>




             <Ligne ligne={item.lignes}/>


             <div className="columns">

                 <div className="column">

                 </div>
                 <div className="column">

                 </div>
                 <div className="column">

                 </div>
             </div>

             <div className="columns">

                 <div className="column is-2"></div>

                 <div className="column is-2"></div>

                 <div className="column is-2"></div>
                 <div className="column is-2"></div>
             </div>
             <div className="columns">

                 <div className="column is-2"></div>

                 <div className="column is-2"></div>

                 <div className="column is-2"></div>
                 <div className="column is-2"></div>
             </div>
             <div className="columns">

                 <div className="column is-2"></div>

                 <div className="column is-2"></div>

                 <div className="column is-2"></div>
                 <div className="column is-2"></div>
             </div>



         </div>
             ))

   }
    return (
        <div className="container">

            <div className="columns">

                <div className="column is-2">

                </div>
                <div className="column is-2">

                </div>
                <div className="column is-2">

                </div>
            </div>

            {content}


        </div>)

}

AffLot.propTypes = {
    lot: PropTypes.array
};


export default AffLot;