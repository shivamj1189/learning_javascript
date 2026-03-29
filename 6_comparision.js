console.log("2">1);


console.log(null>0);
console.log(null==0);
console.log(null>=0);
//here equals(==) and comparision(>,<,=<,=>) operator works differently for null. while using comparision operator null is converted to 0 but while using equals operator null is not converted to 0.
// if we use === then it will check datatype as well
console.log('2'===2);


//primitive data types are compared by value
// string,numbers,boolean,null,undefined,symbol,bigint

//non-primitive data types are compared by reference
// objects,arrays,function