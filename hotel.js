// Initialize EmailJS with your user ID
emailjs.init('YOUR_USER_ID');

// Function to send email
function sendEmail(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const emailParams = {
    user_name: formData.get('name'),
    user_email: formData.get('email'),
    phone_number: formData.get('phoneNumber'),
    staying_option: formData.get('stayingOption'),
    pay_method: formData.get('payMethod'),
    room_name: formData.get('roomName'),
    room_features: formData.get('roomFeatures'),
    room_price_per_night: formData.get('roomPricePerNight'),
    room_price_per_day: formData.get('roomPricePerDay')
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mail has been sent successfully');
    }, error => {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu for small screens
  const menuToggler = document.getElementById("menu-toggler");
  const allLinks = document.querySelector(".all-link");

  menuToggler.addEventListener("change", function () {
    if (menuToggler.checked) {
      allLinks.style.display = "block";
    } else {
      allLinks.style.display = "none";
    }
  });

  // Smooth scroll to sections
  document.querySelectorAll(".header-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
});

// Existing code for room booking and handling booking pages
const roomContainer = document.getElementById("cards");

const dummyRoomData = [
  // Room data...
];

let personalInfo = {
  name: "",
  email: "",
  phoneNumber: "",
  stayingOption: "",
  payMethod: "",
};

const dots = document.getElementsByClassName("dot");

const Page1 = (page1, page2, data, bookingpage) => {
  const backBtn = document.getElementById("p1_backBtn");
  const continueBtn = document.getElementById("p1_nextBtn");

  const roomFeatures = document.getElementById("p1_roomFeatures");
  const name = document.getElementById("p1_name");
  const description = document.getElementById("p1_description");
  const status = document.getElementById("p1_status");
  const prices = document.getElementsByClassName("p1_price");

  if (data.roomStatus === "Avaliable") status.classList.add("avaliable");
  else status.classList.add("booked");
  
  // Setting Values
  name.textContent = data.name;
  status.textContent = data.roomStatus;
  description.textContent = data.description;

  data.roomFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    roomFeatures.appendChild(li);
  });

  prices[0].textContent = `${data.pricePerNight}.00`;
  prices[1].textContent = `${data.pricePerDay}.00`;

  // Add Events Listeners To The Buttons
  backBtn.onclick = () => {
    bookingpage.classList.add("disabled");
  };

  continueBtn.onclick = () => {
    dots[1].classList.add("active-dot");
    page2.classList.remove("disabled");
    page1.classList.add("disabled");
  };
};

const Page2 = (page1, page2, page3, data) => {
  const backBtn = document.getElementById("p2_backBtn");
  const continueBtn = document.getElementById("p2_nextBtn");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phoneNumber");
  const stayingOption = document.getElementById("stayingOp");
  const payMethod = document.getElementById("p_method");

  // Setting Values

  // Add Events Listeners To The Buttons
  backBtn.onclick = () => {
    dots[1].classList.remove("active-dot");
    page1.classList.remove("disabled");
    page2.classList.add("disabled");
  };

  continueBtn.onclick = () => {
    personalInfo.name = name.value;
    personalInfo.email = email.value;
    personalInfo.phoneNumber = phoneNumber.value;
    personalInfo.stayingOption = stayingOption.value;
    personalInfo.payMethod = payMethod.value;

    if (
      personalInfo.name !== "" &&
      personalInfo.email !== "" &&
      personalInfo.phoneNumber !== "" &&
      personalInfo.stayingOption !== "" &&
      personalInfo.payMethod !== ""
    ) {
      localStorage.setItem("personnalInfo", JSON.stringify(personalInfo));
      dots[2].classList.add("active-dot");
      page3.classList.remove("disabled");
      page2.classList.add("disabled");
    }
  };
};

