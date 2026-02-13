interface activity {
  log( message : any ) : void;
}

class logActivityClass implements activity{
  log( message : string ){
    console.log(` ACTIVITY LOG : ${message} `);
  }
}

class logErrorClass implements activity {
  log (message : Object) {
    console.log(`ERROR OCCURED : ${message}`);
  }
}

const logActivity = new logActivityClass();
const logError = new logErrorClass();

export { logActivity, logError };