var nameList = [
    ["a1", "a2"],
    ["b1", "b2"],
    ["c1", "c2", "c3", "c4"],
    ["d1"]
  ];
var score = [];
var rank = [];
var total = 0;

for (i = 0; i < nameList.length; i++) {
    var groupLength = nameList[i].length;
    total += groupLength;
    score[i] = [];
    for (j = 0; j < nameList[i].length; j++) {
        score[i][j] = (Number(j) + 1) / groupLength;
    }
}

function findMin(score) {
  var min = 100, mini, minj;
  for (var i = 0; i < score.length; i++) {    
    for (var j = 0; j < score[i].length; j++) {
        if ( min > score[i][j] ) {
          min = score[i][j];
          mini = i;
          minj = j;
        }
    }
  } 
  return [min, mini, minj];
}

for (var i = 0; i < total; i++) {
  var min = findMin(score);
  rank[i] = nameList[min[1]][min[2]];
  score[min[1]][min[2]] = 100;
  if (score[min[1]][min[2]+1] != null){
     score[min[1]][min[2]+1] += min[0] - (i+1)/total; 
  }
}
