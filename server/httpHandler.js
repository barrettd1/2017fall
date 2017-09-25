exports.main = function(req, res){
    const path = req.url;
    res.write("Hello World. You requested " + path);
    res.end();
};