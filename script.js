const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3bbc07404bmsh44ca04c0df3e864p13ab4bjsn7102149dae03',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  }; 

  var templogo; // Declare templogo variable
  var weatherlogo; // Declare templogo variable
  var timelogo; // Declare templogo variable
  
  const getWeather = async (city) => {
    cityName.innerHTML = city;
    
    try {
      const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
      const data = await response.json();
      
      console.log(data);
      cloud_pct.innerHTML = data.cloud_pct;
                                      weatherlogo = data.cloud_pct;
      temp.innerHTML = data.temp;
                templogo = data.temp; // Assign value to templogo variable
      temp2.innerHTML = data.temp;
      // feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      const minT = data.min_temp;
      min_temp.innerHTML = minT - 5;
      const maxT = data.max_temp;
      max_temp.innerHTML = maxT + 2;
      wind_speed.innerHTML = data.wind_speed;
                                          timelogo = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      const sunriseTimestamp = data.sunrise;
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunriseTime = sunriseDate.toLocaleTimeString();
      sunrise.innerHTML = sunriseTime;
      const sunsetTimestamp = data.sunset;
      const sunsetDate = new Date(sunsetTimestamp * 1000);
      const sunsetTime = sunsetDate.toLocaleTimeString();
      sunset.innerHTML = sunsetTime;
      
      processTempLogo(templogo);
      processTempLogo2(weatherlogo);
      processTempLogo3(timelogo);
    } catch (err) {
      console.error(err);
    }
  }

  submit.addEventListener("click", (e)=>{
      e.preventDefault()
      getWeather(city.value)
  })
  
getWeather("Indore")


const processTempLogo = (templogo) => {
  console.log(templogo);
  
  

  
// logo part
    
console.log(templogo); 

var temperatureIconContainer = document.getElementById('temperature-icon-container');
temperatureIconContainer.innerHTML = '';

// Create the SVG element
var temperatureIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
temperatureIcon.setAttribute("class", "temperature-icon");
temperatureIcon.setAttribute("viewBox", "0 0 16 16");

// Check the temperature value and set the appropriate SVG content
if (templogo >= 26) {
  temperatureIcon.innerHTML = `
  <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
  <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>

  `;
} else if(templogo < 26) {
  temperatureIcon.innerHTML = `
  <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5z"/>
  <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z"/>

  `;
}

// Append the SVG icon to the container
temperatureIconContainer.appendChild(temperatureIcon);

// geting temlogo value to put on text 10 days row
                    function generateRandomTemperature() {
                      return parseInt(templogo) + Math.floor(Math.random() * 7) - 3;
                    }
                    
                    // Get all the temp-icon elements and update them with random temperature values
                    const iconElements = document.querySelectorAll("#temp-icon");
                    iconElements.forEach((iconElement) => {
                      const randomTemp = generateRandomTemperature();
                      iconElement.innerHTML = randomTemp;
                    });
}





// *************** weather logo *****************************

const processTempLogo2 = (weatherlogo) => {
  console.log(weatherlogo);
// logo part
    
console.log(weatherlogo); 

var weatherIconContainer2 = document.getElementById('weather-icon-container');
weatherIconContainer2.innerHTML = '';

// Create the SVG element
var weatherIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
weatherIcon.setAttribute("class", "temperature-icon");
weatherIcon.setAttribute("viewBox", "0 0 16 16");

// Check the temperature value and set the appropriate SVG content
if (weatherlogo >= 40) {
  weatherIcon.innerHTML = `
  <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z"/>

  `;
} else if(weatherlogo < 40 && weatherlogo > 30) {
  weatherIcon.innerHTML = `
  <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
  <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>

  `;
}
 else if(weatherlogo <= 30 ) {
  weatherIcon.innerHTML = `
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  `;
}

// Append the SVG icon to the container
weatherIconContainer2.appendChild(weatherIcon);

                  function generateRandomActualPrecipitation() {
                    // return parseInt(timelogo) + Math.floor((Math.random() * 7)) * 20 - 12;
                    return Math.abs(parseInt(timelogo) + Math.floor((Math.random() * 7)) * 15 - 8);
                  }

                  // Get all the temp-icon elements and update them with random Precipitation values
                  const iconElements = document.querySelectorAll("#actualPrep-icon");
                  iconElements.forEach((iconElement) => {
                    const randomPrep = generateRandomActualPrecipitation();
                    iconElement.innerHTML = randomPrep;
                  });

}




// *************** time logo *****************************

