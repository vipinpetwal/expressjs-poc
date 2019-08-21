var chai = require('chai');
var chaiHttp = require('chai-http');

// Configure chai
chai.use(chaiHttp);
chai.should();


describe("login", () => {
    var host = "http://" + "localhost:3001";
    var path = "/api/v1/login";
    // Test to login
    it("should be able to login", (done) => {
        chai.request(host)
            .post(path)
            .send({
                "name": "Richard12",
                "pass": "test"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('code');
                res.body.code.should.equal('1');
                done();
            });


    });

});