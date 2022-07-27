import { useState } from "react";
import './App.css';
import covit from './imagenes/covit.jpg'
import COVID from './imagenes/COVID.png'

function App() {
  const [datos, setDatos] = useState([])

  function registro(event) {
    event.preventDefault();

    const codigo = parseFloat(event.target.txt_codigo.value)
    const articulo = event.target.txt_articulo.value
    const descripcion = event.target.txt_descripcion.value
    const precio = parseFloat(event.target.txt_precio.value)
    const cantidad = parseFloat(event.target.txt_cantidad.value)
    const total = precio * cantidad


    if (isNaN(codigo)) {
      alert("El codigo debe ser ingresado en numeros")
      return false;
    }

    if (articulo.length < 3) {
      alert("Debe indicar el articulo a agregar")
      return false;
    }

    if (descripcion.length < 5) {
      alert("la descripicion debe tener a lo menos 5  caracteres!!")
      return false;
    }

    if (isNaN(precio)) {
      alert("El precio debe ser ingresado en numeros")
      return false;
    }

    if (precio <= 0) {
      alert("El precio debe ser mayor a 0")
      return false;
    }

    if (isNaN(cantidad)) {
      alert("Debe ingresar una cantidad y debe ser mayor a 1")
      return false;
    }

    if (cantidad <= 0) {
      alert("La cantidad  debe ser mayor a 1")
      return false;
    }


    const nuevo = {
      codigo,
      articulo,
      descripcion,
      precio,
      cantidad,
      total: total,
      totalDescuento: total * 0.90
    }


    setDatos([...datos, nuevo])
    event.target.txt_codigo.value = ''
    event.target.txt_articulo.value = ''
    event.target.txt_descripcion.value = ''
    event.target.txt_precio.value = ''
    event.target.txt_cantidad.value = ''

  }



  return (
    <div className="App">
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="">
            <h1> Covit ON</h1>
          </a>
        </div>
      </nav>
      <span className="placeholder col-12 placeholder-xs"></span>
      <div className="row g-3">
               <div className="col-md-12 col-lg-6">
                  <img src={covit} className="img-thumbnail" />
               </div>
               <div className="col-md-12 col-lg-6">
                  <img src= {COVID} className="img-thumbnail" />
               </div>
      </div>
      <div>
        <h1 className="App-titulo">Ingreso de Productos Covit</h1>
      </div>
      <div className="container">
        <form onSubmit={registro} >
          <div className="row g-3">
            <div className="col-xs-12 col-sm-6">
              <label htmlFor="txt_codigo">Codigo: </label>
              <input type="text" name="txt_codigo" id="txt_codigo" className="form-control" defaultValue="" />

              <label htmlFor="txt_articulo">articulo: </label>
              <input type="text" name="txt_articulo" id="txt_articulo" className="form-control" defaultValue="" />

              <label htmlFor="txt_descripcion">descripcion: </label>
              <input type="text" name="txt_descripcion" id="txt_descripcion" className="form-control" defaultValue="" />

              <label htmlFor="txt_precio">precio: </label>
              <input type="text" name="txt_precio" id="txt_precio" className="form-control" defaultValue="" />

              <label htmlFor="txt_cantidad">cantidad: </label>
              <input type="number" name="txt_cantidad" id="txt_cantidad" className="form-control" defaultValue="" /> <br/>

              <div className="col-xs-12">
                <input type="submit" className="btn btn-primary " value="Guardar Producto" />
                <input type="reset" className="btn btn-danger" value="Limpiar" />
              </div>



            </div>

          </div>
        </form>
      </div>

      <br/>


      <table className="table table-hover">
        <thead><tr><th>Codigo</th><th>Articulo</th><th>Descripción</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Total Descuento</th></tr></thead>
        <tbody>
          {datos.map(dato =>
            <tr key={dato.codigo}>
              <td> {dato.codigo} </td>
              <td> {dato.articulo} </td>
              <td> {dato.descripcion} </td>
              <td> {dato.precio} </td>
              <td> {dato.cantidad} </td>
              <td> {dato.total} </td>
              <td> {dato.totalDescuento} </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
