// Dummy rooms data
// You can add more room here;
// Modify this to add more rooms
const dummyRoomData = [
  // Room 1
  {
    name: "Perfect and Comfortable Room",
    imageLink: "./images/room2.jpeg",
    description: "Welcome To FEARNOT Rooms of Peace",
    roomFeatures: ["One Bed Room", "A hall", "No Air Condition", "No TV"],
    pricePerNight: 10.0,
    pricePerDay: 60.0,
    roomStatus: "Avaliable",
  },
  // Room 2
  {
    name: "Resting Room for Rent",
    imageLink: "./images/room3.jpeg",
    description: "Here is FEARNOT Palace",
    roomFeatures: [
      "One Bed Room",
      "A hall",
      "No Air Condition",
      "Digital TV with limited Stations",
    ],
    pricePerNight: 20.0,
    pricePerDay: 120.0,
    roomStatus: "Avaliable",
  },
  // Room 3
  {
    name: "Peaceful and Relaxing",
    imageLink: "./images/room4.jpeg",
    description: "Welcome To FEARNOT Rooms of Peace and Relaxing",
    roomFeatures: [
      "Two Masters Bed Rooms with King Size Beds",
      "Air Conditioning",
      "A hall",
      "A min Office",
      "Nice View",
      "Digital TV with All Stations",
    ],
    pricePerNight: 1500,
    pricePerDay: 9000,
    roomStatus: "Avaliable",
  },
  // Room 4
  {
    name: "Perfect and Comfortable Room",
    imageLink: "./images/azam.jpeg",
    description: "Feel Free To Stay In Our Rooms",
    roomFeatures: [
      "One Master Bed Room with a Queen Size Bed",
      "Air Conditioning",
      "A hall",
      "Nice View",
      "Digital TV with All Stations",
    ],
    pricePerNight: 800,
    pricePerDay: 4800,
    roomStatus: "Avaliable",
  },
  // Room 5
  {
    name: "Family Room",
    imageLink: "./images/room5.jpeg",
    description: "Feel Free To Stay In Our Rooms",
    roomFeatures: [
      "One Master Bed Room with A Queen Size Bed For the Parents",
      "Three other bed room for the Children",
      "Air Conditioning",
      "A hall",
      "Nice View",
      "Digital TV with All Stations",
    ],
    roomStatus: "Avaliable",
    pricePerNight: 1600,
    pricePerDay: 9600,
    roomStatus: "Avaliable",
  },
  // Room 6
  {
    name: "Perfect and Comfortable Room",
    imageLink: "./images/room5.jpeg",
    description: "Feel Free To Stay In Our Rooms",
    roomFeatures: [
      "One Master Bed Room with Air Conditioning",
      "A hall",
      "A min Office",
      "Nice View",
      "Digital TV with All Stations",
    ],
    pricePerNight: 1000,
    pricePerDay: 6000,
    roomStatus: "Avaliable",
  },
];

// =========== ALL OF MY FUNCTIONS =================
// Creating the room card for all the room data above
const roomContainer = document.getElementById("cards");
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

  console.log(continueBtn);
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
  // Room
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
  // Personnal
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

function sendEmail(e) {
  e.preventDefault();
  console.log(e);
  const formData = new FormData(e.target);
  console.log(Object.fromEntries(formData).email);

  alert("Mail has been sent successfully");
}

// =========== END =================

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

  // Handle "Book Now" buttons
  // document.querySelectorAll(".btn").forEach((button) => {
  //   button.addEventListener("click", function () {
  //     alert("Booking functionality is not yet implemented.");
  //   });
  // });

  // WhatsApp Button Confirmation
  // document
  //   .querySelector(".whatsapp-button")
  //   .addEventListener("click", function (event) {
  //     event.preventDefault();
  //     const userConfirmed = confirm(
  //       "Do you want to open WhatsApp to contact us?"
  //     );
  //     if (userConfirmed) {
  //       window.open(this.href, "_blank");
  //     }
  //   });
});

InitializeAll();

// Map
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdncmV5ZnlubjE5IiwiYSI6ImNseWdzMDl2eTBlM2QyanM4cDRjeG1ydXYifQ.ymBoZSMhHN3AYBol1sBsfw";
const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
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
