/**
 * 將日期對象按照指定的格式轉換為字符串
 * @param date - 要格式化的日期對象
 * @param format - 日期格式字符串,支持的格式有:
 *
 *   YYYY: 四位數年份
 *
 *   MM: 兩位數月份 (01-12)
 *
 *   DD: 兩位數日期 (01-31)
 *
 *   hh: 兩位數小時 (00-23)
 *
 *   mm: 兩位數分鐘 (00-59)
 *
 *   ss: 兩位數秒鐘 (00-59)
 * @returns 格式化後的日期字符串
 */
export function parseDate(date: Date, format: string): string {
  const pad = (n: number): string => n < 10 ? `0${n}` : `${n}`;

  const replacements: { [key: string]: string } = {
    'YYYY': date.getFullYear().toString(),
    'MM': pad(date.getMonth() + 1),
    'DD': pad(date.getDate()),
    'hh': pad(date.getHours()),
    'mm': pad(date.getMinutes()),
    'ss': pad(date.getSeconds()),
  };

  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, match => replacements[match]);
}

/**
 * 生成指定數量的隨機數字
 * @param count - 要生成的隨機數字的數量
 * @param maxNum - 隨機數字的上限(不包含),生成的數字範圍為 0 到 maxNum-1
 * @param repeat - 是否允許重複數字,默認為 false
 * @returns 包含生成的隨機數字的數組
 * @throws 當 repeat 為 false 且 maxNum 小於 count 時,拋出錯誤
 */
export function genRandNums(count: number, maxNum: number, repeat = false) {
  const res = [];
  if (repeat) {
    for (let i = 0; i < count; i++) {
      res.push(Math.floor(Math.random() * maxNum))
    }
    return res
  } else {
    if (maxNum < count) {
      throw new Error('maxNum must be greater than or equal to count when repeat is false')
    }

    const nums = new Set()
    while (nums.size < count) {
      nums.add(Math.floor(Math.random() * maxNum))
    }
    return [...nums]
  }
}

/**
 * 將指定的字符串複製到剪貼板
 * @param str - 要複製的字符串
 */
export function copyString(str: string) {
  const old_copy = () => {
    const tempElement = document.createElement('textarea');
    tempElement.value = str;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
  }

  navigator.clipboard.writeText(str)
    .then(_ => {
    })
    .catch((error) => {
      console.error('複製失敗:', error);
      old_copy()
    });
}

export const emailCheck = (v: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(v).toLowerCase());
}
