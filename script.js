function randomId(length = 10) {
   let chars = '0123456789'.split('');
   let str = '';
   if (!length) {
      length = Math.floor(Math.random() * chars.length);
   }
   for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
   }
   document.write(`${str} <br><hr>`);
   return str
}
randomId();

function randomEmail() {
   let strValues = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
   let strEmail = "";
   let strTmp;
   for (let i = 0; i < 10; i++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      strEmail = strEmail + strTmp;
   }
   strTmp = "";
   strEmail = strEmail + "@";
   for (let j = 0; j < 10; j++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      strEmail = strEmail + strTmp;
   }
   strEmail = strEmail + ".com"
   document.write(`${strEmail} <br><hr>`);
   return strEmail;
}
randomEmail()

for (let i = +prompt(); i > 0; i--) {
   document.write(`${i} <br>`);
}

let arr = [120, 1, 7, 11, 2, 8, 12, 3, 111, 4, 10, 5, 0, 9,];
for (let i = 1; i < arr.length; i++) {
   for (let k = 0; k < i; k++) {
      if (arr[i] < arr[k]) {
         let x = arr[i];
         arr[i] = arr[k];
         arr[k] = x;
      }
   }
}
document.write(`${arr} <hr>`); 