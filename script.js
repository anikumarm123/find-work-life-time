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
    year_val = x;
    console.log(year_val);

}


function fun(num) {
    
    var day_select = document.querySelector('#day');

    
    var month = num;
    console.log(month);
    if (year_val % 4 == 0 && month == "Feb") {
        for (i = 1; i <= 29; i++) {
         var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_select.append(day_option);
        
        }   
        
    }
    else {
       for(i =1;i <= 28 ;i++){
        var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_select.append(day_option);
         
       }
    }
    if(month == "Jan"|| month =="Mar"||month=="May"||month=="Jul"||month=="Auc"||month=="Oct"||month=="Dec"){
        for(i=1;i<= 31;i++){
        var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_select.append(day_option);
         
        }
    }
    else if(month == "Apr"|| month =="Jun"||month=="Sep"||month=="Nov"){
        for(i=0;i<= 30;i++){
        var day_option = document.createElement('option'); 
         day_option.textContent=i;
         day_select.append(day_option);
         
        }
    }
    
}


