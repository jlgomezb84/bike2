document.addEventListener("DOMContentLoaded", () => {

  const productos = [
    {
      id:1,
      nombre:"Aero Road Performance",
      precio:"6.200.000 COP",
      imagen:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tag:"AERO"
    },
    {
      id:2,
      nombre:"Triathlon Carbon Pro",
      precio:"7.450.000 COP",
      imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tag:"TRIATLÓN"
    },
    {
      id:3,
      nombre:"Carbon Race Bike",
      precio:"5.900.000 COP",
      imagen:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tag:"CARRETERA"
    },
    {
      id:4,
      nombre:"Time Trial Aero Bike",
      precio:"8.100.000 COP",
      imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tag:"TIME TRIAL"
    }
  ];

  const grid = document.getElementById("gridProductos");

  if(grid){
    productos.forEach(p => {

      const card = document.createElement("a");
      card.href = `compra.html?id=${p.id}`;
      card.className = "producto-card";
      card.style.textDecoration = "none";
      card.style.color = "inherit";

      card.innerHTML = `
        <span class="badge">${p.tag}</span>
        <img src="${p.imagen}" alt="${p.nombre}">
        <div class="producto-info">
          <h3>${p.nombre}</h3>
          <div class="precio">${p.precio}</div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if(menuToggle && navMenu){
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("visible");
      }
    });
  },{threshold:0.15});

  reveals.forEach(el=>observer.observe(el));

  const form = document.getElementById("bookingForm");
  const msg  = document.getElementById("msgForm");

  if(form){
    form.addEventListener("submit", e=>{
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form));
      const registros =
        JSON.parse(localStorage.getItem("bikeBookings") || "[]");

      registros.push({...data,fecha:new Date().toISOString()});
      localStorage.setItem("bikeBookings",JSON.stringify(registros));

      msg.textContent="Solicitud enviada. Te contactaremos pronto.";
      form.reset();
    });
  }

});
