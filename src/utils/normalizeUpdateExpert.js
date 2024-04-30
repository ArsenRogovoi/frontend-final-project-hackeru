const normalizeUpdateExpert = (user) => {
  const {
    firstName,
    lastName,
    email,
    bio,
    specialization,
    contactPhone,
    country,
    city,
    street,
    houseNum,
  } = user;

  return {
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
    email,
    bio,
    specialization,
    contactPhone,
    isExpert: true,
  };
};

export default normalizeUpdateExpert;
