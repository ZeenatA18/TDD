describe('Function to help optimize their booking process', function(){

it('Should return booking cost for the given duration including discount when needed',function(){

    var booking = { 
        check_in_day: 'Monday',
        duration: 3,
        cat_name : 'Snowy'
      }

assert.deepEqual(135.00, bookingCost(booking))

})

it('Should return booking cost for the given duration including discount when needed',function(){

    var booking1 = {
        check_in_day: 'Wednesday',
        duration: 3,
        cat_name : 'Snowy'
      }

assert.deepEqual(101.25, bookingCost(booking1))

})

it('Should return booking cost for the given duration including discount when needed',function(){

    var booking2 ={
        check_in_day: 'Friday',
        duration: 3,
        cat_name : 'Snowy'
      }

assert.deepEqual(114.75, bookingCost(booking2))

})

})