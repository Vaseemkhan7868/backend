import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { product } from "@/app/models/product"
import bcrypt from "bcrypt";



export async function GET() {
 try {
   let connection = await mongoose.connect("mongodb://localhost:27017")
  let dat = await product.find()
  console.log({result:"success"})
   return NextResponse.json({msg:dat}) 
  

  

 } catch (error) {
   console.log("connection is failled",error)
 }

}

let data = new product({
  name:"vaseem",
 age:21,
})

// export async function POST(req,res) {
//   await mongoose.connect("mongodb://localhost:27017")
  
//   let result = await data.save()
//   return NextResponse.json({result ,success:true})
//  }
 

export async function POST(req,res) {
  await mongoose.connect("mongodb://localhost:27017")

  // let body = await req.json()

  let {name,age} = await req.json()

  
  // let user = new product(body)
  let user = new product({
    name , age,
  })

  const saltRounder = await bcrypt.genSalt(10)
  user.age = await bcrypt.hash(user.age, saltRounder)
  let result = await user.save()
  console.log(result)
  return NextResponse.json({success:true , status:201 , result })
 
 }
 




 let securePassword = async (password) => {
  let passwordHash = await bcrypt.hash(password,10)
  console.log("the hash password is",passwordHash)
 }

// securePassword('vaseem')













// export async function POST(req,res) {
//   await mongoose.connect("mongodb://localhost:27017")

 // let body = await req.json()
  // let user = new product(body)
//   let result = await user.save()
//   console.log(result)
//   return NextResponse.json({success:true , status:201 , result })
 
//  }
 

// let result = await prod.save()
// let result = await product.create(prod)   // second way