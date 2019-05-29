describe('Check function binarySearch()', function () {
    let Search = require('../src/binary-search');

    beforeEach(function() {
        search = new Search();
    });

    it('first argument are null', function () {
        expect( function(){
            search.binarySearch(null, 2);
        } ).toThrow(new Error("array are null"));
    });

    it('second argument are null', function () {
        expect( function(){
            search.binarySearch([], null);
        } ).toThrow(new Error("number are null"));
    });

    it('first argument not defined', function () {
        expect( function(){
            search.binarySearch(undefined, 5);
        } ).toThrow(new Error("array are undefined"));
    });

    it('second argument not defined', function () {
        expect( function(){
            search.binarySearch([]);
        } ).toThrow(new Error("number are undefined"));
    });

    it('first argument not type Array', function () {
        expect( function(){
            search.binarySearch({}, 5);
        } ).toThrow(new Error("array is not an Array"));
    });

    it('second argument not a number', function () {
        expect( function(){
            search.binarySearch([], 'number');
        } ).toThrow(new Error("typeof number is not a number"));
    });

    it('element of array not number type', function () {
        expect( function(){
            search.binarySearch([1,2,3,'4',5], 5);
        } ).toThrow(new Error("not all elements in an array of type number"));
    });


    it('binarySearch() should return 5', function () {
        let result = search.binarySearch([1,2,3,6,10,24], 24);
        expect(result).toEqual(5);
    });

    it('binarySearch() should return 3', function () {
        let result = search.binarySearch([1,10,4,9,122], 10);
        expect(result).toEqual(3);
    });

    it('empty array -> return -1', function () {
        let result = search.binarySearch([], 15);
        expect(result).toEqual(-1);
    });

    it('binarySearch() should return 2', function () {
        let result = search.binarySearch([1000,2,199,2.9,9.6], 9.6);
        expect(result).toEqual(2);
    });

    it('binarySearch() not found -> return -1', function () {
        let result = search.binarySearch([4,90,120,5], 7.2);
        expect(result).toEqual(-1);
    });

    it('binarySearch() should return 0', function () {
        let result = search.binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
            51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
            81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 1);
        expect(result).toEqual(0);
    });

    it('binarySearch() not found -> return -1', function () {
        let result = search.binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
            51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
            81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 900);
        expect(result).toEqual(-1);
    });

});