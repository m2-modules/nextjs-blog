export class DateUtil {
  static daysBefore(days: number): Date {
    const today: Date = new Date()
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - days,
      0,
      0,
      0
    )
  }

  static daysAfter(days: number): Date {
    const today: Date = new Date()
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + days,
      0,
      0,
      0
    )
  }
}
