/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  //var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var DiscoverCCN = [['6441213517984238', '6441213517984238274'], ['6451213517984238', '6451213517984238274'], 
                     ['6461213517984238', '6461213517984238274'], ['6471213517984238', '6471213517984238274'], 
                     ['6481213517984238', '6481213517984238274'], ['6491213517984238', '6491214270925097274']]

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6591213517984238').should.equal('Discover')
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6591214270925097274').should.equal('Discover')
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(DiscoverCCN[prefix-644][0]).should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(DiscoverCCN[prefix-644][1]).should.equal('Discover')
      });
    })(prefix)
  }

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011213517984238').should.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011214270925097274').should.equal('Discover')
  })

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var MaestroCCN = [['501878939012', '502078939012','503878939012','630478939012'], 
                   ['5018789390123','5020789390123','5038789390123','6304789390123'],
                   ['50187893901234','50207893901234','50387893901234','63047893901234'],
                   ['501878939012345','502078939012345','503878939012345','630478939012345'],
                   ['5018789390123456','5020789390123456','5038789390123456','6304789390123456'],
                   ['50187893901234567','50207893901234567','50387893901234567','63047893901234567'],
                   ['501878939012345678','502078939012345678','503878939012345678','630478939012345678'],
                   ['5018789390123456789','5020789390123456789','5038789390123456789','6304789390123456789']];

  for (var len = 12; len <= 19; len++){
    (function(len){
      var i = len - 12;
      it('has a prefix of 5018 and a length of ' + len , function(){
        detectNetwork(MaestroCCN[i][0]).should.equal('Maestro')
      });
      it('has a prefix of 5020 and a length of ' + len, function(){
        detectNetwork(MaestroCCN[i][1]).should.equal('Maestro')
      });
      it('has a prefix of 5038 and a length of ' + len, function(){
        detectNetwork(MaestroCCN[i][2]).should.equal('Maestro')
      });
      it('has a prefix of 6304 and a length of ' + len, function(){
        detectNetwork(MaestroCCN[i][3]).should.equal('Maestro')
      })
    })(len)
  }

});

describe('Switch', function() {
  var switchCCN = 
    [['4903','4903567890123456','490356789012345678','4903567890123456789'], 
    ['4905','4905567890123456','490556789012345678','4905567890123456789'], 
    ['4911','4911567890123456','491156789012345678','4911567890123456789'],
    ['4936','4936567890123456','493656789012345678','4936567890123456789'], 
    ['6759','6759567890123456','675956789012345678','6759567890123456789'], 
    ['6333','6333567890123456','633356789012345678','6333567890123456789'], 
    ['564182','5641827890123456','564182789012345678','5641827890123456789'], 
    ['633110','6331107890123456','633110789012345678','6331107890123456789']];

  for(var idx = 0; idx < switchCCN.length; idx++){
    (function(idx){
      var prefix = switchCCN[idx][0];

      it('has a prefix of '+ prefix +' and a length of 16', function(){
        detectNetwork(switchCCN[idx][1]).should.equal('Switch');
      });
      it('has a prefix of '+ prefix +' and a length of 18', function(){
        detectNetwork(switchCCN[idx][2]).should.equal('Switch');
      });
      it('has a prefix of '+ prefix +' and a length of 19', function(){
        detectNetwork(switchCCN[idx][3]).should.equal('Switch');
      })

    })(idx)
  }

});

describe('China UnionPay', function(){
  var CUPCCN622 = [], CUPCCN628 = [], CUPCCN62 =[];
  
  for (var i = 624; i <= 626; i++){
    var sixteen = i + '4567890123456'
    var seventeen = i + '45678901234567'
    var eightteen = i + '456789012345678'
    var nineteen = i + '4567890123456789'

    CUPCCN62.push([sixteen, seventeen, eightteen, nineteen]);
  }
  for (var i = 6282; i <= 6288; i++){
    var sixteen = i + '567890123456'
    var seventeen = i + '5678901234567'
    var eightteen = i + '56789012345678'
    var nineteen = i + '567890123456789'

    CUPCCN628.push([sixteen, seventeen, eightteen, nineteen]);
  }
  for (var i = 622126; i <= 622925; i++){
    var sixteen = i + '7890123456'
    var seventeen = i + '78901234567'
    var eightteen = i + '789012345678'
    var nineteen = i + '7890123456789'

    CUPCCN622.push([sixteen, seventeen, eightteen, nineteen]);
  }

  var chinaUnionPayLoop =  function (loopStart, loopEnd, CCNArray){
    for (var prefix = loopStart; prefix <= loopEnd; prefix++){
      (function(prefix){
        var base = loopStart;
        it('has a prefix of '+ prefix +' and a length of 16', function(){
          detectNetwork(CCNArray[prefix-base][0]).should.equal('China UnionPay')
        });
        it('has a prefix of '+ prefix +' and a length of 17', function(){
          detectNetwork(CCNArray[prefix-base][1]).should.equal('China UnionPay')
        });
        it('has a prefix of '+ prefix +' and a length of 18', function(){
          detectNetwork(CCNArray[prefix-base][2]).should.equal('China UnionPay')
        });
        it('has a prefix of '+ prefix +' and a length of 19', function(){
          detectNetwork(CCNArray[prefix-base][3]).should.equal('China UnionPay')
        });
      })(prefix)
    }  
  }

  chinaUnionPayLoop(624, 626, CUPCCN62);
  chinaUnionPayLoop(6282, 6288, CUPCCN628);
  chinaUnionPayLoop(622126, 622925, CUPCCN622);

});

