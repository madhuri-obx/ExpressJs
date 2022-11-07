
const fs = require('fs');

function getUsers(req,res) {
    let rawdata = fs.readFileSync('user.json');
    rawdata = JSON.parse(rawdata)
    res.send(rawdata)  
 }
 
 function getUser(req, res) {
    let rawdata = fs.readFileSync('user.json');
    rawdata = JSON.parse(rawdata)
    const lastName = req.params.lname;
    const usersWithLastName = rawdata.filter((user) =>{
       return user.lname.toLocaleLowerCase() == lastName.toLowerCase();
    })
    res.send(usersWithLastName);
 }
 
 function addUser(req, res) {
    let rawdata = fs.readFileSync('user.json');
    rawdata = JSON.parse(rawdata)
    const idNo = req.body.id;
    console.log(idNo)
    const usersWithid = rawdata.filter((user) =>{
        return  (user.id) == (idNo);  
     })
     if(usersWithid.length >0){
        res.send ("user alredy exists")
     }
     else {
        rawdata.push(req.body)
        fs.writeFileSync('user.json', JSON.stringify(rawdata));
    res.send('Added user');
     }  
       
 }
 
 function getUserWithFirstName(req, res) {
    let rawdata = fs.readFileSync('user.json');
    rawdata = JSON.parse(rawdata)
    const firstName = req.params.fname;
    const usersWithFirstName = rawdata.filter((user) =>{
       return user.fname.toLocaleLowerCase() == firstName.toLowerCase();
    })
    res.send(usersWithFirstName);
 }

 function deleteUser(req,res) {
    let rawdata = fs.readFileSync('user.json');
    rawdata = JSON.parse(rawdata)
    const fName = req.params.fname;
    const deleteUsersWithFirstName = rawdata.filter((user) =>{
        return user.fname.toLocaleLowerCase() !== fName.toLowerCase();
    })
    fs.writeFileSync('user.json', JSON.stringify(deleteUsersWithFirstName));

    res.send(deleteUsersWithFirstName);
 }
 module.exports = {
    getUsers,
    getUser,
    addUser,
    getUserWithFirstName,
    deleteUser
 }