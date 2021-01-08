module.exports = function(res, data){
  if (data.error){
    return res.status(data.error.status).send(data.error.msg);
  }
  return res.status(201).json(data.data);
};