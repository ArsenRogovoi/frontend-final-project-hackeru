const normalizeExpertSignup = (user) => {
  const { firstName, lastName, country, city, street, houseNum } = user;
  delete user.firstName;
  delete user.lastName;
  delete user.country;
  delete user.city;
  delete user.street;
  delete user.houseNum;
  return {
    ...user,
    username: {
      firstName,
      lastName,
    },
    address: {
      country,
      city,
      street,
      houseNum,
    },
  };
};
export default normalizeExpertSignup;
