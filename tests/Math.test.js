const { getGreatCircleDistance } = require("../src/math");

test('get great circle distance between two different points', () => {

  const coordinates = {
    longitude1: -122.0368100,
    latitude1: 48.9642200,
    longitude2: -122.072989,
    latitude2: 48.965496
  };

  expect(getGreatCircleDistance(coordinates)).toBe(2.645);
});


test('get great circle distance between two equals points', () => {
  const coordinates = {
    longitude1: -122.0368100,
    latitude1: 48.9642200,
    longitude2: -122.0368100,
    latitude2: 48.9642200
  };

  expect(getGreatCircleDistance(coordinates)).toBe(0);
});

test('get great circle distance between two points with distance is 99.988 km, but it is round to 100.', () => {
  const coordinates = {
    longitude1: -6.257664,
    latitude1: 53.339428,
    longitude2: -7.63710,
    latitude2: 52.986375
  };

  expect(getGreatCircleDistance(coordinates)).toBe(99.988);
});

test('get great circle distance between two points with distance is 100.098 km, but it is round to 100.', () => {
  const coordinates = {
    longitude1: -6.257664,
    latitude1: 53.339428,
    longitude2: -7.63889,
    latitude2: 52.986375
  };

  expect(getGreatCircleDistance(coordinates)).toBe(100.098);
});
