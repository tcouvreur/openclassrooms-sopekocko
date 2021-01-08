class Sauce{
  constructor(id){
    console.log("id",id);
    this.id = id;
  }
  getAllInfos(){
    return {
      data : {
        id : this.id
      }
    };
  }
}

module.exports = Sauce;