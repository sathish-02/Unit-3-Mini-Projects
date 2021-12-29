
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var N = +input[0];
  var line = 1;
  var mainQ = [];
  var Q1 = [];
  var Q2 = [];
  var Q3 = [];
  var Q4 = [];
  function checkEql(mainQ,num){
      for(i = 0; i < mainQ.length; i++){
          if (mainQ[i] == num){
              return true;
          }
          else {
              false;
          }
      }
  }
  for (i = 0; i < N; i++){
      var tot = input[line].split(" ");
      var op = tot[0];
      var club = +tot[1];
      var rollNum = +tot[2];
      if (op === "E"){
          if (club == 1){
              if (mainQ.length !== 0){
                  if (checkEql(mainQ,club) === true){
                      Q1.push(rollNum);
                  }
                  else{
                      mainQ.push(club);
                      Q1.push(rollNum);
                  }
              }
              else {
                     mainQ.push(club);
                    Q1.push(rollNum);
                }
              
          }
          else if (club == 2) {
              if (mainQ.length !== 0){
                  if (checkEql(mainQ,club) === true){
                      Q2.push(rollNum);
                  }
                  else{
                      mainQ.push(club);
                      Q2.push(rollNum);
                  }
              }
              else {
                     mainQ.push(club);
                    Q2.push(rollNum);
                }
          }
           else if (club == 3) {
              if (mainQ[mainQ.length-1] != club){
                  mainQ.push(club);
              }
              Q3.push(rollNum);
          }
           else if (club == 4) {
              if (mainQ[mainQ.length-1] != club){
                  mainQ.push(club);
              }
              Q4.push(rollNum);
          }
      } 
      
      else {
          if (mainQ[0] == 1){
              if(Q1.length > 0){
                  console.log(mainQ[0], Q1.shift());
                  if (Q1.length == 0){
                      mainQ.shift();
                  }
              }

          }
          else if (mainQ[0] == 2) {
               if(Q2.length > 0){
                  console.log(mainQ[0], Q2.shift());
                  if (Q2.length == 0){
                      mainQ.shift();
                  }
              }
          }
          
          else if (mainQ[0] == 3) {
               if(Q3.length > 0){
                  console.log(mainQ[0], Q3.shift());
                  if (Q3.length == 0){
                      mainQ.shift();
                  }
              }
          }
          
          else if (mainQ[0] == 4) {
               if(Q4.length > 0){
                  console.log(mainQ[0], Q4.shift());
                  if (Q4.length == 0){
                      mainQ.shift();
                  }
              }
          }
          
          
      }
      line++;
  }
  
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}