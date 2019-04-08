var money = prompt("Сколько вы зарабатываете в месяц"," ");
var time = prompt("Введите дату в формате","YYYY-MM-DD");
var a1  = prompt("Введите обязательную статью расходов в этом месяце?"," ");
var a2 = prompt( "Во сколько обойдется?", " ");
var appData = new Array;
 appData = 
{
    "бюджет" : 'money',
    "данные времени" : 'time',
    
     expenses:{
        a1:a2
    },
    "необязательными расходами": optionalExpenses ={},
    income :{},
    saving : false
};
var day1 = (Math.round(money/30) + "рублей");
alert(day1);