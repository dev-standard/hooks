import { describe, expect, test } from 'vitest'
import { useFormat } from '../src'

describe('test useFormat', () => {
  test('test ', () => {
    const { trimAll } = useFormat()
    expect(trimAll(1)).toBe('')
    expect(trimAll(' test')).toBe('test')
    expect(trimAll('test ')).toBe('test')
    expect(trimAll(' test ')).toBe('test')
    expect(trimAll(' t e s t ')).toBe('test')
  })
})
