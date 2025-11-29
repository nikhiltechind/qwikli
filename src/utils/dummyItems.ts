// ------------------ TYPES ------------------

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export type CategoryType = {
  [categoryName: string]: Product[];
};

// ------------------ DATA ------------------

export const categoryList: CategoryType = {
  electronics: [
    {
      id: 101,
      name: "Wireless Headphones",
      price: 1999,
      rating: 4.5,
      image: "https://example.com/products/headphones.jpg"
    },
    {
      id: 102,
      name: "Smartphone",
      price: 15999,
      rating: 4.3,
      image: "https://example.com/products/smartphone.jpg"
    },
    {
      id: 103,
      name: "Headphone",
      price: 1299,
      rating: 4.7,
      image: "https://images.pexels.com/photos/159463/headphones-instagram-video-games-razer-159463.jpeg?cs=srgb&dl=black-and-white-close-up-hanging-159463.jpg&fm=jpg"
    }
  ],

  clothing: [
    {
      id: 201,
      name: "Men's T-Shirt",
      price: 499,
      rating: 4.1,
      image: "https://i.pinimg.com/originals/1b/19/41/1b1941c4049995b37eb529c3cf8bc5e3.jpg"
    },
    {
      id: 202,
      name: "Women's Jacket",
      price: 1799,
      rating: 4.6,
      image: "https://example.com/products/jacket.jpg"
    },
    {
      id: 203,
      name: "Jeans",
      price: 999,
      rating: 4.3,
      image: "https://example.com/products/jeans.jpg"
    }
  ],

  books: [
    {
      id: 301,
      name: "The Psychology of Money",
      price: 299,
      rating: 4.9,
      image: "https://example.com/products/psychology-of-money.jpg"
    },
    {
      id: 302,
      name: "Atomic Habits",
      price: 349,
      rating: 4.8,
      image: "https://example.com/products/atomic-habits.jpg"
    },
    {
      id: 303,
      name: "Intro to Algorithms",
      price: 1999,
      rating: 4.4,
      image: "https://example.com/products/algorithms.jpg"
    }
  ],

  "home-appliances": [
    {
      id: 401,
      name: "Air Fryer",
      price: 3999,
      rating: 4.6,
      image: "https://example.com/products/air-fryer.jpg"
    },
    {
      id: 402,
      name: "Vacuum Cleaner",
      price: 5499,
      rating: 4.5,
      image: "https://example.com/products/vacuum-cleaner.jpg"
    },
    {
      id: 403,
      name: "Microwave Oven",
      price: 7499,
      rating: 4.4,
      image: "https://example.com/products/microwave.jpg"
    }
  ]
};
