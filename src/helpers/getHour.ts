export const getHour = (minuts: number| undefined)  => {
    
    let hour = Math.floor(minuts / 60);

  return hour +"h"+ "  ago";
};
