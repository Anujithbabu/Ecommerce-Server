//import db

const { default: mongoose } = require('mongoose');
const db = require('./db');

//get all products details from db

const getProducts=()=>{
   return db.Product.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                products:result
            }
        }
        else{
            return{
                status:false,
                statusCode:402,
                message:'Product not found'
            }
        }
    }
   )
}


//addtowishlist details store to db
const addtowishlist = (id,title,price,image,description)=>{
    return db.wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Product already added',
                }
            }
            else{
                const newProduct = new db.wishlist({
                    id,title,price,image,description
                })
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Product added successfully',
                }
            }
        }
    )
}

//get wishlist products details from db

const getwishlist=()=>{
    return db.wishlist.find().then(
     (result)=>{
         if(result){
             return{
                 status:true,
                 statusCode:200,
                 products:result
             }
         }
         else{
             return{
                 status:false,
                 statusCode:402,
                 message:'wishlist is empty'
             }
         }
     }
    )
 }
 // delete the  product from wishlist
 const deletewish=(id)=>{
    return db.wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result,
                    message:'Product removed successfully'
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'wishlist is empty'
                }
            }
        }
    )
 }

 


module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}