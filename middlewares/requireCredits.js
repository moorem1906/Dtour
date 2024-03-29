module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        //404 code is forbidden access
        return res.status(403).send({ error: "Not enough credits!"});
    }
    next();
};