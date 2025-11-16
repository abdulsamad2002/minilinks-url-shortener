import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { notFound, redirect, RedirectType } from "next/navigation";

export async function GET(request, { params }) {
  const unwrapped = await params;
  const code = unwrapped.code;

  const client = await clientPromise;
  const db = client.db("minilinks");
  const collection = db.collection("url");

  const result = await collection.findOne({ short_code: code });

  if (result) {
    redirect(result.url, RedirectType.push);
  } else {
    redirect("/notfound", RedirectType.replace);
  }

  return NextResponse.json({ success: true, code: code, result: result });
}
