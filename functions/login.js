import { eq, and } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';
import { users } from '../db/index'

export async function onRequest(context) {
    const db = drizzle(context.env.DB);
    let request = await context.request.json()
    try {
        let result = await db.select().from(users).where(and(eq(users.username, request.username), eq(users.password, request.password)));
        console.log(result)
        if (result.length > 0) {
            return new Response("Successfully logged in")
        } else {
            return new Error("Unable to log in")
        }
    } catch(err) {
        return new Error("Some error occurred");
    }
}