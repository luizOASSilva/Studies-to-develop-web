exports.csfrCheck = (err, req, res) => {
    if(err && err.code === 'EBADCSRFT') {
        return res.render('404');
    }
};

exports.csfr = (res, req, next) => {
    res.locals.csfr = req.csfrToken();
    next();
};
