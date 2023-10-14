import { NextRequest, NextResponse } from "next/server";
import connect from "@/helpers/dbConfig";
import isUserExist from "@/helpers/isUserExist";
import User from "@/models/userMode";
import getHashedPassword from "@/helpers/getHashedPassword";

connect();
// end of expor
export async function POST(req: NextRequest) {
  try {
    const { fullname, email, password } = await req.json();
    console.log({ name: fullname, email, password });
    // don't trust your client | Initail validation
    if (!fullname || !email || !password)
      return NextResponse.json(
        {
          message: "Please fill all the fileds",
        },
        { status: 500 }
      );
    // check if userExist
    console.log("workign i");
    const user = await isUserExist(email);
    if (user) {
      return NextResponse.json(
        { mesasage: "User Exist Please SignIn instead" },
        { status: 500 }
      );
    }
    console.log("user not exist");
    // if everything is okay save it
    const hashedPassword = await getHashedPassword(password);
    console.log(hashedPassword);
    // create newUser to save
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    const saveUser = await newUser.save();
    console.log("User saved successfully ", { userEmail: saveUser.email });

    return NextResponse.json(
      {
        message: "User Registered Successfull",
        succss: true,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Errro occured during resitration error:" + error.message,
      },
      {
        status: 500,
      }
    );
  }
}
