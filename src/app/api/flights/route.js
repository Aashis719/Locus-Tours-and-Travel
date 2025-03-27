import { NextResponse } from "next/server";

export async function GET(req) {
  const { from = "", to = "", date = "", flightType = "domestic" } = req.query;
  const apiKey = process.env.AVIATIONSTACK_API_KEY;

  // Modify the URL to include filters based on user input
  const url = new URL("http://api.aviationstack.com/v1/flights");
  url.searchParams.append("access_key", apiKey);
  url.searchParams.append("limit", 10); // Limit results to 10

  if (flightType) {
    url.searchParams.append("flight_type", flightType);
  }

  if (from) {
    url.searchParams.append("departure_airport", from); // Filter by departure airport (from)
  }

  if (to) {
    url.searchParams.append("arrival_airport", to); // Filter by arrival airport (to)
  }

  if (date) {
    url.searchParams.append("flight_date", date); // Filter by flight date
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data && data.data) {
      return NextResponse.json(data); // Send the filtered data
    } else {
      console.error("No flight data found:", data);
      return NextResponse.json({ error: "No flight data available" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error fetching flights:", error);
    return NextResponse.json({ error: "Failed to fetch flights" }, { status: 500 });
  }
}
