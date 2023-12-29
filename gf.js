//variables
    let sacchi=true;
    let jhut=false;
//functions
    
    function replace_kardo(array,value_position,new_value){
       array[value_position]=new_value;
    }
    function nikalo(array,variable_or_value){
        array.pop(variable_or_value);
    }
    function daalo(array,variable_or_value){
        array.push(variable_or_value)
    }
    function bold_do(txt){
        console.log(txt);
    }
    function repeat_kardo(variable1,variable2,kaam){
        while(variable1<=variable2){
            kaam();
            variable1++;
        }
    }    
    function dekho_agar(variable1,condition,variable2,kaam){

        if (condition=="kam hai"){
            if(variable1<variable2){
                bold_do(true);
                kaam();
            }
            else{
                bold_do("sorry sweetheart kam nhi hoga kyu ki condition false hai");

            }
        }
        if (condition=="jyada hai"){
            if(variable1>variable2){
                bold_do(true);
                kaam();
            }
            else{
                bold_do("sorry sweetheart kam nhi hoga kyu ki condition false hai");

            }
        }
        if (condition=="same hai"){
            if(variable1==variable2){
                bold_do(true);
            }
            else{
                bold_do("sorry sweetheart kam nhi hoga kyu ki condition false hai");

            }
        }
        if(condition=="same nhi hai"){
            if(variable1!=variable2){
                bold_do(true);
            }
            else{
                bold_do("sorry sweetheart kam nhi hoga kyu ki condition false hai");

            }
        }
        
    }
    function likhdo(txt){
        document.write(txt);
    }
    
