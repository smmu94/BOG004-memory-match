import getData from "./getData";

const dataTest = {
  items: [
    {
      id: "captainAmerica",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72/standard_large.jpg",
    },
    {
      id: "hulk",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/5239b5d891fc1/standard_large.jpg",
    },
    {
      id: "ironMan",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/9/40/5239be60a67da/standard_large.jpg",
    },
    {
      id: "spiderMan",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/3/60/5317718f0a2e7/standard_large.jpg",
    },
    {
      id: "thor",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/c/20/5239be0b8ecd1/standard_large.jpg",
    },
    {
      id: "captainMarvel",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/standard_large.jpg",
    },
    {
      id: "antMan",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d/standard_large.jpg",
    },
    {
      id: "blackWidow",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/a/03/523219743a99b/standard_large.jpg",
    },
    {
      id: "deadPool",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99/standard_large.jpg",
    },
    {
      id: "wolverine",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_large.jpg",
    },
  ],
};

const unmockedFetch = window.fetch

beforeAll(() => {
  window.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(dataTest),
    })
})

afterAll(() => {
  window.fetch = unmockedFetch
})

describe("getData", () => {
  it("should return an array of objects", () => {
    expect(getData()).resolves.toEqual(dataTest);
  });

  it("should reject if fetch fails", () => {
    window.fetch = () =>
      Promise.reject({
        message: "Fetch failed",
      })
    expect(getData()).rejects.toEqual({
      message: "Fetch failed",
    });
  });
});