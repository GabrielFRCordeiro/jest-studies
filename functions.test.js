const functions= require('./functions');

test('Add 2 + 2 to equal 4', () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act
    const resultado = functions.add(a, b);

    // Assert
    expect(resultado).toBe(4);
});

test('Add 11 + 31 to equal 42', () => {
    // Arrange
    const a = 11;
    const b = 31;

    // Act
    const resultado = functions.add(a, b);

    // Assert
    expect(resultado).toBe(42);
});