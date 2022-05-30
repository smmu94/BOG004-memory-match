const getData = () => {
  return new Promise((resolve, reject) => {
    fetch("./data/marvel/marvel.json")
      .then((resp) => resp.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export default getData;