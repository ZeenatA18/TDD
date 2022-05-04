describe('Function checks products with a quantity higher the 20', function () {

    it('Should return all the products that have a quantity higher than 20', function () {

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }], findItemsOver20(itemList))

    })
    

})