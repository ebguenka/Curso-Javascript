function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new ReferenceError('x e y precisam ser número.');

    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('2', 2));
} catch (error) {
    console.log(error);

}
// try {
//     console.log(naoexisto);

// } catch(err) {
//     console.log('naoExisto não existo');
//     console.log(err);
// }