const processTempLogo3 = (timelogo) => {
  console.log(timelogo);
// logo part
    
console.log(timelogo); 

var timeIconContainer3 = document.getElementById('time-icon-container');
timeIconContainer3.innerHTML = '';

// Create the SVG element
var timeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
timeIcon.setAttribute("class", "temperature-icon");
timeIcon.setAttribute("viewBox", "0 0 16 16");

// Check the temperature value and set the appropriate SVG content
if (timelogo < 5) {
  timeIcon.innerHTML = `
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>

  `;
} else {
  timeIcon.innerHTML = `
<path d="M1.125 2.45A.892.892 0 0 1 1 2c0-.26.116-.474.258-.634a1.9 1.9 0 0 1 .513-.389c.387-.21.913-.385 1.52-.525C4.514.17 6.18 0 8 0c1.821 0 3.486.17 4.709.452.607.14 1.133.314 1.52.525.193.106.374.233.513.389.141.16.258.374.258.634 0 1.011-.35 1.612-.634 2.102-.04.07-.08.137-.116.203a2.55 2.55 0 0 0-.313.809 2.938 2.938 0 0 0-.011.891.5.5 0 0 1 .428.849c-.06.06-.133.126-.215.195.204 1.116.088 1.99-.3 2.711-.453.84-1.231 1.383-2.02 1.856-.204.123-.412.243-.62.364-1.444.832-2.928 1.689-3.735 3.706a.5.5 0 0 1-.748.226l-.001-.001-.002-.001-.004-.003-.01-.008a2.142 2.142 0 0 1-.147-.115 4.095 4.095 0 0 1-1.179-1.656 3.786 3.786 0 0 1-.247-1.296A.498.498 0 0 1 5 12.5v-.018a.62.62 0 0 1 .008-.079.728.728 0 0 1 .188-.386c.09-.489.272-1.014.573-1.574a.5.5 0 0 1 .073-.918 3.29 3.29 0 0 1 .617-.144l.15-.193c.285-.356.404-.639.437-.861a.948.948 0 0 0-.122-.619c-.249-.455-.815-.903-1.613-1.43-.193-.127-.398-.258-.609-.394l-.119-.076a12.307 12.307 0 0 1-1.241-.334.5.5 0 0 1-.285-.707l-.23-.18C2.117 4.01 1.463 3.32 1.125 2.45zm1.973 1.051c.113.104.233.207.358.308.472.381.99.722 1.515 1.06 1.54.317 3.632.5 5.43.14a.5.5 0 0 1 .197.981c-1.216.244-2.537.26-3.759.157.399.326.744.682.963 1.081.203.373.302.79.233 1.247-.05.33-.182.657-.39.985.075.017.148.035.22.053l.006.002c.481.12.863.213 1.47.01a.5.5 0 1 1 .317.95c-.888.295-1.505.141-2.023.012l-.006-.002a3.894 3.894 0 0 0-.644-.123c-.37.55-.598 1.05-.726 1.497.142.045.296.11.465.194a.5.5 0 1 1-.448.894 3.11 3.11 0 0 0-.148-.07c.012.345.084.643.18.895.14.369.342.666.528.886.992-1.903 2.583-2.814 3.885-3.56.203-.116.399-.228.584-.34.775-.464 1.34-.89 1.653-1.472.212-.393.33-.9.26-1.617A6.74 6.74 0 0 1 10 8.5a.5.5 0 0 1 0-1 5.76 5.76 0 0 0 3.017-.872.515.515 0 0 1-.007-.03c-.135-.673-.14-1.207-.056-1.665.084-.46.253-.81.421-1.113l.131-.23c.065-.112.126-.22.182-.327-.29.107-.62.202-.98.285C11.487 3.83 9.822 4 8 4c-1.821 0-3.486-.17-4.709-.452-.065-.015-.13-.03-.193-.047zM13.964 2a1.12 1.12 0 0 0-.214-.145c-.272-.148-.697-.297-1.266-.428C11.354 1.166 9.769 1 8 1c-1.769 0-3.354.166-4.484.427-.569.13-.994.28-1.266.428A1.12 1.12 0 0 0 2.036 2c.04.038.109.087.214.145.272.148.697.297 1.266.428C4.646 2.834 6.231 3 8 3c1.769 0 3.354-.166 4.484-.427.569-.13.994-.28 1.266-.428A1.12 1.12 0 0 0 13.964 2z"/>
  `;
}

// Append the SVG icon to the container
timeIconContainer3.appendChild(timeIcon);



                      function generateRandomPrecipitation() {
                        return parseInt(weatherlogo) + Math.floor(Math.random() * 7) - 1;
                      }

                      // Get all the temp-icon elements and update them with random Precipitation values
                      const iconElements = document.querySelectorAll("#prep-icon");
                      iconElements.forEach((iconElement) => {
                        const randomPrep = generateRandomPrecipitation();
                        iconElement.innerHTML = randomPrep;
                      });

}

