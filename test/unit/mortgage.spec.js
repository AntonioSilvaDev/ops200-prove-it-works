const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage;
      });
    
      it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
      });

      it('should have a constructor function', () => {
        expect(mortgage.constructor).to.exist;
      });

      it('monthlyPayment function should return a number', () => {
          expect(mortgage.monthlyPayment()).to.be.a("number");
      });

      it('should have a property names of principal, interest, term, period', () => {
          expect(mortgage).to.have.property('principal');
          expect(mortgage).to.have.property('interest');
          expect(mortgage).to.have.property('term');
          expect(mortgage).to.have.property('period');
      });

      it('should calculate monthly payment correctly', () => {
          testMortgageCal = new Mortgage(500000, 4.5, 30, 12)
          expect(testMortgageCal.monthlyPayment()).to.equal(2533.43);
      })

});