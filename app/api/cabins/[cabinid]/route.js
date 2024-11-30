import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  console.log(request);
  console.log(params);

  const { cabinid } = params;

  try {
    const [cabin, bookeddates] = await Promise.all([
      getCabin(cabinid),
      getBookedDatesByCabinId(cabinid),
    ]);
    return Response.json({ cabin, bookeddates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
