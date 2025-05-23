import {format} from './format';
import {describe, test, expect} from 'vitest';
function roundtrip(style) {
    return JSON.parse(format(style));
}

describe('format', () => {

    test('orders top-level keys', () => {
        expect(Object.keys(roundtrip({
            'layers': [],
            'other': {},
            'sources': {},
            'glyphs': '',
            'sprite': '',
            'version': 6
        }))).toEqual(['version', 'sources', 'sprite', 'glyphs', 'layers', 'other']);
    });

    test('orders layer keys', () => {
        expect(Object.keys(roundtrip({
            'layers': [{
                'paint': {},
                'layout': {},
                'id': 'id',
                'type': 'type'
            }]
        }).layers[0])).toEqual(['id', 'type', 'layout', 'paint']);
    });
});
