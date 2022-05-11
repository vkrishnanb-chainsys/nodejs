//private/local
const secretGroup = 'SECURE GROUP';

//shared
const myGroup = 'Group';

const echo = (name) => {
  console.log(name);
};

//exported only few not all (secretGroup not exported)
module.exports = { echo, myGroup };
