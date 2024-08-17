import { product } from "@/app/models/product"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export async function POST(req,res) {

    try {

        const {name,age} = await req.json()
        let user = await product.findOne({name:name})
        if(user == null){
                    throw new Error("user not found")
                }

        const match = await bcrypt.compare(age,user.age)

       const token =  jwt.sign({
           _id:user.id,
           name:user.name 
        }, process.env.SECRET_KEY,{ 
            expiresIn:"30d" })
        // console.log("your token is ",token) 
        


        if(match){
        
            return NextResponse.json({message: "Login Successful" ,success:true,user ,token})
            
        }else{
            return NextResponse.json({message:"password is wrong"})
        }

        

    
    } catch (error) {
        return NextResponse.json({message:error.message,success:false})
       
    }

}

