
function logRectInfo(topLeft, bottomRight){  
    length = (topLeft[0] - bottomRight[0]);
    if (length<0){
        length*=-1;
    }
    width = (topLeft[0] - bottomRight[0]);
    if (width<0){
        width*=-1;
    }

    area = length * width;    
    perimeter = 2 * (topLeft[1] + bottomRight[0]);

    console.log(`The area is: ${area} The perimeter is: ${perimeter}`);
  }
  
  logRectInfo([0,5], [5,3]);
  logRectInfo([0,4], [4,1]);
  logRectInfo([1,8], [3,2]);
  logRectInfo([1,3], [3,1]);

  