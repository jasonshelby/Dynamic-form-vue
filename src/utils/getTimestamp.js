export function timestamp() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let millisec = date.getMilliseconds()
  let index = date.toString().indexOf('GMT+') + 4
  let offset = date.toString().substr(index, 4)
  let result =
    year +
    '-' +
    month +
    '-' +
    day +
    'T' +
    hour +
    ':' +
    minute +
    ':' +
    second +
    '.' +
    millisec +
    '+' +
    offset
  return result
}
