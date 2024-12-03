import '../assets/CSS/layout.css';
import {flowers} from '../components/FlowerDB';
import {useState} from 'react';

export default function Product(flowers){
   
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require('../assets/image/image1.jpeg') }  />
                <div class="card-body">
                    <h5 class="card-title">Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}