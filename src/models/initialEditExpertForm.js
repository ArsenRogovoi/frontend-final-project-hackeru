const initEditExpertForm = (user) => {
  const {
    username: { firstName, lastName },
    email,
    bio,
    specialization,
    contactPhone,
    address: { country, city, street, houseNum },
  } = user;

  return {
    firstName,
    lastName,
    email,
    bio,
    specialization,
    contactPhone,
    country,
    city,
    street,
    houseNum: houseNum.toString(),
  };
};

export default initEditExpertForm;
