// ================= NATIONAL REAL ESTATE SYSTEM =================

const cityRates = {

  Pune: {
    "Baner": 10700, "Wakad": 8400, "Aundh": 11800, "Kharadi": 10700,
    "Hinjewadi": 8150, "Viman Nagar": 10500, "Hadapsar": 9500,
    "Ravet": 6370, "Wagholi": 6400, "Pimpri": 7400, "Chinchwad": 7400,
    "Pashan": 8000, "Lohegaon": 7000, "Punawale": 6750,
    "Balewadi": 10500, "Koregaon Park": 21000, "Kalyani Nagar": 17500,
    "Kothrud": 13500, "Shivaji Nagar": 17000, "Undri": 6500
  },

  Mumbai: {
    "South Mumbai": 45000, "Colaba": 50000, "Marine Drive": 50000,
    "Bandra West": 80000, "Bandra East": 50000, "Worli": 90000,
    "Lower Parel": 70000, "Cuffe Parade": 56000, "Malabar Hill": 55000,
    "Andheri West": 45000, "Andheri East": 36000, "Vile Parle West": 38000,
    "Goregaon West": 33000, "Malad West": 29000, "Borivali West": 24000,
    "Kandivali West": 26000, "Mulund West": 23000, "Kurla": 24000,
    "Chembur": 26000, "Navi Mumbai": 15000
  },

  "New Delhi": {
    "Defence Colony": 39000, "Vasant Kunj": 21500, "Vasant Vihar": 37000,
    "Greater Kailash": 35000, "South Extension": 45000,
    "Jor Bagh": 50000, "Chanakyapuri": 48000, "Saket": 22000,
    "Karol Bagh": 20000, "Rohini": 9500, "Dwarka": 9000,
    "Kirti Nagar": 18000, "Lutyens Delhi": 80000,
    "Connaught Place": 32000, "Janakpuri": 10000,
    "Nizamuddin": 24000, "Model Town": 20000,
    "Mayur Vihar": 8500, "Noida Sector 18": 12000
  },

  Bengaluru: {
    "Koramangala": 18000, "Indiranagar": 18500,
    "MG Road": 16000, "Jayanagar": 12000,
    "JP Nagar": 10500, "HSR Layout": 14000,
    "Whitefield": 9000, "Electronic City": 6500,
    "Banashankari": 8500, "BTM Layout": 11000,
    "Hebbal": 12500, "Yelahanka": 7000,
    "Malleshwaram": 14500, "Rajajinagar": 12000,
    "Kalyan Nagar": 13500, "Bellandur": 9500,
    "Marathahalli": 9500, "Basavanagudi": 11000,
    "Cunningham Road": 13000, "Sadashivanagar": 25000
  },

  Chennai: {
    "Anna Nagar": 17000, "Adyar": 17200,
    "Nungambakkam": 28000, "Mylapore": 18000,
    "T Nagar": 20000, "Velachery": 9000,
    "OMR Sholinganallur": 9000, "Porur": 7000,
    "Tambaram": 6000, "Kodambakkam": 12000,
    "Besant Nagar": 22000, "Alwarpet": 30000,
    "Royapettah": 14000, "Perungudi": 8000,
    "Egmore": 11000, "Saligramam": 10000,
    "Chromepet": 7500, "Kotturpuram": 16000,
    "Rajakilpakkam": 6500, "Pallavaram": 6000
  },

  Kolkata: {
    "Ballygunge": 16000, "Alipore": 12750,
    "Park Street": 13000, "Salt Lake": 7000,
    "New Town": 5500, "Ballygunge Circular": 18150,
    "Bhawanipore": 11000, "Gariahat": 10000,
    "Tollygunge": 8000, "Dum Dum": 5000,
    "Howrah": 4500, "Ultadanga": 6000,
    "Lake Town": 6500, "Behala": 4500,
    "Rajarhat": 6000, "Shyambazar": 9000,
    "Sealdah": 5500, "Bangur Avenue": 7500,
    "Esplanade": 6000
  },

  Hyderabad: {
    "Gachibowli": 12000, "Jubilee Hills": 18000,
    "Banjara Hills": 16500, "Hitech City": 11000,
    "Kondapur": 9000, "Kokapet": 10000,
    "Manikonda": 8000, "Madhapur": 11500,
    "Uppal": 6500, "LB Nagar": 6000,
    "Miyapur": 7000, "Secunderabad": 7500,
    "Kukatpally": 8500, "Attapur": 7000,
    "Shamshabad": 5500, "Nacharam": 6200,
    "Tarnaka": 8000, "Ameerpet": 9500,
    "Chanda Nagar": 7000, "Shaikpet": 7500
  },

  Ahmedabad: {
    "SG Highway": 9500, "Prahlad Nagar": 9000,
    "Satellite": 8000, "Bodakdev": 8500,
    "Vastrapur": 7500, "Bopal": 6000,
    "Maninagar": 6500, "Navrangpura": 7200,
    "Paldi": 7000, "Thaltej": 7900,
    "Ambawadi": 7300, "Nikol": 5000,
    "Gota": 5500, "Ranip": 5000,
    "Odhav": 4500, "Vasna": 4800,
    "Isanpur": 4200, "Daryapur": 4600,
    "Naroda": 5700, "Hansol": 5000
  },

  Jaipur: {
    "C-Scheme": 8000, "Malviya Nagar": 7000,
    "Vaishali Nagar": 6500, "Jagatpura": 6000,
    "Mansarovar": 5000, "Adarsh Nagar": 5500,
    "Bapu Nagar": 6000, "Shyam Nagar": 5800,
    "Gopalpura": 6200, "Raja Park": 7200,
    "Pratap Nagar": 5300, "Vidyadhar Nagar": 5800,
    "Vaishali Nagar Extension": 6000,
    "D-Block Vaishali": 5900,
    "Transport Nagar": 5200, "Jhotwara": 5000,
    "Goner Road": 4500, "Kukas": 4800,
    "Mansarovar Extension": 5300, "Amer Road": 6000
  },

  Gurugram: {
    "DLF Phase I": 26000, "DLF Phase II": 25000,
    "DLF Phase III": 24000, "Golf Course Road": 22000,
    "Sohna Road": 15000, "Cyber City": 24000,
    "Udyog Vihar": 18000, "MG Road": 20000,
    "Sector 14": 17000, "Sector 15": 17500,
    "Sector 29": 18000, "Palam Vihar": 16000,
    "New Gurgaon": 14000, "Sector 56": 15000,
    "Sector 57": 15500, "Sushant Lok": 18000,
    "Sector 45": 16000, "Sector 41": 17000,
    "Sector 53": 15000, "Sector 22": 14500
  }

};

