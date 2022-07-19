var selectBox = document.querySelector('#select-cls');

var year = selectBox.setAttribute('onchange', 'yearId(value)');
 

for (i = 1972; i <= 2006; i++) {

    var option_val = document.createElement("option");

    option_val.value = i;

    option_val.textContent = i;

    selectBox.append(option_val);

}
var year_val;

function yearId(x) {

    year_val = parseInt(x);

    console.log(year_val);
}



var day_select = document.querySelector('#day');

var day;

function days(d){

    day = parseInt(d);

    console.log(day);
}

var selectMonth =document.getElementById('select-month');

 selectMonth.setAttribute('onchange','fun(this.value)');

var month;

function fun(month_val) { 
    month = parseInt(month_val);
    console.log(month);
    if (year_val % 4 == 0 && month == "2") {
        day_select.innerHTML='';
        for (i = 1; i <= 29; i++) {
         var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_option.setAttribute('value',i);
         day_select.append(day_option);
        }    
    }
    else {
        day_select.innerHTML='';
       for(i = 1;i <= 28 ;i++){
        var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_option.setAttribute('value',i);
         day_select.append(day_option);
       }
    }
    if(month == "1"|| month =="3"||month=="5"||month=="7"||month=="8"||month=="10"||month=="12"){
        day_select.innerHTML='';
        for(i = 1;i <= 31;i++){
        var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_option.setAttribute('value',i);
         day_select.append(day_option);
        }
    }
    else if(month == "4"|| month =="6"||month=="9"||month=="11"){
        day_select.innerHTML='';
        for(i = 1;i <= 30; i++){
        var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_option.setAttribute('value',i);
         day_select.append(day_option);
        }
    }
    
}


var retiementAge = document.getElementById('r-age');

retiementAge.setAttribute('onchange','retirement_Age(this.value)');

for(i = 50 ;i <= 60; i++){
    var r_option = document.createElement('option');
    r_option.textContent = i;
    r_option.value = i;
    retiementAge.append(r_option);
}

var r_Year;

function retirement_Age(retirement_val){

   r_Year =parseInt(retirement_val); 

   console.log(r_Year);
}
var goButton = document.getElementById('r-b');

goButton.innerHTML="GO";
 
goButton.addEventListener('click',rt_Age)

function rt_Age(){

    //var retirement_Year = new Date(r_Year+year_val,month,day);
    var full_Year = r_Year+year_val;
    var now_Date = new Date();
    var now_Year = now_Date.getFullYear();

    var greenBox = full_Year-now_Year;
    var redBox = now_Year-year_val;

    console.log(redBox);

    var main_div = document.querySelector('.main-div');
    main_div.innerHTML='';
    for(i = 1;i <= redBox; i++){
        var redBox_p = document.createElement('p');
       redBox_p.setAttribute('class','r-box');
        main_div.append(redBox_p);
    } 

     for(i = 1; i <= greenBox; i++){
       var greenBox_p = document.createElement('p');
       greenBox_p.setAttribute('class','g-box');
       main_div.append(greenBox_p);
     }
    
}





