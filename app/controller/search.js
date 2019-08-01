var jwt = require('jsonwebtoken');
var globalconfig = require('../../config/globalconfig');  //read config file
var fs = require('fs');

module.exports = {

    displayfilelist: function (req, res) {
        var token = req.headers['x-access-token'];
        var outputFiles = [];
        var filename = req.body.name;         
        jwt.verify(token, globalconfig.secret, function (err, decoded) {
            if (err) return res.status(500).send(globalconfig.tokenerrormsg);
            var files_var = fs.readdir('.././files', function (err, files) {
                const filearray = [];
                outputFiles = files.filter(el => new RegExp(filename).test(el))
                for (let i = 0; i < outputFiles.length; i++) {
                    filearray.push({ id: i + 1, name: outputFiles[i] })
                }
                res.json({ "Arrayofresponse": filearray });
            });


        })
    }


}