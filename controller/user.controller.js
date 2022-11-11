var db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var crypto = require("crypto");

module.exports.getUser = (req,res)=>{
    try {
        const {token} = req.body;
        if(token==null){
            return res.status(422).json({
                msg: "Please provide the token",
            });
        }
        const theToken = token;
        jwt.verify(theToken, process.env.SECRECT,(err,decoded)=>{
            if(err){
                return res.json({msg:err})
            }else{
                const sql = 'SELECT id,username,name,email,avartar,ruler,status FROM user WHERE id = ? ';
                db.query(sql,[decoded.id],(err,rows,fields)=>{
                    if (err) {
                        return res.json({msg:err});
                    }else{
                        return res.json(rows);
                    }
                })
            }

        });
      
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
   
}

module.exports.register = (req,res)=>{
    try {
        
        const {email,password,username} = req.body;
        const role = 0;
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charLength = chars.length;
        var result = '';
        for ( var i = 0; i < 35; i++ ) {
           result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        const sql = 'SELECT * FROM user WHERE user_email = ? ';
        db.query(sql,[email],async(err,rows,fields)=>{
            //Check email exist ?
            if(rows.length > 0 ){
                return res.status(201).json({
                    msg: "The E-mail already in use",
                });
            }
            //create password with code bcrypt
            const hashPass = await bcrypt.hash(password, 12);
            const sqlwallet = 'INSERT INTO `wallet`(`wallet_code`) VALUES(?)';
            db.query(sqlwallet,[result],(err,rows1,fields)=>{
                if (err) {
                    return err;
                }

                const sqlRegister = 'INSERT INTO `user`(`user_name`,`user_email`,`user_pass`,`wallet_id`,`role`) VALUES(?,?,?,?,?)';
                db.query(sqlRegister,[username,email,hashPass,rows1.insertId,role ],(err,rows,fields)=>{
                    if (err) {
                        return res.json({msg:err});
                    }
                    return res.status(201).json({
                        success: "The user has been successfully inserted.",
                    });
                })

                return res.status(201).json({
                    success: rows,
                });
            })

        })
    }catch (error) {
        return res.status(500).json({ msg: error.message });
    } 
}

module.exports.login = (req,res)=>{
    try {
        const {username,password} = req.body;
        const sql = 'SELECT * FROM user WHERE user_email = ? ';
    
        db.query(sql,[username],async(err,rows,fields)=>{
            if (err) {
                return res.json({msg:err});
            }
            //Check account exist
            if(rows.length ===0 ){
                return res.status(422).json({
                    msg: "Invalid account",
                });
            }else{
                //Confirm password
                const passMatch = await bcrypt.compare(password,rows[0].user_pass);
                if(!passMatch){
                    return res.status(422).json({
                        msg: "Incorrect password",
                    });
                }else{
                    const theToken = jwt.sign({id:rows[0].user_id },process.env.SECRECT,{ expiresIn: '1h' });
                    return res.json({
                        msg:"Success",
                        token:theToken
                    });
                }
            }
        })
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
}

module.exports.checkEmail = (req,res)=>{
    const {email} = req.body;
    const sql = 'SELECT * FROM user WHERE email = ? ';
    db.query(sql,[email],async(err,rows,fields)=>{
        //Check email exist ?
        if(rows.length > 0 ){
            return res.status(201).json({
                msg: "The E-mail already in use",
            });
        }
        else{
            return res.json({success: "Continue register"})
        }
    }
    )
}
module.exports.generate = (req,res)=>{
    
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < 35; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   
    const sql = 'SELECT * FROM user WHERE email = ? ';
    db.query(sql,[email],async(err,rows,fields)=>{
        //Check email exist ?
        if(rows.length > 0 ){
            return res.status(201).json({
                msg: "The E-mail already in use",
            });
        }
        else{
            return res.json({success: "Continue register"})
        }
    }
    )
    return res.status(201).json({
        result
    });
}
