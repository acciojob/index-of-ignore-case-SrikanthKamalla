function indexOfIgnoreCase(str, substr) {
  // write your code here
str=str.toLowerCase();
substr=substr.toLowerCase();
let res=-1;
for (let i = 0; i < str.length-substr.length+1; i++) {
    if (str.substring(i,i+substr.length)===substr) {
        res=i;
        break;
    }
}
	return res;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));