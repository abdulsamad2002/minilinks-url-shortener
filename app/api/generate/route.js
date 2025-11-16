import clientPromise from "@/lib/mongodb";

async function generateShortCode(length = 7) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("minilinks");
  const collection = db.collection("url");

  const data = await request.json();
  let code;
  while (true) {
    code = await generateShortCode();

    const doc = await collection.findOne({ short_code: code });
    if (!doc) {
      break;
    }
  }
  const newData = { ...data, short_code: code };
  const result = await collection.insertOne(newData);

  return Response.json({ success: true, code: code, result: result });
}
