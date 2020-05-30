/* eslint-disable no-alert */
const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Uno',
    description: 'magic',
    imgUrl: 'http://alliswall.com/file/9428/1920x1200/16:9/cool_mushroom_hd.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Rick',
    description: 'poisonous',
    imgUrl: 'https://i.ytimg.com/vi/lZZH2FpU5fw/maxresdefault.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Surabhi',
    description: 'poisonous',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Poisonous_Red_Cap_mushroom.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Priyanka',
    description: 'poisonous',
    imgUrl: 'http://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/88/179/92848638.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Chris',
    description: 'deadly',
    imgUrl: 'https://images.rxlist.com/images/slideshow/all-about-mushrooms/all-about-mushrooms-s7-beware-deadly-fungi.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom6',
    name: 'Derrick',
    description: 'regular',
    imgUrl: 'http://2.bp.blogspot.com/-glPz00DiVio/UD1uDBH9rPI/AAAAAAAAD30/OY_y7UhdNbM/s1600/Chanterelles+Edible+Mushroom.jpeg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Kay',
    description: 'regular',
    imgUrl: 'http://1.bp.blogspot.com/-VMaBGAe80mo/USvu5jkV-hI/AAAAAAAAACY/HgnBtrPzEz0/s1600/morel.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Marian',
    description: 'regular',
    imgUrl: 'http://www.herbalzym.com/wp-content/uploads/2012/01/shitake.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Chasity',
    description: 'regular',
    imgUrl: 'http://www.fsl.orst.edu/mycology/poster/B.%20edulis%20sml',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Jimmy',
    description: 'regular',
    imgUrl: 'http://somamushrooms.org/foraging/images/bolete.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Ray',
    description: 'regular',
    imgUrl: 'http://img-aws.ehowcdn.com/150X100/cme/cme_public_images/www_ehow_com/photos.demandstudios.com/getty/article/103/63/88015190_XS.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Tyree',
    description: 'regular',
    imgUrl: 'https://usercontent2.hubstatic.com/7290195_f120.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Tiara',
    description: 'regular',
    imgUrl: 'https://www.ediblewildfood.com/images/oyster-mushroom-thumbnails/oyster-mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Chase',
    description: 'regular',
    imgUrl: 'https://i.pinimg.com/736x/f7/a4/30/f7a430ebeb04f09030e382d2c7a5c700.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'King',
    description: 'regular',
    imgUrl: 'http://img-aws.ehowcdn.com/150X100/cpi-studiod-com/www_ehow_com/photos.demandstudios.com/getty/article/97/131/86526988_XS.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Chosen',
    description: 'regular',
    imgUrl: 'http://img-aws.ehowcdn.com/150X100/cme/cme_public_images/www_ehow_com/i.ehow.com/images/a07/mm/m8/common-edible-mushrooms-800x800.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Demetria',
    description: 'regular',
    imgUrl: 'http://utahediblemushrooms.weebly.com/uploads/2/5/7/7/2577928/7608134.jpg?154x158',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Kelby',
    description: 'regular',
    imgUrl: 'http://img-aws.ehowcdn.com/150X100/cme/cme_public_images/www_ehow_com/photos.demandstudios.com/getty/article/103/63/88015190_XS.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Jalaiya',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Memory',
    description: 'regular',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51R2OPEbHML._AC_UL160_SR115,160_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];

const getMushrooms = () => mushrooms;
const getBasket = () => basket;


const killAllMushrooms = (pickedMushroom) => {
  basket.splice(0, basket.length);
  alert('You picked a Deadly Mushroom!!!! Better Luck Next Time Loser!!');
};

const killTwoMushrooms = (pickedMushroom) => {
  if (basket.length < 2) {
    basket.splice(0, basket.length);
  } else {
    basket.splice(0, 2);
    alert('Oh No!!! You Picked a Poisonous Mushroom and it Killed Two of your Mushrooms!!!!');
  }
};

const magicWinsAll = (pickedMushroom) => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isMagic === false && mushroom.isPoisonous === false) {
      basket.push(mushroom);
    }
  });
};

const winner = () => {
  const chkDup = Array.from(new Set(basket));
  if (basket.length >= 10) {
    basket.splice(0, basket.length);
    chkDup.splice(0, chkDup.length);
    alert('You Won !!!!');
  }
};

const pickAMushroom = () => {
  const pickedMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (pickedMushroom.isDeadly) {
    killAllMushrooms();
  } else if (pickedMushroom.isPoisonous) {
    killTwoMushrooms();
  } else if (pickedMushroom.isMagic) {
    alert('You picked a Magic Mushroom');
    magicWinsAll();
  } else {
    basket.push(pickedMushroom);
    winner();
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