let properties = [];

function generateData() {

  const bhkAreas = {
    "1 BHK": 600,
    "2 BHK": 950,
    "3 BHK": 1350,
    "4 BHK": 1800
  };

  Object.keys(cityRates).forEach(city => {
    Object.keys(cityRates[city]).forEach(locality => {

      let pricePerSqft = cityRates[city][locality];
      let monthlyRentPerSqft = (pricePerSqft * 0.025) / 12;

      ["1 BHK", "2 BHK", "3 BHK", "4 BHK"].forEach(type => {
        ["Unfurnished", "Semi Furnished", "Fully Furnished"].forEach(furnish => {

          let area = bhkAreas[type];
          let rentPerSqft = monthlyRentPerSqft;

          if (furnish === "Semi Furnished") rentPerSqft *= 1.07;
          if (furnish === "Fully Furnished") rentPerSqft *= 1.15;

          let rent = Math.round(area * rentPerSqft);
          let deposit = Math.round(rent * 2.5);

          properties.push({
            city, locality, type, furnishing: furnish,
            area, rent, deposit
          });

        });
      });

    });
  });
}

generateData();

const cityFilter = document.getElementById("cityFilter");
const localityFilter = document.getElementById("localityFilter");
const typeFilter = document.getElementById("typeFilter");
const furnishFilter = document.getElementById("furnishFilter");

let pieChart, barChart;

function loadCities() {
  cityFilter.innerHTML = "<option>All</option>";
  Object.keys(cityRates).forEach(city => {
    cityFilter.innerHTML += `<option>${city}</option>`;
  });
}

function loadLocalities() {
  localityFilter.innerHTML = "<option>All</option>";
  if (cityFilter.value === "All") return;
  Object.keys(cityRates[cityFilter.value]).forEach(loc => {
    localityFilter.innerHTML += `<option>${loc}</option>`;
  });
}

function filterData() {
  return properties.filter(p =>
    (cityFilter.value === "All" || p.city === cityFilter.value) &&
    (localityFilter.value === "All" || p.locality === localityFilter.value) &&
    (typeFilter.value === "All" || p.type === typeFilter.value) &&
    (furnishFilter.value === "All" || p.furnishing === furnishFilter.value)
  );
}

function updateDashboard() {
  let data = filterData();
  let total = 0;
  data.forEach(p => total += p.rent / p.area);
  document.getElementById("avgRent").innerText =
    data.length ? (total / data.length).toFixed(2) : 0;
  updateTable(data);
  updateCharts(data);
}

function updateTable(data) {
  let body = document.getElementById("tableBody");
  body.innerHTML = "";
  data.forEach(p => {
    body.innerHTML += `
      <tr>
        <td>${p.city}</td>
        <td>${p.locality}</td>
        <td>${p.type}</td>
        <td>${p.furnishing}</td>
        <td>${p.area}</td>
        <td>₹${p.rent}</td>
        <td>₹${p.deposit}</td>
      </tr>`;
  });
}

function updateCharts(data) {
  let furnishCount = { "Fully Furnished": 0, "Semi Furnished": 0, "Unfurnished": 0 };
  let typeCount = { "1 BHK": 0, "2 BHK": 0, "3 BHK": 0, "4 BHK": 0 };

  data.forEach(p => {
    furnishCount[p.furnishing] += p.rent;
    typeCount[p.type] += p.rent;
  });

  if (pieChart) pieChart.destroy();
  if (barChart) barChart.destroy();

  pieChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: { labels: Object.keys(furnishCount),
            datasets: [{ data: Object.values(furnishCount) }] }
  });

  barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: { labels: Object.keys(typeCount),
            datasets: [{ data: Object.values(typeCount) }] }
  });
}

cityFilter.addEventListener("change", () => {
  loadLocalities();
  updateDashboard();
});
localityFilter.addEventListener("change", updateDashboard);
typeFilter.addEventListener("change", updateDashboard);
furnishFilter.addEventListener("change", updateDashboard);

loadCities();
loadLocalities();
updateDashboard();