var result;

exports.index = function (req, res) {
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
            res.render('/', {}); 
            break;
        case '/show':
            res.render('show', {}); 
            break;
        default:
            res.render('index', {}); 
    }
};

var dbconfig = {
    user: 'sa',
    password: '@bcd!234',
    server: 'TFSSLAP24',
    database: 'TestDB',
    port: '1433'
};

function GetBooks(id) {
    var sql = require('mssql');
    var conn = new sql.Connection(dbconfig);
    var req = new sql.Request(conn);
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            req.query('select Top 1 * from book where BookId=' + id).then(function (recordset) {
                result = recordset[0].Title;               
            });
        }
    });
}