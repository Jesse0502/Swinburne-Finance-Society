/**
 * Formats a date string to "Day, OrdinalDate Month Year @ Hourpm/am" format
 * @param {string | Date} dateInput - Date string or Date object
 * @returns {string} Formatted date string (e.g. "Wed, 4th April 2025 @ 7pm")
 */
export function formatEventDate(dateInput: string | Date): string {
  const date = new Date(dateInput);

  // Validate date
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  // Get day name (Wed)
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

  // Get day with ordinal (4th)
  const day = date.getDate();
  const getOrdinal = (d: number): string => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const ordinal = getOrdinal(day);

  // Get full month name (April)
  const monthName = date.toLocaleDateString("en-US", { month: "long" });

  // Get full year (2025)
  const year = date.getFullYear();

  // Format time (7pm)
  const hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12am

  return `${dayName}, ${day}${ordinal} ${monthName} ${year} @ ${displayHours}${ampm}`;
}
