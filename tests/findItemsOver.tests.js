describe('The function should return products that have quantity higher than the threshold.', function () {

    it('Should return all the products that have a quantity higher than the threshold', function () {

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }], findItemsOver(itemList, 20))

    })
    

})