import poundsToStones from '../../src/weight/pounds-to-stones';
import expect from 'expect';

test('it should exist', () => {

    expect(
        poundsToStones
    ).toExist();

});

test('it should return the correct values', () => {

    const onePoundToStones = 0.0714286;

    expect(
        poundsToStones(1)
    ).toBe(onePoundToStones);

    expect(
        poundsToStones(10)
    ).toBe(onePoundToStones * 10);

    expect(
        poundsToStones(20)
    ).toBe(onePoundToStones * 20);

    expect(
        poundsToStones(50)
    ).toBe(onePoundToStones * 50);

});