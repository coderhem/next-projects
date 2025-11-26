export async function POST(req) {
  try {
    const data = await req.json();
    // Normally save to DB
    const _id = Math.random().toString(36).substr(2, 9); // Dummy ID
    return new Response(JSON.stringify({ _id, ...data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
