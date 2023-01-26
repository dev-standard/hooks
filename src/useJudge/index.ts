import { isAbsolute } from 'path'

export const useJudge = () => {
  const isString = (str: any) => {
    return typeof str === 'string'
  }

  const isNumber = (num: any) => {
    return typeof num === 'number'
  }

  const isInt = (num: any) => {
    return Number.isInteger(num)
  }

  const isSafeInteger = (num: any) => {
    return Number.isSafeInteger(num)
  }

  const isFinite = (num: any) => {
    return Number.isFinite(num)
  }

  const isNaN = (num: any) => {
    return Number.isNaN(num)
  }

  const isPlainObject = (obj: any) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  const isArray = (arr: any) => {
    return Array.isArray(arr)
  }

  const isRelativePath = (path: any) => {
    if (!isString(path))
      return false
    return !isAbsolute(path)
  }

  const isAbsolutePath = (path: any) => {
    if (!isString(path))
      return false
    return isAbsolute(path)
  }

  const isPercentage = (str: any) => {
    if (!isString(str))
      return false
    str = (str as string).trim()
    return isNumber(Number((str as string).slice(0, -1))) && (str as string).endsWith('%')
  }

  const isAngle = (str: any) => {
    if (!isString(str))
      return false
    str = (str as string).trim().toLowerCase()
    const ANGLE_UNIT = ['deg', 'grad', 'rad', 'turn']
    return ANGLE_UNIT.some(unit => (str as string).endsWith(unit) && isFinite(Number((str as string).slice(0, -unit.length))))
  }

  return {
    isString,
    isNumber,
    isInt,
    isSafeInteger,
    isFinite,
    isNaN,
    isPlainObject,
    isArray,
    isRelativePath,
    isAbsolutePath,
    isPercentage,
    isAngle,
  }
}
