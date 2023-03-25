import { describe, test, expect } from "vitest";
import { sum } from "./sum";

describe('Sum test', () => {
  test('should sum 2 positive number', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})