var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('siswa', {locals: { title: 'siswa' }});
});
router.post('/data', function(req, res) {
  const malas = {
    nama: req.body.nama,
    tempatlahir: req.body.tempatlahir,
    tanggallahir: req.body.tanggallahir,
    alamat: req.body.alamat,
    agama: req.body.agama,
    jeniskelamin: req.body.jeniskelamin,
    komite: 500000-Number(req.body.komite)
  }
  console.log(malas)
  res.render('datasiswa', {locals: {malas}})
l});
module.exports = router;


