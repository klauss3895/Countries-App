// const { Country, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Country model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Country.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Country.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Country.create({ name: 'Argentina' });
//       });
//     });
//   });
// });

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// const expect = require('chai').expect;

// chai.use(chaiHttp);
// const url= 'http://localhost:3001';



// describe('get all countries: ',()=>{
//   it('should get all countries', (done) => {
//   chai.request(url)
//   .get('/countries')
//   .end( function(err,res){
//   console.log(res.body)
//   expect(res).to.have.status(200);
//   done();
//   });
//   });
//  });
 
