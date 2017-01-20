const fruitFactory = ({ quantity = 5 }) => {
  const fruits = [];
  for (let id = 0; id < quantity; id += 1) {
    fruits.push({ id, icon: '', color: '' });
  }
  return fruits;
};

export default fruitFactory;
