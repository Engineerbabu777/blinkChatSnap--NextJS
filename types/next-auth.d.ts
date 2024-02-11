import { ObjectId } from "mongoose";
import { Session,DefaultSession } from "next-auth";


declare module "next-auth" {
    interface User {
      _id: ObjectId
    }
  
    interface Session extends DefaultSession {
      user?: User;
    }
  }