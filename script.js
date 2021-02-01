  const inLog=confirm('Wanna to login?');
  if(inLog===false){
      let result=prompt('1. Return to start page.\t 2. Return to reservation page. \t 3. Return back.');
      if(result==null||result=='') {
          alert("You dont answer");
      }
      else{
          alert("Thanx for answering!");
      }
  }else {
      let logResult=prompt("Write your login");
      let trueLogin=12345;
      if(logResult==null){
          let answ=confirm('Are you sure?')
          if(answ==false){
              alert("Try again");
          }
          else{
              alert('See you next time');
          }
      }else if(logResult==''){
          alert('Check the login');
      }else if(trueLogin==logResult) {
          alert("You're in");


      }else{
          alert("Login is incorrect. Try again.");
      }

  }
