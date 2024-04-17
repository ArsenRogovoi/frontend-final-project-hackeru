const normalizeRegularSignup = (user) => {
  const { firstName, lastName } = user;
  delete user.firstName;
  delete user.lastName;
  return {
    ...user,
    username: {
      firstName,
      lastName,
    },
  };
};
export default normalizeRegularSignup;
