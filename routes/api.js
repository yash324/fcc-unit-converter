/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if(!initNum && !initUnit){
        return res.status(400).json('invalid number and unit');  
      }
      if(!initNum){
        return res.status(400).json('invalid number');
      }
      if(!initUnit){
        return res.status(400).json('invalid unit');
      }
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      return res.json({initNum, initUnit, returnNum, returnUnit, string});
    });
    
};
