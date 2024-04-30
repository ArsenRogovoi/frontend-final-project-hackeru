const initEditUserForm = (user) => {
  const {
    username: { firstName, lastName },
    email,
  } = user;

  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
};

export default initEditUserForm;
