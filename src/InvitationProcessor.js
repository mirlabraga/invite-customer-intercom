const { getGreatCircleDistance } = require("./Math");

const POINT_OF_INTEREST = process.env.POINT_OF_INTEREST || { latitude: 53.339428, longitude: -6.257664 };
const DISTANCE_FOR_INVITE = process.env.DISTANCE_FOR_INVITE || 100;

async function execute(reporter, customers) {

  try {
    customers.sort((customer1, customer2) => customer1.user_id - customer2.user_id);

    for (let i = 0; i < customers.length; i++) {

      const coordinates = {
        longitude1: customers[i].longitude,
        latitude1: customers[i].latitude,
        longitude2: POINT_OF_INTEREST.longitude,
        latitude2: POINT_OF_INTEREST.latitude
      };

      if (getGreatCircleDistance(coordinates) <= DISTANCE_FOR_INVITE) {
        const result = await reporter.write({name: customers[i].name, user_id: customers[i].user_id});
        console.info(`[INFO] ${result}`);
      }
    }
  } catch (error) {
    throw new Error("an error happened when process the customers invitation.", error);
  }
}


exports.execute = execute;
