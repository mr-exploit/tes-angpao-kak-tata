function rand(min = null, max = null) {

    if(max && min === null){
        return "0";
    } else if (max === 0){
        return Math.round(Math.random(min)) ;
    } else{
        return Math.round(Math.random()) * (max - min) + min;
  }
}
  console.log(rand(20,1));
  console.log(rand(1,10));
  console.log(rand(6));
  console.log(rand());
  console.log("__________________________");

  function chooseDecimals(n,d){
    return Number(n).toFixed(d);
    // fungsi tofixed mem-parsing argumen string dan mengembalikan angka Float
  }
  console.log(chooseDecimals(2.100212, 2));
  console.log(chooseDecimals(2.100212, 3));
  console.log(chooseDecimals(2100, 2));
  console.log("__________________________");

  function isItNumeric(n){
    //number merupakan konstruktor berisi konstanta untuk bekerja dengan angka
    if(Number(n)){
        // jika kita ingin mengecek data number maka menggunakan konstruktor number(masukkan property)
        return true;
    } else{
        return false;
    }
  }

  console.log(isItNumeric(12));
  console.log(isItNumeric('abcd'));
  console.log(isItNumeric('12'));
  console.log(isItNumeric(' '));
  console.log(isItNumeric(1.20));
  console.log(isItNumeric(-200));
  console.log("__________________________");

  function roundUpToFive(integer){
    return Math.ceil(integer/5)*5; 
    //math ceil yaitu mengembalikan nilai bilangan bulat yang lebih kecil dan lebih besar dari angka yang diberikan
  }

  console.log(roundUpToFive(32));
  console.log(roundUpToFive(137));
  console.log(roundUpToFive(142));