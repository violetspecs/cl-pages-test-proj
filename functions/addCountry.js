import { drizzle } from 'drizzle-orm/d1';
import { countries } from '../db/index'

export async function onRequest(context) {
    const db = drizzle(context.env.DB);
    let data = await context.request.json()
    await db.insert(countries).values({ name: data.country });
    return new Response("Tried to add " + data.country);
}