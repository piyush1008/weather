const submitBtn=document.getElementById("submitBtn");
const cityname=document.getElementById('cityname');
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");

const data_hide=document.querySelector('.middle_layer');

const getInfo=async(e)=>{
    e.preventDefault();
    let cityVal=cityname.value;
    if(cityVal==="")
    {
        city_name.innerText=`Plz write the name before search`;
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d2c89912c2b8ecc68917317e643ab1e8`
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name} ,${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            console.log(arrData[0].main.temp)
           // temp_status.innerText=arrData[0].weather[0].main;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear")
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood=="Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood=="Rain")
            {
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            data_hide.classList.remove('data_hide');

        }catch{
            city_name.innerText=`Plz Enter The City Name Properly`;
            data_hide.classList.add('data_hide');
        }
       
    }

}
submitBtn.addEventListener('click',getInfo);