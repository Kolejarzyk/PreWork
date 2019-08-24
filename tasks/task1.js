// Aby uruchomić kod wystarczy wpisać w konsoli 'npm install' a potem 'node tasks/task1.js init'
//Główna funkcja która posiada pustą tablicę dat którą zapełniamy w pętli for, zwracamy funkcję ReadDates która wypisze wylosowane daty
function ArrayOfRandomDates(start, end, amount)
{
    let Dates = [];
    for(var i = 0; i < amount; i++) {
        Dates.push(randomDate(start,end));    
    }
    
    return readDates(Dates)
}
/*Oczekiwany wynik zwrócony przez wywołanie funkcji
ArrayOfRandomDates(new Date(2019,05,23), new Date(2019,06,04),3) - wywołanie funkcji
Jeden z spodziewanych wyników
<Poniedziałek,2019,7,1>
<Sobota,2019,6,29>
<Wtorek,2019,6,25>
*/

//Funkcja pomocniczna która zwraca losową datę w przedziale <start;end>
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//funkcja do wypisania tablicy do konsoli. Jako że funkcja getMonth() zwraca liczby od 0 do 11 dodałem +1 aby zgadzała się faktyczna liczba miesiąca
function readDates(arrayOfDates)
{ 
    
  return arrayOfDates.forEach(function (item) {
    let month = item.getMonth()+1;
    console.log("<"+weekdayToString(item.getDay())+","+item.getFullYear()+","+month+","+item.getDate()+">");
  })
}

// funkcja do zamiany numeru dnia na tekst
function weekdayToString(weekday)
{
    switch (weekday) {
        case 0:
            return "Niedziela"; 
        case 1:
            return "Poniedziałek";
        case 2:
            return "Wtorek";
        case 3:
            return "Środa";
        case 4:
            return "Czwartek";
        case 5:
            return "Piątek";
        case 6:
            return "Sobota";
        default:
            break;
    }
}

module.exports.init = function ()
{
    ArrayOfRandomDates(new Date(2019,05,23), new Date(2019,06,04),3);
}

require('make-runnable');