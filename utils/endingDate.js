let today = new Date();
today.setDate(today.getDate()+ 5)
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const endingDate = dd + '/' + mm + '/' + yyyy;

module.exports = endingDate