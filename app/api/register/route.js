import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, password } = req.json();
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
