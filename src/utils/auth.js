const TOKEN_KEY = 'access_token'
export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  return token
}

export const cleanToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const format = (time, format) => {
  var t = new Date(time);
  var tf = function(i){return (i < 10 ? '0' : '') + i};
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
    switch(a){
      case 'yyyy':
      return tf(t.getFullYear());
      break;
      case 'MM':
      return tf(t.getMonth() + 1);
      break;
      case 'mm':
      return tf(t.getMinutes());
      break;
      case 'dd':
      return tf(t.getDate());
      break;
      case 'HH':
      return tf(t.getHours());
      break;
      case 'ss':
      return tf(t.getSeconds());
      break;
    }
  })
}
export function isAuth(key) {
  return JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}
