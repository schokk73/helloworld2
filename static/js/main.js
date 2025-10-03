// Form Input/Greeting Function
function displayGreeting() {
    // Get input and paragraph elements
    let nameInput = document.getElementById("nameInput");
    let message = document.getElementById("greetingMessage");

    let name = nameInput.value.trim();

    // Display greeting if name entered
    if (name) {
        message.textContent = `Hello, ${name} !`;
        message.style.fontSize = "20px";
        message.style.color = "black";
        showGreetingToast()
    } else {
        message.textContent = "Please enter your name!!"
        message.style.color = "red";
    }

    // Clear input field
    nameInput.value = "";

    return false;
}

// Call this from your form submit or click handlers
function showGreetingToast(name = "") {
  const toastEl = document.getElementById('greetingToast');
  const toastBody = document.getElementById('toastMessage');

  // Optional personalized message
  toastBody.textContent = name
    ? `Hello again, ${name}! 👋`
    : "Hello again! 👋";
// Dispose any previous instance so new options take effect
  let toast = bootstrap.Toast.getInstance(toastEl);
  if (toast) toast.dispose();

  // Create with explicit options
  toast = new bootstrap.Toast(toastEl, {
    autohide: true,
    delay: 3000   // 3 seconds
  });

  toast.show();
}
// Toggle Function
let toggled = false;
function toggleTextAndStyle() {
    // Grab the paragraph
    let paragraph = document.getElementById("foodParagraph");
    if (!toggled) {
        // Change text
        paragraph.textContent = "Great, you wanted to learn about my coursework! As an aerospace engineering major, I have to take a lot of STEM classes to build up my technical knowledge to prepare for my major required classes. Some of my general STEM classes include Differential Equations (MATH246), Physics 3 (PHYS270), and Mechanics 2 (ENES220). After my general STEM classes, I have to take my Aerospace major classes. So far I've taken Aerospace Computing Fundamentals (ENAE202), where I learned how to use MATLAB and C++. Currently, I'm taking Introduction to Aerospace Systems (ENAE283), where I'm learning about aerodynamic forces, pressures, orbital flight, and more aerospace specific concepts. It's going to be a treacherous journey ahead, but I'm excited for the challenge! I've listed a couple courses below, click the checkboxes to indicate which classes you've also taken. Click the New Info button to switch back topics and learn about my favorite foods."

        // Change text style
        paragraph.style.color = "blue";
        paragraph.style.fontWeight = "bold";

        // Mark as toggled
        toggled = true;
    } else {
        // Revert to original text and style
        paragraph.textContent = "I am a big food lover, an avid cuisine enjoyer, a culinary appreciator. Long story short, I love trying new foods from different cuisines and cultures from all over the world. Not only is it tasty and delicious, but it's also a great way to learn more about different cultures and their customs. My favorite type of cuisine at the moment is Mexican. Ranging from Chipotle bowls to hot enchiladas, I love the different spices and flavors used in Mexican food, providing me with a great eating experience. My second favorite type of cuisine is Indian. As someone who grew up eating Indian food, this cuisine is comfort food for me and reminds me of home. My third favorite type of cuisine would probably be Thai food. A hot plate of Pad Thai on a cold day would not only dazzle me with its spice and savoriness, but also fill me up with warmth and content. Thanks for reading, and I hope that you also become an avid food lover! Click the New Info button to switch topics and learn about my coursework."
        paragraph.removeAttribute("style");
        toggled = false;
    }
}

// Food list Function
function displayFavoriteFoods() {
    // Array of Favorite Foods
    let favoriteFoods = ["Enchiladas", "Tacos", "Chicken Biryani", "Pani Puri", "Pad Thai", "Sushi", "Chicken Sandwiches", "Cheesecake"];
    let list = document.getElementById("foodList");
    // Loop to create list
    for (let i=0; i < favoriteFoods.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = favoriteFoods[i];
        listItem.style.color = "#800000";
        // Append to list
        list.appendChild(listItem);
    }
}
// Call the food list function once the script loads
displayFavoriteFoods();

// Courses Check Box Function
function showCourses() {
    let checkboxes = document.getElementsByName("courses");
    // Create an array to store selected courses
    let selectedCourses = [];

    // Loop through checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
     if (checkboxes[i].checked) {
          selectedCourses.push(checkboxes[i].value);
     }
    }

    // If no course selected
     if (selectedCourses.length === 0) {
        alert("You did not select any courses.");
    } else {
        // Join the selected courses into a single string
        alert("You have taken: " + selectedCourses.join(", "));
      }

    // Prevent form from reloading page
     return false;
}
