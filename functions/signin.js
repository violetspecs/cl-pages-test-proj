import { drizzle } from 'drizzle-orm/d1';
import { users } from '../db/index'

export async function onRequest(context) {
    const db = drizzle(context.env.DB);
    // get info from request
    let request = await context.request.json()
    // insert user
    try {
        await db.insert(users).values({ username: request.username, password: request.password });
        return new Response("Successfully added");
    } catch(err) {
        return new Error("Unable to add new user");
    }
}