function getRandomData() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    return data;
  }

  document.addEventListener("DOMContentLoaded", function() {
    const chart1Data = getRandomData();
    const chart2Data = getRandomData();
    const chart3Data = getRandomData();

    const chart1 = new Chart(document.getElementById("chart1").getContext("2d"), {
      type: "bar",
      data: {
        labels: ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 AM"],
        datasets: [{
            label: " Atmospheric Pressure Percantage",
            data: chart1Data,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const chart2 = new Chart(document.getElementById("chart2").getContext("2d"), {
    type: "line",
    data: {
        labels: ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 AM"],
        datasets: [{
          label: " Visiblity Ease",
          data: chart2Data,
          borderColor: "rgba(242, 0, 48, 1)",
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
                }
            }
        }
    });
    
    const chart3 = new Chart(document.getElementById("chart3").getContext("2d"), {
        type: "pie",
        data: {
            labels: ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 AM"],
            datasets: [{
          label: "Pressure",
          data: chart3Data,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8D6E63", "#42A5F5", "#66BB6A", "#FFAB40", "#FF4081", "#9575CD", "#BDBDBD"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  });

// function toggleMode() {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark-mode");
  
//   const toggleButton = document.querySelector(".toggle");
//   toggleButton.classList.toggle("active");
// }

// window.addEventListener("DOMContentLoaded", function() {
//   const toggleButton = document.querySelector(".toggle");
  
//   setTimeout(function() {
//     toggleButton.style.opacity = 1;
//   }, 5000);
// });


// function toggleMode() {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark-mode");

//   const toggleButton = document.querySelector(".toggle");
//   toggleButton.classList.toggle("active");
// }

// window.addEventListener("DOMContentLoaded", function() {
//   const toggleButton = document.querySelector(".toggle");

//   setTimeout(function() {
//     toggleButton.style.opacity = 1;
//   }, 5000);
// });


function togglePage() {
  const currentURL = window.location.href;

  if (currentURL.endsWith("indexLight.html")) {
    window.location.href = "indexDark.html";
  } else if (currentURL.endsWith("indexDark.html")) {
    window.location.href = "/";
  } else {
    window.location.href = "indexDark.html";
  }
}


document.addEventListener("DOMContentLoaded", function() {
    toggleZoomScreen();
  });

  function toggleZoomScreen() {
    document.body.style.zoom = "65%";
  }

// block

// Block the entire keyboard by default

// Block the entire keyboard by default
var isKeyboardBlocked = true;

// Get the input field element
var inputField = document.getElementById("city");

// Event listener for the input field focus
inputField.addEventListener("focus", function(event) {
  // Unblock the keyboard
  isKeyboardBlocked = false;
});

// Event listener for keydown event
document.addEventListener("keydown", function(event) {
  // Check if the keyboard should be blocked
  if (event.ctrlKey) {
    event.preventDefault();
  }
});


//text selection

if (typeof document.onselectstart!='undefined' ) {
  document.onselectstart=new Function ('return false' );
  }
  else {
  document.onmousedown=new Function ('return false' );
  document.onmouseup=new Function ('return true' );
  }

//right click

document.addEventListener('contextmenu', event => event.preventDefault()); 


// Block the entire keyboard
// document.addEventListener("keydown", function(event) {
//   event.preventDefault();
// });

// $(document).keydown(function (event) {
//   var message = 'Content is protected\nYou cannot view the Dev Tools.';
  
//   if (event.code === "KeyI" && event.ctrlKey && event.shiftKey) {
//     alert(message);
//     return false;
//   }
// });

//   document.addEventListener('contextmenu', event => event.preventDefault());
  
//   if (typeof document.onselectstart!='undefined' ) {
//     document.onselectstart=new Function ('return false' );
//     }
//     else {
//     document.onmousedown=new Function ('return false' );
//     document.onmouseup=new Function ('return true' );
//     }


//     document.onkeydown = function(e) {
//       var message='Content is protected\nYou cannot view the page source.';
//       if (e.ctrlKey &&
//       (e.keyCode === 67 ||
//       e.keyCode === 86 ||
//       e.keyCode === 85 ||
//       e.keyCode === 117)) {
//       // alert(message);
//       return false;
//       } else {
//       return true;
//       }
//       };
//       $(document).keypress('u',function(e) {
//       if(e.ctrlKey)
//       {
//       return false;
//       }
//       else
//       {
//       return true;
//       }
//       });


//       document.onkeydown = function(e) {
//         if (e.ctrlKey && e.shiftKey && I 
//             (e.code === "keyI" )) {
//             return false;
//         }
// };
//       window.oncontextmenu = function () {
//         return false;
//     }
//     $(document).keydown(function (event) {
//         if (event.keyCode == 123) {
//             return false;
//         }
//         else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
//             return false;
//         }
//     });

//   function disableClick(){
//  document.onclick=function(event){
//  if (event.button == 2) {
//  alert('Right Click Message');
//  return false;
//  }
//  }
//  }




// disable Developer Console
// var onDevToolsOpen = function() {
//   window.location.href = "about:blank"; //redirect user to a blank page
// }
// window.addEventListener("devtoolschange", function(event) {
//   if(event.detail.isOpen) {
//       onDevToolsOpen();
//   }
// });

// document.addEventListener('keydown', function(e) {
//     if ((e.ctrlKey || e.metaKey) && (e.keyCode === 67 || e.keyCode === 85)) { // Ctrl+C or Ctrl+U
//         e.preventDefault();
//         // alert('Copying and viewing page source is not allowed.');
//     }
// });


//   document.onkeypress = function (event) {
// event = (event || window.event);
// if (event.keyCode == 123) {
// return false;
// }
// }
// document.onmousedown = function (event) {
// event = (event || window.event);
// if (event.keyCode == 123) {
// return false;
// }
// }
// document.onkeydown = function (event) {
// event = (event || window.event);
// if (event.keyCode == 123) {
// return false;
// }
// }

// $(document).keyup(function(b) {     

//   if (b.keyCode == 16) {return false;}
//   if (b.keyCode == 17) {return false;}

//   $("body").append(b.keyCode + " ");


// });


// $(window).on('keydown',function(event)
// {
// if(event.keyCode==123)
// {
//     alert('Entered F12');
//     return false;
// }
// else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
// {
//     alert('Entered ctrl+shift+i')
//     return false;  //Prevent from ctrl+shift+i
// }
// else if(event.ctrlKey && event.keyCode==73)
// {
//     alert('Entered ctrl+shift+i')
//     return false;  //Prevent from ctrl+shift+i
// }
// });
// $(document).on("contextmenu",function(e)
// {
// alert('Right Click Not Allowed')
// e.preventDefault();
// });


// disable Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J and F12 key events
// document.addEventListener('keydown', function(event) {
//   if (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 67 || event.keyCode == 74 || event.keyCode == 123)) {
//       event.preventDefault();
//   }
// });
//   function toggleMode() {
//     const body = document.querySelector("body");
//     body.classList.toggle("dark-mode");

//     const toggleButton = document.querySelector(".toggle");
//     toggleButton.classList.toggle("active");

//     // Check current page and redirect accordingly
//     const currentPage = window.location.pathname;
//     const currentPageName = currentPage.substring(currentPage.lastIndexOf("/") + 1);
    
//     if (currentPageName === "indexLight.html") {
//       if (body.classList.contains("dark-mode")) {
//         // Redirect to indexDark.html with dark mode
//         window.location.href = "indexDark.html?mode=dark";
//       } else {
//         // Redirect to indexDark.html with light mode
//         window.location.href = "indexDark.html?mode=light";
//       }
//     } else if (currentPageName === "indexDark.html") {
//       if (body.classList.contains("dark-mode")) {
//         // Redirect to indexLight.html with dark mode
//         window.location.href = "indexLight.html?mode=dark";
//       } else {
//         // Redirect to indexLight.html with light mode
//         window.location.href = "indexLight.html?mode=light";
//       }
//     }
//   }

//   window.addEventListener("DOMContentLoaded", function() {
//     const toggleButton = document.querySelector(".toggle");

//     setTimeout(function() {
//       toggleButton.style.opacity = 1;
//     }, 500);
//   });


//   function convertTime(unixTime, offset){
//     let dt = new Date((unixTime + offset) * 1000)
//     let h = dt.getHours()
//     let m = "0" + dt.getMinutes()
//     let t = h + ":" + m.substr(-2)
//     return t
// }

// let sRise = convertTime(json.sys.sunrise, json.timezone)
// let sSet = convertTime(json.sys.sunset, json.timezone)

// const url = "weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow";
// const options = {
// method: "GET",
// headers: {
// "content-type": "application/octet-stream",
// "X-RapidAPI-Key": "3bbc07404bmsh44ca04c0df3e864p13ab4bjsn7102149dae03",
// "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
// }
// };

// fetch(url, options)
// .then(response => response.json())
// .then((response) => {
    
    
    
    
//     console.log(response)
//     cloud_pct = response.cloud_pct
//     temp = response.temp
//     feels_like = response.feels_like
//     humidity = response.humidity
//     min_temp = response.min_temp
//     max_temp = response.max_temp
//     wind_speed = response.wind_speed
//     wind_degrees = response.wind_degrees
//     sunrise = response.sunrise
//     sunset = response.sunset
// })
// .catch(err => console.error(err));
Dark