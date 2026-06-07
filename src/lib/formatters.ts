export function formatAmount(amount: number): string {
  return amount.toLocaleString("nb-NO").replace(/,/g, " ") + " kr";
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const months = ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" });
}
