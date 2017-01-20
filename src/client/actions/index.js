export const FRUIT_LOADED = 'fruit/fruitLoaded';
export const FINAL_FRUITS = 'fruit/finalFruits';

const FRUIT_ON_FULFILLMENT = { icon: 'paper-plane', color: '#cd4436' };

const icons = ['ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car',
  'fighter-jet', 'motorcycle', 'plane', 'rocket', 'ship', 'space-shuttle',
  'subway', 'train', 'truck'];

const colors = ['#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4',
  '#2095F2', '#02A8F3', '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447',
  '#9D9D9D', '#5F7C8A'];

const randomTime = () => (Math.floor(Math.random() * 5) + 1) * 1000;
const randomPick = set => set[(Math.floor(Math.random() * set.length))];

/* setTimeout should never fail, thus we avoid rejection */
const loadFruit = ({ id }) => new Promise((resolve) => {
  setTimeout(() => resolve({
    id,
    icon: randomPick(icons),
    color: randomPick(colors),
  }),
  randomTime());
});

export const addFruit = fruit => ({
  type: FRUIT_LOADED,
  payload: fruit,
});

export const finalFruits = () => ({
  type: FINAL_FRUITS,
  payload: FRUIT_ON_FULFILLMENT,
});

export const loadFruits = () => (dispatch, getState) => {
  const { fruits } = getState();

  const promises = fruits.map(fruit =>
    loadFruit(fruit).then(value =>
      dispatch(addFruit(value))
  ));

  return Promise.all(promises)
    .then(() => dispatch(finalFruits()))
    .catch((error) => {
      console.log('error: ', error); // eslint-disable-line no-console
      return error;
    });
};

export default { addFruit, finalFruits, loadFruits };
