import mongoose from "mongoose";
import bcrypt from "bcrypt";

const productModels = new mongoose.Schema({
    name:String,
    age:{
        type:String,
        required:true
    },
})



// productModels.pre('save' , async function(next) {
   
//     if(!this.isModified('age')){
//         next()
//     }
//     try {
//         const saltRounder = await bcrypt.genSalt(10)
//         const hash_password = await bcrypt.hash(this.age, saltRounder)
//         this.age = hash_password
//     } catch (error) {
//         next(error)
//     }
// });





 
export const product = mongoose.models.product || new mongoose.model("product" , productModels);



// npm run dev