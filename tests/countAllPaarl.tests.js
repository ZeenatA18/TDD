describe("Function should return all the registration numbers in the string for Paarl", function () {

    it("Should return '2' when called with 'allPaarl(regNumbers)'", function () {

        assert.equal(2, allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864').length, 'There are two registration numbers')

    })

    it("Should return 'CJ 678 543' when called with 'regNumbersForPaarl[0]'", function () {

        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);

        assert.equal('CJ 678 543', regNumbersForPaarl[0]);

    })

    it("Should return 'CJ 67890' when called with 'regNumbersForPaarl[1]'", function () {

        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);

        assert.equal('CJ 67890', regNumbersForPaarl[1]);

    })

})