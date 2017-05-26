
var Person = function(firstAndLast) {
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];

    this.getFirstName = function(){
      return firstName;
    };

    this.getLastName = function(){
      return lastName;
    };

    this.getFullName = function() {
      return firstName+" "+lastName;
    };

    this.setFirstName = function(first){
      firstName = first;
    };

    this.setLastName = function(last){
      lastName = last;
    };

    this.setFullName = function(firstAndLast){
      firstName = firstAndLast.split(" ")[0];
      lastName = firstAndLast.split(" ")[1];
    };

    return firstAndLast;
};


var bob = new Person('Bob Ross');
bob.getFullName();
