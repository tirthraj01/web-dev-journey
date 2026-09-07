import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    //req.body?

    const data = await req.json();

    console.log(data);
    
    return NextResponse.json({ message: " you have signed up!" }, { status: 200 });
}
