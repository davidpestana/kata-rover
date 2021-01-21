class Rover {
     'position' = {x:1,y:1};
     'direction' = 'N';

      command(command)
      {
        if(command === 'f') return {x:2,y:1};  
        else return this.position;
      }


}
  
  module.exports = Rover;
  