import React from 'react'

function ListProduct(props) {

    return (
        <div className='list-product'>

            <h1>✨ Lista de Produtos ✨</h1>

            {props.children}

        </div>
    )
}

export default ListProduct