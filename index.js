// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI !
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
    var res = "EXERCICE 2"
    //TAPE LE CODE DE L'EXERCICE 2 ICI!
    return res
}
function solutionExercice3(L) {
    var res = "EXERCICE 3"
    //TAPE LE CODE DE L'EXERCICE 3 ICI!
    return res
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')