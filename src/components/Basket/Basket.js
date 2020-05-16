import React from 'react';
import PropTypes from 'prop-types';
import './Basket.scss';

import Mushroom from '../Mushroom/Mushroom';
import mushroomShape from '../../helpers/propz/mushroomShape';
// import Basket from '../../helpers/data/mushroomData';

class Basket extends React.Component {
  static propTypes = {
    basket: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    const makeMushrooms = basket.map((mushroom) => (
    <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div>
        <h2 className="garden"><strong><em>Basket of Picked Mushrooms</em></strong></h2>
      <div className="Basket d-flex flex-wrap">
       {makeMushrooms}
      </div>
      </div>
    );
  }
}


export default Basket;
