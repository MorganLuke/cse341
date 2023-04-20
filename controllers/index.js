const awesomeFunction = (req, res, next) => {
    res.json('Mike Little');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

module.exports = {awesomeFunction, returnAnotherPerson};