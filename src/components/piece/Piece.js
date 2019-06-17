import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context';


function Piece(props) { // eslint-disable-line react/prefer-stateless-function

    let content = "";
    function handleClick(e) {
        ThemeContext._currentValue = []
        var currPiece =  props.piece.filter((item) => item.label === e.target.text)

      if (currPiece[0] === undefined)
          ThemeContext._currentValue.push(0);
        else
            ThemeContext._currentValue.push(currPiece[0].uuid)
    }

    if (props.piece){
        content =  props.piece.map((item) => (

            <div  onClick={handleClick} className="column" key={item.label}>
                    <a className="button is-outlined"
                    >{item.label}</a>
                </div>
        ));
    }

    return (
        console.log(ThemeContext),
        <div>
            <h2 className="title">Pièce</h2>
        <div className="columns is-mobile">
            <div className="column"></div>
            {content}
         <div className="column">

             <a onClick={handleClick} className="button is-outlined">Autre prestations</a>

         </div>

            <div className="column"></div>
        </div>
        </div>
    )
}


Piece.propTypes = {
    piece: PropTypes.array
};


export default Piece;
