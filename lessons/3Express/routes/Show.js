exports.Show = function (req, res) {
    /*    

    if (typeof (params['id']) != "undefined") {        
      GetBooks(params['id']);
      res.render('index', { title: 'NODE Express - ' + result });       
    }    
 */ 
    var url = require('url');
    var params = url.parse(req.url, true).query;
    
    switch (params.pathname) {
        case '/':
            res.render('index', {});
            break;
        case '/show':
            res.render('Show', {});
            break;
        default:
            res.render('index', {});
    }
};
