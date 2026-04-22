import { describe, it, expect } from 'vitest'
import { validateForm } from './form'

describe('Form Test', () => {
  it('should validate non-empty input', () => {
    expect(validateForm("Aahan")).toBe(true)
  })

  it('should fail empty input', () => {
    expect(validateForm("")).toBe(false)
  })
})