import tonnesToPounds from '../../src/weight/tonnes-to-pounds';
import expect from 'expect';

test('it should exist', () => {

    expect(
        tonnesToPounds
    ).toExist();

});

test('it should return the correct values', () => {

    const oneTonneToPounds = 2204.62;

    expect(
        tonnesToPounds(1)
    ).toBe(oneTonneToPounds);

    expect(
        tonnesToPounds(2)
    ).toBe(oneTonneToPounds * 2);

    expect(
        tonnesToPounds(5)
    ).toBe(oneTonneToPounds * 5);

    expect(
        tonnesToPounds(10)
    ).toBe(oneTonneToPounds * 10);

});