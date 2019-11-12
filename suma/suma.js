function suma (a, b) {
    if ( typeof(a) !== 'number' ||
         typeof(b) !== 'number' ||
         !isFinite(a) ||
         !isFinite(b) ) {
        return 'Turi buti validus skaiciai';
    }
    return a + b;
}

module.exports = suma; 