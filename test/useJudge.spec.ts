import { describe, expect, test } from 'vitest'
import { useJudge } from '../src'

const str = 'test'
const numInt = 0
const numFloat = 0.1
const numMaxValue = Number.MAX_VALUE
const numMaxSafeValue = Number.MAX_SAFE_INTEGER
const numInfinity = Number.POSITIVE_INFINITY
const numNaN = Number.NaN
const obj = { test: 'useJudge' }
const arr = [
  'useJudge',
]
const func = () => 'useJudge'
const path1 = 'test/'
const path2 = '/test'
const path3 = '/test/'
const path4 = './test'
const path5 = './test/'
const path6 = '../test'
const path7 = '../test/'
const path8 = 'test/.'
const path9 = '/test/.'
const path10 = 'test/..'
const path11 = '/test/..'
const percentage = '100%'

describe('test useJudge', () => {
  test('test isString', () => {
    const { isString } = useJudge()
    expect(isString(undefined)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(str)).toBe(true)
    expect(isString(numInt)).toBe(false)
    expect(isString(numFloat)).toBe(false)
    expect(isString(numMaxValue)).toBe(false)
    expect(isString(numMaxSafeValue)).toBe(false)
    expect(isString(numInfinity)).toBe(false)
    expect(isString(numNaN)).toBe(false)
    expect(isString(obj)).toBe(false)
    expect(isString(arr)).toBe(false)
    expect(isString(func)).toBe(false)
    expect(isString(path1)).toBe(true)
    expect(isString(path2)).toBe(true)
    expect(isString(path3)).toBe(true)
    expect(isString(path4)).toBe(true)
    expect(isString(path5)).toBe(true)
    expect(isString(path6)).toBe(true)
    expect(isString(path7)).toBe(true)
    expect(isString(path8)).toBe(true)
    expect(isString(path9)).toBe(true)
    expect(isString(path10)).toBe(true)
    expect(isString(path11)).toBe(true)
  })

  test('test isNumber', () => {
    const { isNumber } = useJudge()
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(str)).toBe(false)
    expect(isNumber(numInt)).toBe(true)
    expect(isNumber(numFloat)).toBe(true)
    expect(isNumber(numMaxValue)).toBe(true)
    expect(isNumber(numMaxSafeValue)).toBe(true)
    expect(isNumber(numInfinity)).toBe(true)
    expect(isNumber(numNaN)).toBe(true)
    expect(isNumber(obj)).toBe(false)
    expect(isNumber(arr)).toBe(false)
    expect(isNumber(func)).toBe(false)
    expect(isNumber(path1)).toBe(false)
    expect(isNumber(path2)).toBe(false)
    expect(isNumber(path3)).toBe(false)
    expect(isNumber(path4)).toBe(false)
    expect(isNumber(path5)).toBe(false)
    expect(isNumber(path6)).toBe(false)
    expect(isNumber(path7)).toBe(false)
    expect(isNumber(path8)).toBe(false)
    expect(isNumber(path9)).toBe(false)
    expect(isNumber(path10)).toBe(false)
    expect(isNumber(path11)).toBe(false)
  })

  test('test isInt', () => {
    const { isInt } = useJudge()
    expect(isInt(undefined)).toBe(false)
    expect(isInt(null)).toBe(false)
    expect(isInt(str)).toBe(false)
    expect(isInt(numInt)).toBe(true)
    expect(isInt(numFloat)).toBe(false)
    expect(isInt(numMaxValue)).toBe(true)
    expect(isInt(numMaxSafeValue)).toBe(true)
    expect(isInt(numInfinity)).toBe(false)
    expect(isInt(numNaN)).toBe(false)
    expect(isInt(obj)).toBe(false)
    expect(isInt(arr)).toBe(false)
    expect(isInt(func)).toBe(false)
    expect(isInt(path1)).toBe(false)
    expect(isInt(path2)).toBe(false)
    expect(isInt(path3)).toBe(false)
    expect(isInt(path4)).toBe(false)
    expect(isInt(path5)).toBe(false)
    expect(isInt(path6)).toBe(false)
    expect(isInt(path7)).toBe(false)
    expect(isInt(path8)).toBe(false)
    expect(isInt(path9)).toBe(false)
    expect(isInt(path10)).toBe(false)
    expect(isInt(path11)).toBe(false)
  })

  test('test isSafeInteger', () => {
    const { isSafeInteger } = useJudge()
    expect(isSafeInteger(undefined)).toBe(false)
    expect(isSafeInteger(null)).toBe(false)
    expect(isSafeInteger(str)).toBe(false)
    expect(isSafeInteger(numInt)).toBe(true)
    expect(isSafeInteger(numFloat)).toBe(false)
    expect(isSafeInteger(numMaxValue)).toBe(false)
    expect(isSafeInteger(numMaxSafeValue)).toBe(true)
    expect(isSafeInteger(numInfinity)).toBe(false)
    expect(isSafeInteger(numNaN)).toBe(false)
    expect(isSafeInteger(obj)).toBe(false)
    expect(isSafeInteger(arr)).toBe(false)
    expect(isSafeInteger(func)).toBe(false)
    expect(isSafeInteger(path1)).toBe(false)
    expect(isSafeInteger(path2)).toBe(false)
    expect(isSafeInteger(path3)).toBe(false)
    expect(isSafeInteger(path4)).toBe(false)
    expect(isSafeInteger(path5)).toBe(false)
    expect(isSafeInteger(path6)).toBe(false)
    expect(isSafeInteger(path7)).toBe(false)
    expect(isSafeInteger(path8)).toBe(false)
    expect(isSafeInteger(path9)).toBe(false)
    expect(isSafeInteger(path10)).toBe(false)
    expect(isSafeInteger(path11)).toBe(false)
  })

  test('test isFinite', () => {
    const { isFinite } = useJudge()
    expect(isFinite(undefined)).toBe(false)
    expect(isFinite(null)).toBe(false)
    expect(isFinite(str)).toBe(false)
    expect(isFinite(numInt)).toBe(true)
    expect(isFinite(numFloat)).toBe(true)
    expect(isFinite(numMaxValue)).toBe(true)
    expect(isFinite(numMaxSafeValue)).toBe(true)
    expect(isFinite(numInfinity)).toBe(false)
    expect(isFinite(numNaN)).toBe(false)
    expect(isFinite(obj)).toBe(false)
    expect(isFinite(arr)).toBe(false)
    expect(isFinite(func)).toBe(false)
    expect(isFinite(path1)).toBe(false)
    expect(isFinite(path2)).toBe(false)
    expect(isFinite(path3)).toBe(false)
    expect(isFinite(path4)).toBe(false)
    expect(isFinite(path5)).toBe(false)
    expect(isFinite(path6)).toBe(false)
    expect(isFinite(path7)).toBe(false)
    expect(isFinite(path8)).toBe(false)
    expect(isFinite(path9)).toBe(false)
    expect(isFinite(path10)).toBe(false)
    expect(isFinite(path11)).toBe(false)
  })

  test('test isNaN', () => {
    const { isNaN } = useJudge()
    expect(isNaN(undefined)).toBe(false)
    expect(isNaN(null)).toBe(false)
    expect(isNaN(str)).toBe(false)
    expect(isNaN(numInt)).toBe(false)
    expect(isNaN(numFloat)).toBe(false)
    expect(isNaN(numMaxValue)).toBe(false)
    expect(isNaN(numMaxSafeValue)).toBe(false)
    expect(isNaN(numInfinity)).toBe(false)
    expect(isNaN(numNaN)).toBe(true)
    expect(isNaN(obj)).toBe(false)
    expect(isNaN(arr)).toBe(false)
    expect(isNaN(func)).toBe(false)
    expect(isNaN(path1)).toBe(false)
    expect(isNaN(path2)).toBe(false)
    expect(isNaN(path3)).toBe(false)
    expect(isNaN(path4)).toBe(false)
    expect(isNaN(path5)).toBe(false)
    expect(isNaN(path6)).toBe(false)
    expect(isNaN(path7)).toBe(false)
    expect(isNaN(path8)).toBe(false)
    expect(isNaN(path9)).toBe(false)
    expect(isNaN(path10)).toBe(false)
    expect(isNaN(path11)).toBe(false)
  })

  test('test isPlainObject', () => {
    const { isPlainObject } = useJudge()
    expect(isPlainObject(undefined)).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(str)).toBe(false)
    expect(isPlainObject(numInt)).toBe(false)
    expect(isPlainObject(numFloat)).toBe(false)
    expect(isPlainObject(numMaxValue)).toBe(false)
    expect(isPlainObject(numMaxSafeValue)).toBe(false)
    expect(isPlainObject(numInfinity)).toBe(false)
    expect(isPlainObject(numNaN)).toBe(false)
    expect(isPlainObject(obj)).toBe(true)
    expect(isPlainObject(arr)).toBe(false)
    expect(isPlainObject(func)).toBe(false)
    expect(isPlainObject(path1)).toBe(false)
    expect(isPlainObject(path2)).toBe(false)
    expect(isPlainObject(path3)).toBe(false)
    expect(isPlainObject(path4)).toBe(false)
    expect(isPlainObject(path5)).toBe(false)
    expect(isPlainObject(path6)).toBe(false)
    expect(isPlainObject(path7)).toBe(false)
    expect(isPlainObject(path8)).toBe(false)
    expect(isPlainObject(path9)).toBe(false)
    expect(isPlainObject(path10)).toBe(false)
    expect(isPlainObject(path11)).toBe(false)
  })

  test('test isArray', () => {
    const { isArray } = useJudge()
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(str)).toBe(false)
    expect(isArray(numInt)).toBe(false)
    expect(isArray(numFloat)).toBe(false)
    expect(isArray(numMaxValue)).toBe(false)
    expect(isArray(numMaxSafeValue)).toBe(false)
    expect(isArray(numInfinity)).toBe(false)
    expect(isArray(numNaN)).toBe(false)
    expect(isArray(obj)).toBe(false)
    expect(isArray(arr)).toBe(true)
    expect(isArray(func)).toBe(false)
    expect(isArray(path1)).toBe(false)
    expect(isArray(path2)).toBe(false)
    expect(isArray(path3)).toBe(false)
    expect(isArray(path4)).toBe(false)
    expect(isArray(path5)).toBe(false)
    expect(isArray(path6)).toBe(false)
    expect(isArray(path7)).toBe(false)
    expect(isArray(path8)).toBe(false)
    expect(isArray(path9)).toBe(false)
    expect(isArray(path10)).toBe(false)
    expect(isArray(path11)).toBe(false)
  })

  test('test isRelativePath', () => {
    const { isRelativePath } = useJudge()
    expect(isRelativePath(undefined)).toBe(false)
    expect(isRelativePath(null)).toBe(false)
    expect(isRelativePath(str)).toBe(true)
    expect(isRelativePath(numInt)).toBe(false)
    expect(isRelativePath(numFloat)).toBe(false)
    expect(isRelativePath(numMaxValue)).toBe(false)
    expect(isRelativePath(numMaxSafeValue)).toBe(false)
    expect(isRelativePath(numInfinity)).toBe(false)
    expect(isRelativePath(numNaN)).toBe(false)
    expect(isRelativePath(obj)).toBe(false)
    expect(isRelativePath(arr)).toBe(false)
    expect(isRelativePath(func)).toBe(false)
    expect(isRelativePath(path1)).toBe(true)
    expect(isRelativePath(path2)).toBe(false)
    expect(isRelativePath(path3)).toBe(false)
    expect(isRelativePath(path4)).toBe(true)
    expect(isRelativePath(path5)).toBe(true)
    expect(isRelativePath(path6)).toBe(true)
    expect(isRelativePath(path7)).toBe(true)
    expect(isRelativePath(path8)).toBe(true)
    expect(isRelativePath(path9)).toBe(false)
    expect(isRelativePath(path10)).toBe(true)
    expect(isRelativePath(path11)).toBe(false)
  })

  test('test isAbsolutePath', () => {
    const { isAbsolutePath } = useJudge()
    expect(isAbsolutePath(undefined)).toBe(false)
    expect(isAbsolutePath(null)).toBe(false)
    expect(isAbsolutePath(str)).toBe(false)
    expect(isAbsolutePath(numInt)).toBe(false)
    expect(isAbsolutePath(numFloat)).toBe(false)
    expect(isAbsolutePath(numMaxValue)).toBe(false)
    expect(isAbsolutePath(numMaxSafeValue)).toBe(false)
    expect(isAbsolutePath(numInfinity)).toBe(false)
    expect(isAbsolutePath(numNaN)).toBe(false)
    expect(isAbsolutePath(obj)).toBe(false)
    expect(isAbsolutePath(arr)).toBe(false)
    expect(isAbsolutePath(func)).toBe(false)
    expect(isAbsolutePath(path1)).toBe(false)
    expect(isAbsolutePath(path2)).toBe(true)
    expect(isAbsolutePath(path3)).toBe(true)
    expect(isAbsolutePath(path4)).toBe(false)
    expect(isAbsolutePath(path5)).toBe(false)
    expect(isAbsolutePath(path6)).toBe(false)
    expect(isAbsolutePath(path7)).toBe(false)
    expect(isAbsolutePath(path8)).toBe(false)
    expect(isAbsolutePath(path9)).toBe(true)
    expect(isAbsolutePath(path10)).toBe(false)
    expect(isAbsolutePath(path11)).toBe(true)
  })

  test('test isPercentage', () => {
    const { isPercentage } = useJudge()
    expect(isPercentage(undefined)).toBe(false)
    expect(isPercentage(null)).toBe(false)
    expect(isPercentage(str)).toBe(false)
    expect(isPercentage(numInt)).toBe(false)
    expect(isPercentage(numFloat)).toBe(false)
    expect(isPercentage(numMaxValue)).toBe(false)
    expect(isPercentage(numMaxSafeValue)).toBe(false)
    expect(isPercentage(numInfinity)).toBe(false)
    expect(isPercentage(numNaN)).toBe(false)
    expect(isPercentage(obj)).toBe(false)
    expect(isPercentage(arr)).toBe(false)
    expect(isPercentage(func)).toBe(false)
    expect(isPercentage(path1)).toBe(false)
    expect(isPercentage(path2)).toBe(false)
    expect(isPercentage(path3)).toBe(false)
    expect(isPercentage(path4)).toBe(false)
    expect(isPercentage(path5)).toBe(false)
    expect(isPercentage(path6)).toBe(false)
    expect(isPercentage(path7)).toBe(false)
    expect(isPercentage(path8)).toBe(false)
    expect(isPercentage(path9)).toBe(false)
    expect(isPercentage(path10)).toBe(false)
    expect(isPercentage(path11)).toBe(false)
    expect(isPercentage(percentage)).toBe(true)
  })

  test('test isAngle', () => {
    const { isAngle } = useJudge()
    expect(isAngle(undefined)).toBe(false)
    expect(isAngle(null)).toBe(false)
    expect(isAngle('1deg')).toBe(true)
    expect(isAngle('a1deg')).toBe(false)
    expect(isAngle('1grad')).toBe(true)
    expect(isAngle('1rad')).toBe(true)
    expect(isAngle('1turn')).toBe(true)
    expect(isAngle('test')).toBe(false)
  })
})
