const requests = new Map<string, { count: number; first: number }>();

export function rateLimit(ip: string, limit = 5, interval = 60000) {
  const now = Date.now();

  if (!requests.has(ip)) {
    requests.set(ip, { count: 1, first: now });
    return true;
  }

  const data = requests.get(ip)!;

  if (now - data.first > interval) {
    data.count = 1;
    data.first = now;
    return true;
  }

  data.count++;

  return data.count <= limit;
}