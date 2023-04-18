import React, { useState } from 'react';
import Input from '../../Input/Input';
import './ProductInput.css';

const ProductInput = (props) => {
    const [id, setId] = useState(1)
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('');

    const changeId = (e) => {
        setId(e.target.value)
    }

    const changePrice = (e) => {
        setPrice(e.target.value)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    const submitted = (e) => {
        e.preventDefault()
        // Validate input
        if (!name || !price || !category) {
            setError('All fields are required');
            return;
        } else {
            setError('');
        }

        const productData = {
            id: id,
            price: price,
            name: name,
            category: category
        }
        localStorage.setItem(id, JSON.stringify(productData))
        props.data(productData)
        setId(id + 1);
        setPrice('');
        setName('');
        setCategory('');
    }

    return (
        <div className="product-input-container"> 
            <form onSubmit={submitted}>
            <div className='inputFields'>
                <Input label={'Product Id'} id={'id'} type={"number"} value={id} onChange={changeId} />
                <Input label={'Selling Price'} id={'price'} type={"number"} value={price} onChange={changePrice} />
                <Input label={'Product Name'} id={'name'} type={"text"} value={name} onChange={changeName} />
                <label className='label'>Category</label>
                <select value={category} onChange={changeCategory}>
                    <option value=''>Select..</option>
                    <option value='Books'>Books</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Electronics'>Electronics</option>
                </select>
                </div>
                <button>Add Product</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}

export default ProductInput;
