// Parses a YYYY-MM-DD date key into a local Date at midnight.
export const parseDateKey = (date: string) => new Date(`${date}T00:00:00`);
