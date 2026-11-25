module.exports = function(ctx, req, res) {
  const h = ctx.headers;
  console.log('HDRS', JSON.stringify(h))
  console.log('test', req);
  cb(null, 'hello world!777');
}
