
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
//app.set('port', process.env.PORT || 3000);
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var dbconfig = {
    user: 'sa',
    password: '@bcd!234',
    server: 'TFSSLAP24',
    database: 'TestDB',
    port: '1433'
};

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function (req, res) {
    console.log("Got a GET request for default page");
   
    var sql = require('mssql');
    var conn = new sql.Connection(dbconfig);
    var req = new sql.Request(conn);
    var result;
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            req.query('select EmpID, EmpName, Designation, Convert(varchar,DOJ,101) as DOJ from Employee').then(function (recordset) {
                result = recordset;
                console.log(result);
                res.render('Show', { result: result, title: 'Employee List' });
            });
        }
    });
})

app.get('/add', function (req, res) {
    console.log("Got a ADD request");
    
    var url = require('url');
    var params = url.parse(req.url, true).query;
    if (params.EmpID == undefined) {
        res.render('Add', { result: null, title: 'Add Employee' });
    }
    else {
        var EmpId, EmpName, Desig, DOJ;
        EmpId = params.EmpID;
        EmpName = params.EmpName;
        Desig = params.Desig;
        DOJ = params.DOJ;
        var query = 'insert into Employee values (' + EmpId + ', \'' + EmpName + '\', \'' + Desig + '\', \'' + DOJ + '\')';
        query += '; select EmpID, EmpName, Designation, Convert(varchar,DOJ,101) as DOJ from Employee';
        var sql = require('mssql');
        var conn = new sql.Connection(dbconfig);
        var req = new sql.Request(conn);
        var result;
        conn.connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                req.query(query).then(function (recordset) {
                    result = recordset;
                    console.log(result);
                    res.render('Show', { result: result, title: 'Employee List' });
                });
            }
        });
    }
})

app.get('/edit', function (req, res) {
    console.log("Got a EDIT request");

    var url = require('url');
    var params = url.parse(req.url, true).query;
    if (params.id == undefined) {
        if (params.EmpID == undefined) {
            res.end("Invalid Employee ID, unable to process request...");
        }
        else {
            var EmpId, EmpName, Desig, DOJ;
            EmpId = params.EmpID;
            EmpName = params.EmpName;
            Desig = params.Desig;
            DOJ = params.DOJ;
            var query = 'update Employee set EmpName=\'' + EmpName + '\', Designation=\'' + Desig + '\', DOJ=\'' + DOJ + '\' where EmpID=' + EmpId;
            query += '; select EmpID, EmpName, Designation, Convert(varchar,DOJ,101) as DOJ from Employee';
            var sql = require('mssql');
            var conn = new sql.Connection(dbconfig);
            var req = new sql.Request(conn);
            var result;
            conn.connect(function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    req.query(query).then(function (recordset) {
                        result = recordset;
                        console.log(result);
                        res.render('Show', { result: result, title: 'Employee List' });
                    });
                }
            });
        }
    }
    else {
        var sql = require('mssql');
        var conn = new sql.Connection(dbconfig);
        var req = new sql.Request(conn);
        var result;
        conn.connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                req.query('select EmpID, EmpName, Designation, Convert(varchar,DOJ,101) as DOJ from Employee where EmpID=' + params.id).then(function (recordset) {
                    result = recordset;
                    console.log(result);
                    res.render('Edit', { result: result, title: 'Modify Employee' });
                });
            }
        });
    }
})

app.get('/delete', function (req, res) {
    console.log("Got a DEL request");

    var url = require('url');
    var params = url.parse(req.url, true).query;
    if (params.id != undefined) {
        var EmpId;
        EmpId = params.id;
        var query = 'delete from Employee where EmpID=' + EmpId;
        query += '; select EmpID, EmpName, Designation, Convert(varchar,DOJ,101) as DOJ from Employee';
        var sql = require('mssql');
        var conn = new sql.Connection(dbconfig);
        var req = new sql.Request(conn);
        var result;
        conn.connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                req.query(query).then(function (recordset) {
                    result = recordset;
                    console.log(result);
                    res.render('Show', { result: result, title: 'Employee List' });
                });
            }
        });
    }
    else {
        var sql = require('mssql');
        var conn = new sql.Connection(dbconfig);
        var req = new sql.Request(conn);
        var result;
        conn.connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                req.query('select EmpID, EmpName, Designation, Convert(varchar,DOJ,101) as DOJ from Employee').then(function (recordset) {
                    result = recordset;
                    console.log(result);
                    res.render('Show', { result: result, title: 'Employee List' });
                });
            }
        });
    }
})

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});