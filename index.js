// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// Imane Merghichi
function isChaotic(N){
    var precedent_num = N%10;
    var clone_num = Math.floor(N / 10);
    while(clone_num > 0){
        var current_num = clone_num % 10;
        if( current_num > precedent_num){
            return true;
        }
        precedent_num = current_num;
        clone_num = Math.floor(clone_num/10);
    }
    return false;
}

function solutionExercice1(N) {
    if(N < 11) return N;
    for(var i = N; i > 0; i--){
        if(!isChaotic(i)){
            return i;
        }
    }
}

function solutionExercice2(L) {
    var len = L.length;
    if (len === 0 || !L.includes(1)) return 1;
    L.sort();
    for (var i = 0; i < len; i++) {
         if (L[i] > 0  && L[i+1] - L[i] > 1) return L[i] + 1;    
    }
    return L[len - 1] + 1;
}
function solutionExercice3(L) {
    const map = new Map();
    for (const l of L) {
      const key = l.toString()
      if (!map.get(key)) map.set(key, 1);
      else map.set(key, map.get(key) + 1);
    }
    for (const [key, value] of map) {
      if (value < 2) return key;
    }
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')