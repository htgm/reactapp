const captcha = require('svg-captcha');

function xor96(seeds) {
  let t;
  t = (seeds.x ^ (seeds.x << 3)) ^ (seeds.y ^ (seeds.y >> 19)) ^ (seeds.z ^ (seeds.z << 6));
  seeds.x = seeds.y; seeds.y = seeds.z;
  return seeds.z = t;
}

function randomText(num) {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  const y = (seedX * (seedRevision[num % 10000] + 1)) & 0xffffffff;
  const seeds = { x: seedX, y: y, z: num };
  let text = '';
  for (let i = 0; i < 5; i++) {
    text += chars.charAt(Math.abs(num) % chars.length);
    num = xor96(seeds);
  }
  return text;
}

const seedX = Date.now() & 0xffffffff;
const seedRevision = {};

module.exports = function (app) {
  app.get('/captcha', function (req, res) {
    if (/^([0-9]{1,7})$/.test(req.query.key)) {
      let num = Number.parseInt(req.query.key);
      var cap = captcha(randomText(num));
      res.type('svg');
      res.status(200).send(cap);
    }
    else {
      res.status(404).send();
    }
  });
};
