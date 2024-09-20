import './App.css'
import Product from './components/Product'
import ListProduct from './components/ListProduct'

function App() {

  const produtos = [
    {
      title: "Caneta",
      category: "Escritório",
      price: 3.99,
      inStock: "Em Stock"
    },
    {
      title: "Lápis",
      category: "Escritório",
      price: 1.99,
      inStock: "Em Stock"
    },
    {
      title: "Rebuçado",
      category: "Doces",
      price: 0.49,
      inStock: "Em Stock"
    }
  ]


  // porção JavaScript
  return (
    <div className="App">

      <ListProduct>
        <Product product={produtos[0]} />
        <Product product={produtos[1]} />
        <Product product={produtos[2]} />
      </ListProduct>

    </div>
  )
}

export default App
