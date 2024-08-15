import { NextResponse  } from "next/server"

let obj  = [
    {
    id: 1,
    first_name: "Valma",
    last_name: "Fourmy",
    email: "vfourmy0@woothemes.com",
    gender: "Female"
},
{
    id:2,
    first_name: "Vadflma",
    last_name: "Fodurmy",
    email: "vfourmdsy0@woothemes.com",
    gender: "Femalde"
} ]

export async function GET() {

  return  NextResponse.json(obj)
}


export async function POST(req,res) {
    let data = await req.json()
    console.log(data)
    // console.log(data.name)
    return  NextResponse.json(data)
    // return  NextResponse.json({name:"vaseem",age:25})
    // return  NextResponse.json({result : 'success'}, {status:200})
  }
  

