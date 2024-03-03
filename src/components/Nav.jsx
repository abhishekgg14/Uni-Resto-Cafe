import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <Link class="navbar-brand" to="#">Uni Resto Cafe</Link>
                <div class="cart-icon-container" id='icon'>
                    <h8>My Orders</h8>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Salads and Soup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/barn">From The Barnyard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/hen">From The Hen House</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/sea">Fresh From The Sea</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/biriyani">Biriyani</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/fast">Fast Food</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav