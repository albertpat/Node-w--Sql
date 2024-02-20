import mysql from "mysql";
import config from "../config";
const connection = mysql.createPool(config.mysql);

/**
 * 
 * @param {string} qryStr string of sql to query the database
 * @param {arry} values a list of parameterized values for the sql query
 * @returns async returns either an error or response from database
 */

function query(qryStr, values) {
    return new Promise((res,rej) => {
        connection.query(qryStr,values, (err, results) => {
            if(err) rej(err);
            res(results);
        });
    });

}

export default query;