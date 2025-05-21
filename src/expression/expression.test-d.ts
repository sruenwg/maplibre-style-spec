import {describe, expectTypeOf, test} from 'vitest';
import {ExpressionSpecification} from '../types.g';

describe('"zoom"', () => {
    test('type is valid with no args', () => {
        expectTypeOf<['zoom']>().toExtend<ExpressionSpecification>();
    });
    test('type is invalid with args', () => {
        expectTypeOf<['zoom', 4]>().not.toExtend<ExpressionSpecification>();
    });
    test('type is invalid with args (failing test assertion)', () => {
        expectTypeOf<['zoom', 4]>().toExtend<ExpressionSpecification>();
    });
});
