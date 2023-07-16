import mysql2 from 'mysql2';
// export const db = mysql2.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"9550462493@Aa",
//     database:"flexmoney",
// })

export const db = mysql2.createConnection({
    host:"containers-us-west-167.railway.app",
    user:"root",
    password:"jYmv8jQ3XhujJbyGoMU5",
    database:"railway",
    port:7156
})
