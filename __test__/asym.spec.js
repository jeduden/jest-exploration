expect.extend({
  toBeOne: (received) => {
    const pass = received === 1
    const toBe = pass ? 'not to be' : 'to be'
    return {
      message: () => `expected ${received} ${toBe} 1`,
      pass,
    }
  },
})

test('foo', () => {
  const o = {
    a: 3,
  }
  expect(o).toMatchObject({
    a: expect.toBeOne(),
  })
})