const Page3 = (page1, page2, page3, data, bookingpage, status) => {
  const backBtn = document.getElementById("p3_backBtn");
  const continueBtn = document.getElementById("p3_nextBtn");

  // Personnal
  const name = document.getElementById("p3_p_name");
  const email = document.getElementById("p3_p_email");
  const phoneNumber = document.getElementById("p3_p_phoneNumber");
  const stayingOption = document.getElementById("p3_p_stayingOp");
  const payMethod = document.getElementById("p3_p_method");

  // Room
  const roomFeatures = document.getElementById("p3_roomFeatures");
  const room_name = document.getElementById("p3_name");
  const room_status = document.getElementById("p3_status");

  if (data.roomStatus === "Avaliable") room_status.classList.add("avaliable");
  else room_status.classList.add("booked");

  const room_prices = document.getElementsByClassName("p3_price");

  // Setting Values
  room_name.textContent = data.name;
  room_status.textContent = data.roomStatus;

  data.roomFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    roomFeatures.appendChild(li);
  });

  room_prices[0].textContent = `${data.pricePerNight}.00`;
  room_prices[1].textContent = `${data.pricePerDay}.00`;

  // Setting Values
  page3.addEventListener("pointerenter", () => {
    name.textContent = personalInfo.name;
    email.textContent = personalInfo.email;
    phoneNumber.textContent = personalInfo.phoneNumber;
    stayingOption.textContent = personalInfo.stayingOption;
    payMethod.textContent = personalInfo.payMethod;
  });

  // Add Events Listeners To The Buttons
  backBtn.onclick = () => {
    dots[2].classList.remove("active-dot");
    page2.classList.remove("disabled");
    page3.classList.add("disabled");
  };

  continueBtn.onclick = (e) => {
    e.preventDefault();
    bookingpage.classList.add("disabled");
    dots[0].classList.add("active-dot");
    dots[1].classList.remove("active-dot");
    dots[2].classList.remove("active-dot");
    page1.classList.remove("disabled");
    page3.classList.add("disabled");

    if (data.roomStatus === "Avaliable") {
      alert("You have booked the Room :)");
      data.roomStatus = "Booked";
      status.textContent = data.roomStatus;

      if (data.roomStatus === "Avaliable") status.classList.add("avaliable");
      else status.classList.add("booked");

      // Send email with booking details
      sendEmail(e);
    } else {
      alert("Sorry, The Room is already booked :(");
    }
    currenPageNumber = 1;
  };
};

const InitializeBookingPage = (data, status) => {
  const bookingpage = document.getElementById("booking-page");
  bookingpage.classList.remove("disabled");

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");

  // For Page 1
  Page1(page1, page2, data, bookingpage);

  // For Page 2
  Page2(page1, page2, page3, data);
  
  // For Page 3
  Page3(page1, page2, page3, data, bookingpage, status);
};

const RoomCard = (data) => {
  const card = document.createElement("div");
  const infoCon = document.createElement("div");
  const image = document.createElement("img");
  const status = document.createElement("p");
  const name = document.createElement("h3");
  const description = document.createElement("p");
  const btn = document.createElement("button");

  // Add all the class
  card.classList.add("card");
  infoCon.classList.add("card-info");
  status.classList.add("status");
  if (data.roomStatus === "Avaliable") status.classList.add("avaliable");
  else status.classList.add("booked");
  btn.classList.add("btn");

  // Assigning the values
  image.src = data.imageLink;
  image.alt = data.name;
  status.textContent = data.roomStatus;
  name.textContent = data.name;
  description.textContent = data.description;
  btn.textContent = "Book Now";

  // Appending the children tag to thier parents
  card.appendChild(infoCon);
  card.appendChild(btn);
  infoCon.appendChild(image);
  infoCon.appendChild(status);
  infoCon.appendChild(name);
  infoCon.appendChild(description);

  // Add Functionality to the Button
  btn.addEventListener("click", () => {
    // Initializing The Booking Page
    InitializeBookingPage(data, status);
  });

  return card;
};

const InitializeAll = () => {
  // Creating The Room Cards With the Dummy data
  dummyRoomData.forEach((room_d, index) => {
    roomContainer.appendChild(RoomCard(room_d));
  });
};

InitializeAll();

// Map
mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-0.43463, 6.04248],
  zoom: 14,
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker().setLngLat([-0.43463, 6.04248]).addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
  .setLngLat([12.65147, 55.608166])
  .addTo(map);
