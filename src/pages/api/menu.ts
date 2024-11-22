import type { NextApiRequest, NextApiResponse } from 'next';

const menu = [
  {
    id: 1,
    name: 'Sweet potato bowl',
    price: '$7',
    description: 'Delicious sweet potato korean style salad.',
    allergyInfo: 'Contains nuts',
    image: '/images/menu-item1.jpg',
  },
  {
    id: 2,
    name: 'Tofu tempura',
    price: '$5',
    description: 'A refreshing mix of tofu and veggies .',
    allergyInfo: 'Contains Nuts',
    image: '/images/menu-item2.jpg',
  },
  {
    id: 3,
    name: 'Shehjar Smoothie',
    price: '$7',
    description: 'mix of veggies,fruits,nuts and protein.',
    allergyInfo: 'Contains nuts,Whey',
    image: '/images/menu-item3.jpg',
  },
  {
    id: 4,
    name: 'Color Salad',
    price: '$5',
    description: 'A refreshing mix of organic veggies.',
    allergyInfo: 'Contains Nuts',
    image: '/images/menu-item4.jpg',
  },
  {
    id: 5,
    name: 'Avocado Green Bowl',
    price: '$7',
    description: 'Delicious organic avocado on greens.',
    allergyInfo: 'Contains nuts',
    image: '/images/menu-item5.jpg',
  },
  {
    id: 6,
    name: 'Okra Fest',
    price: '$5',
    description: 'A refreshing mix of okra fry.',
    allergyInfo: 'None',
    image: '/images/menu-item6.jpg',
  },
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(menu);
};

export default handler;
