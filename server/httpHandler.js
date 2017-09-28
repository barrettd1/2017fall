exports.main = function(req, res, next){
    const path = req.url;
    res.write("Hello World. You requested " + path);
    res.end();
    next();
};