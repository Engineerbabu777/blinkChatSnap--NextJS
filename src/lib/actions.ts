"use server";
// import { auth, signIn, signOut } from "@/auth";
// import { connectToMongoDB } from "./db";
// import { v2 as cloudinary } from "cloudinary";
// import Message, { IMessageDocument } from "@/models/messageModel";
// import Chat, { IChatDocument } from "@/models/chatModel";
// import { revalidatePath, unstable_noStore as noStore } from "next/cache";
// import { redirect } from "next/navigation";

// cloudinary.config({
	// cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	// api_key: process.env.CLOUDINARY_API_KEY,
	// api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export async function authAction() {
	try {
		// await signIn("github"); // redirect()
	} catch (error: any) {
		if (error.message === "NEXT_REDIRECT") {
			throw error;
		}
		return error.message;
	}
}

