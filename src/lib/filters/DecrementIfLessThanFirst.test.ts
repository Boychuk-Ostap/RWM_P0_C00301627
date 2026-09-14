import { describe, it, expect } from "vitest";
import { DecrementIfLessThanFirst } from './DecrementIfLessThanFirst'
import { sequence } from "@sveltejs/kit/hooks";

describe('Decrement If Less Than First Test1',() => {
    it('number sequence', () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6, 1];
        const expected = [4, 1, 8, 2, 9, 4, 10, 5, 11, 6, 0];
        expect(DecrementIfLessThanFirst(input)).toEqual(expected);
    });
});

describe('Decrement If Less Than First Test2',() => {
    it('number sequence', () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6, 1];
        const expected = [4, 1, 8, 2, 9, 4, 40, 5, 11, 6, 0];
        expect(DecrementIfLessThanFirst(input)).toEqual(expected);
    });
});