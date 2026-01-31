const productos = [
    {
      id: 1,
      nombre: "Aero Road Performance",
      precio: "6.200.000 COP",
      imagen: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 2,
      nombre: "Triathlon Carbon Pro",
      precio: "7.450.000 COP",
      imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 3,
      nombre: "Carbon Race Bike",
      precio: "5.900.000 COP",
      imagen: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 4,
      nombre: "Time Trial Aero Bike",
      precio: "8.100.000 COP",
      imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];
  
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  
  const producto = productos.find(p => p.id === id);
  
  if(producto){
  
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("precio").textContent = producto.precio;
    document.getElementById("imagen").src = producto.imagen;
  
  }