export default ({email, password}) => {
  if (email !== 'user1@mail.ru') {
    throw new Error('User does not create!!!');
  };
};