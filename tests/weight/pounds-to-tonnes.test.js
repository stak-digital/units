import poundsToTonnes from '../../src/weight/pounds-to-tonnes';
import expect from 'expect';

test('it should exist', () => {

    expect(
        poundsToTonnes
    ).toExist();

});

test('it should return the correct values', () => {

    const onePoundToTonnes = 0.000453592;

    expect(
        poundsToTonnes(1)
    ).toBe(onePoundToTonnes);

    expect(
        poundsToTonnes(50)
    ).toBe(onePoundToTonnes * 50);

    expect(
        poundsToTonnes(100)
    ).toBe(onePoundToTonnes * 100);

    expect(
        poundsToTonnes(2000)
    ).toBe(onePoundToTonnes * 2000);

});