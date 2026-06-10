export function formatCoin(
  amount: number
) {
  return amount.toLocaleString("id-ID");
}

export function formatDate(
  date: Date
) {
  return date.toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
