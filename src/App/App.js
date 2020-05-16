import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';


class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

pickAMushroomBtn = () => {
  mushroomData.pickAMushroom();
  const mushrooms = mushroomData.getMushrooms();
  const basket = mushroomData.getBasket();
  this.setState({ mushrooms, basket });
}

pickAMushroomEvent = (e) => {
  console.log('clicked mushroom picker');
  e.preventDefault();
  this.pickAMushroomBtn();
}


render() {
  const { mushrooms, basket } = this.state;
  return (
        <div className="App">
          <h1 className="mushroom-title">Mushroom Lovers</h1>
          <button className="btn btn-danger mb-2" onClick={this.pickAMushroomEvent}>Pick A Mushroom</button>
          <div className="row">
            <div className="col-6">
          <Forest mushrooms={mushrooms}/>
          </div>
          <div className="col-6">
          <Basket basket={basket}/>
        </div>
        </div>
        </div>
  );
}
}

export default App;
