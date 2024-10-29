document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "6f6a9a1a96d94478ae7202752242610"; //Yes I know this is visible, please don't abuse it.
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Nijmegen&aqi=no`;
  
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Check if it is day or night
        const isDay = data.current.is_day;
       

        // Set the background and the GIF based on day/night
        if (isDay === 1) {
            document.body.classList.add("daytime");
            document.getElementById("weather-gif").src = "images/sun.svg"; // Change to sun SVG
        } else {
            document.body.classList.add("nighttime");
            document.getElementById("weather-gif").src = "images/moon.gif"; // Keep moon GIF
        }
  
        // Get details
        const localTime = data.location.localtime; // Format: "YYYY-MM-DD HH:MM"
        const temperature = data.current.temp_c; 
        const condition = data.current.condition.text; 
  
        // Determine Answer
        const answerParagraph = document.querySelector('.answer');
        if (temperature >= 18 && condition.toLowerCase().includes("clear")) {
            answerParagraph.textContent = "Yes.";
        } 
        else if (temperature >= 20) {
            answerParagraph.textContent = "Yes.";
        } else {
            answerParagraph.textContent = "No.";
        }
  
        // Update the info paragraph
        const infoParagraph = document.querySelector('.info');
        infoParagraph.textContent = `Time: ${localTime.split(" ")[1]} | Temperature: ${temperature}°C | Condition: ${condition}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
});
