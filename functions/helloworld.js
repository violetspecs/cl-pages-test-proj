import { drizzle } from 'drizzle-orm/d1';
import { countries } from '../db/index'

export async function onRequest(context) {
    const db = drizzle(context.env.DB);
    const result = await db.select().from(countries).all()
    return Response.json(result);
}