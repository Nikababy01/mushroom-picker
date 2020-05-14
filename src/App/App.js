import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';


class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    console.error('mushrooms', mushrooms);
    this.setState({ mushrooms });
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
  const { mushrooms } = this.state;
  return (
        <div className="App">
          <h1>Mushroom Picker</h1>
          <button className="btn btn-danger mb-2" onClick={this.pickAMushroomEvent}>Pick A Mushroom</button>
          <Forest mushrooms={mushrooms}/>
        </div>
  );
}
}

export default App;
