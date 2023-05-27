//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
// console.log(colorSelect);

function removeColor(){
    const optionValue = colorSelect.value;
    // console.log(optionValue);
    const options = document.getElementsByTagName("option");
    // console.log(options[2].value);
   
    for(const deleteoption of options){
        if(deleteoption.value === optionValue){
            // console.log(option.value);
            deleteoption.remove();
        }
    }

}