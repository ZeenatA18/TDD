describe('Test my greet function', function(){

it("should return 'Hello, Zeenat' when called with 'Zeenat'", function(){

assert.equal("Hello, Zeenat", greet("Zeenat"))

})

it("should return 'Hello, Faatimah' when called with 'Faatimah'", function(){

    assert.equal("Hello, Faatimah", greet("Faatimah"))

})

})