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
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Kay',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Marian',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Chasity',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Derrick',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Ray',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Tyree',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Tiara',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Chase',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'King',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Chosen',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Demetria',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Kelby',
    description: 'regular',
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
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
    imgUrl: 'https://1left.files.wordpress.com/2012/10/dsc05091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

let basket = [];

const getMushrooms = () => mushrooms;
const getBasket = () => basket;

const killAllMushrooms = () => {
  basket = getBasket();
  basket.splice(0, basket.length);
  return basket;
};

const killTwoMushrooms = () => {
  basket = getBasket();
  if (basket.length < 2) {
    basket.splice(0, basket.length);
  } else {
    basket.splice(0, 2);
  }
  return basket;
};

const magicWinsAll = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isMagic === false && mushroom.isPoisonous === false) {
      basket.push(mushroom);
    }
  });
  return basket;
};


const pickAMushroom = () => {
  const pickedMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (pickedMushroom.isDeadly) {
    killAllMushrooms();
    console.log('I killed All');
  } else if (pickedMushroom.isPoisonous) {
    killTwoMushrooms();
    console.log('I killed two');
  } else if (pickedMushroom.isMagic) {
    magicWinsAll();
    console.log('added all with magic');
  } else {
    basket.push(pickedMushroom);
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
