import moment from 'moment';
import {config} from '@core/config'

export const dateDiffrence = (date: string): string => {

  let given = moment(date);
  let current = moment().startOf('day');

  //Difference in number of days
  const days = moment.duration(current.diff(given)).asDays();
  if (days == 0) {
    return 'Today'
  }
  else if (days == 1) {
    return 'Yesterday'
  }
  else if (days <= 7) {
    return moment.utc(date).local().startOf('seconds').fromNow() // ago formate till 7 days 
  }
  else {
    let dateObj = new Date(date);
    let momentObj = moment(dateObj);
    return momentObj.format(config.dateFormat);
  }
}

