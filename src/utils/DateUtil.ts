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

  static formatReadable(date: number | string | Date): string {
    if (!(date instanceof Date)) {
      date = new Date(date)
    }

    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`
  }
}
