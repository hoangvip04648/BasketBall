
var mssql = require('mssql/msnodesqlv8');

var pool = new mssql.ConnectionPool({
    server: 'LAPTOP-PSDH214Q',
    database: 'db_app',
    options: {
        trustedConnection: true
      }
}).connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

// exports.connect=function(err) {
//   if (err) throw err;
//   console.log("Connected!!!")
// };



// exports.getPhim=function(){
// 	return new Promise(function(resolve,reject){
// 		pool.query("select * from phim;",function(err,rows,fields){
// 			if(err) reject(err);
// 			resolve(rows);
// 		});
// 	});
// }
module.exports = pool;


