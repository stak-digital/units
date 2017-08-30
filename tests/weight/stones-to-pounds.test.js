import stonesToPounds from '../../src/weight/stones-to-pounds';
import expect from 'expect';

test('it should exist', () => {

    expect(
        stonesToPounds
    ).toExist();

});

test('it should return the correct values', () => {

    const oneStoneToPounds = 14;

    expect(
        stonesToPounds(1)
    ).toBe(oneStoneToPounds);

    expect(
        stonesToPounds(2)
    ).toBe(oneStoneToPounds * 2);

    expect(
        stonesToPounds(5)
    ).toBe(oneStoneToPounds * 5);

    expect(
        stonesToPounds(10)
    ).toBe(oneStoneToPounds * 10);

});