function calculateAge(){
    const day =parseInt(document.getElementById("day").value);
    const month=parseInt(document.getElementById("month").value)-1;
    const year =parseInt(document.getElementById("year").value);
    const result=document.getElementById("result");
    //    verify if it is a number
    if (isNaN(day) || isNaN(month) || isNaN(year)){
        result.innerText = "Please fill in all the fields correctly";
        return;
    }
const birthDate = new Date(year, month, day);
const today = new Date();
if (birthDate > today) {
  result.innerText = "Birth date cannot be in the future";
  return;
}
const ageYear = today.getFullYear() - birthDate.getFullYear();
const ageMonth = today.getMonth()- birthDate.getMonth();
const ageDay = today.getDate() - birthDate.getDate();

if (ageDay <0){
    ageMonth--;
    ageDay +=new Date(today.getFullYear, today.getMonth, 0).getDate();
}
if (ageMonth < 0){
    ageYear --;
    ageMonth += 12;
}
result.innerText =` You are ${ageYear} years, ${ageMonth} months, and ${ageDay} days old.`
}


