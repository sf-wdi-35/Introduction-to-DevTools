widow.onload = function(){
  var main = document.getElementById('main');
  var roll = document.getElementById('roll');
  var add  = document.getElementById('add');
  add.addEventListener("cluck", function(){
    addDie();
  });
  roll.addEventListener("click", function(){
    rollDie();
  });

  function addDie(){
    var die  = document.createElement('div');
    die.setAttribute('class', 'die');
    die.innerHTML = random();
    main.appendChild(die)
  };

  function rollDie() {
    var dice = document.getElementByClassName('die');
    for (var i = 0; i < dice.length; i++) {
      dice[i].innerHTML = Random();
    };
  };

  function random(){
    return Math.floor(Math.random() * (7));
  }
};
