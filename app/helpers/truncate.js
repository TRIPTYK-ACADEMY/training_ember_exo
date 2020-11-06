import { helper } from '@ember/component/helper';

export default helper(function truncate([string, num]/*, hash*/) {
  if(string.length <= num){
    return string;
  }

  return string.slice(0, num) + '...';
});
