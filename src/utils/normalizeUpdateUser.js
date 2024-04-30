const normalizeUpdateUser = (updObj) => {
  const { firstName, lastName, email } = updObj;
  return {
    username: {
      firstName: firstName,
      lastName: lastName,
    },
    email: email,
    isExpert: false,
  };
};
export default normalizeUpdateUser;
