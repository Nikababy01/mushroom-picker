import React from 'react';

import './Basket.scss';

import Mushroom from '../Mushroom/Mushroom';
// import Basket from '../../helpers/data/mushroomData';

class Basket extends React.Component {
  render() {
    const { basket } = this.props;
    const makeMushrooms = basket.map((mushroom) => (
    <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div>
        <h2>Picked Mushrooms</h2>
      <div className="Basket d-flex flex-wrap">
       {makeMushrooms}
      </div>
      </div>
    );
  }
}


export default Basket;
