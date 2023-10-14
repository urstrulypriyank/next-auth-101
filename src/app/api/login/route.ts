import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userMode";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import connect from "@/helpers/dbConfig";
import isUserExist from "@/helpers/isUserExist";
connect();
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log({ email, password });

    // check if user exist
    const user = await User.findOne({ email });

    console.log("exist");
    // does user exist
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credential" },
        { status: 400 }
      );
    }
    // is password correct
    const isPasswordSame = await bycrptjs.compare(password, user.password);
    if (!isPasswordSame) {
      return NextResponse.json(
        {
          error: "Invalid credential",
        },
        { status: 400 }
      );
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    // create a token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const res = NextResponse.json({
      message: "Login Sucessfull!",
      success: true,
    });
    res.cookies.set("token", token, {
      httpOnly: true,
    });

    // at last return res
    return res;
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
