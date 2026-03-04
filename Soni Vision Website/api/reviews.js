export default async function handler(req, res) {
  const PLACE_ID = 'ChIJm5ROrNHRQIYRcHgZ0OJ481A';
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return res.status(502).json({ error: 'Places API error', status: data.status });
    }

    const { rating, user_ratings_total } = data.result;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({ rating, reviewCount: user_ratings_total });
  } catch (err) {
    return res.status(500).json({ error: 'Fetch failed' });
  }
}
