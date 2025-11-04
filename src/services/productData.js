export const getImage = (name) => {
  switch (name) {
    case 'buisnessWoman': return require('../assets/buisnessWoman.jpg');
    case 'hatWoman': return require('../assets/hatWoman.jpg');
    case 'redWomen': return require('../assets/redWomen.jpg');
    case 'yellowWoman': return require('../assets/yellowWoman.jpg');
    case 'youngWoman': return require('../assets/youngWoman.jpg');
    case 'manLinen': return require('../assets/manLinen.jpg');
    case 'manDenim': return require('../assets/manDenim.jpg');
    case 'manChekeredshirt': return require('../assets/manChekeredshirt.jpg');
    case 'manVarsityJacket': return require('../assets/manVarsityJacket.jpg');
    case 'womanJersey': return require('../assets/womanJersey.jpg');
    default: return require('../assets/buisnessWoman.jpg'); // fallback to business woman image
  };
};

export const productsData = {
  womens: [
    {
      id: '1',
      imageName: 'buisnessWoman',
      title: 'Business Attire',
      price: '$129.99',
      category: 'womens'
    },
    {
      id: '2',
      imageName: 'hatWoman',
      title: 'Summer Collection',
      price: '$89.99',
      category: 'womens'
    },
    {
      id: '3',
      imageName: 'redWomen',
      title: 'Evening Wear',
      price: '$159.99',
      category: 'womens'
    },
    {
      id: '4',
      imageName: 'yellowWoman',
      title: 'Casual Style',
      price: '$79.99',
      category: 'womens'
    },
    {
      id: '5',
      imageName: 'youngWoman',
      title: 'Urban Fashion',
      price: '$99.99',
      category: 'womens'
    },
    {
      id: '6',
      imageName: 'womanJersey',
      title: 'Sports Collection',
      price: '$79.50',
      category: 'womens'
    }
  ],
  mens: [
    {
      id: 'm1',
      imageName: 'manLinen',
      title: 'Linen Collection',
      price: '$129.99',
      category: 'mens'
    },
    {
      id: 'm2',
      imageName: 'manDenim',
      title: 'Denim ',
      price: '$89.99',
      category: 'mens'
    },
    {
      id: 'm3',
      imageName: 'manChekeredshirt',
      title: 'Checkered Shirt',
      price: '$69.99',
      category: 'mens'
    },
    {
      id: 'm4',
      imageName: 'manVarsityJacket',
      title: 'Varsity Jacket',
      price: '$149.99',
      category: 'mens'
    },
    {
      id: 'm5',
      imageName: 'manSuit',
      title: 'Classic Suit',
      price: '$199.99',
      category: 'mens'
    }
  ],
  trending: [
    {
      id: 't1',
      image: require('../assets/redWomen.jpg'),
      title: 'Evening Collection',
      price: '$159.99',
      category: 'trending'
    },
    {
      id: 't2',
      image: require('../assets/yellowWoman.jpg'),
      title: 'Summer Style',
      price: '$79.99',
      category: 'trending'
    },

  ]
};