"use server";

import { error } from "console";
import { db } from "./src/db";
import { responses } from "./src/db/schemas";

import { SqliteError } from "better-sqlite3";
import { redirect } from "next/navigation";



export async function  contactUsAction (formdata: FormData):Promise<void>{



 try {
     await db.insert(responses).values({
       name: formdata.get('name')as string,
    email:formdata.get('email')as string,

    message:formdata.get('message')as string,
     })
     redirect('/responses')
    
 } catch (err) {
    if(err instanceof SqliteError)
        return{
    success: false,
    error:err.message,

    }
 }
    

}