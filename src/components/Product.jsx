function Product(props) {

    const { product } = props
    const { title, category, price, inStock } = product

    return (
        <div className='product'>
            <div className='main-info'>
                <h1 className='title'>{title}</h1>
                <h3 className='category'>{category}</h3>
            </div>
            <div className='secondary-info'>
                <div className='price'>{price}€</div>
                <div className='stock'>{inStock}</div>
            </div>
        </div>
    )

}

export default Product