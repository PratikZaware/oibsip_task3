function convertTemp()
{
    console.log("Submitted");
    let tempValue=document.getElementById('temperature').value;
    console.log(tempValue);

    let optionChoosen=document.getElementById('tempoption');
    let selectedoption=tempoption.options[optionChoosen.selectedIndex].value;
    console.log(selectedoption);

    let ans;

    if(selectedoption=='Celcius')
    {
        ans=convertToFah(tempValue)+" Fahrenheit";
    }
    else
    {
        ans=convertToCel(tempValue)+" Celcius";
    }
    document.getElementById('result').innerHTML=ans;
}

function convertToFah(value)
{
    return (value*9/5)+32;
}

function convertToCel(value)
{
    return (value-32)*5/9;
}