import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <a class="navbar-brand" href="#">Uni Resto Cafe</a>
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
                                <a class="nav-link active" aria-current="page" href="/">Salads and Soup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/barn">From The Barnyard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/hen">From The Hen House</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/sea">Fresh From The Sea</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/biriyani">Biriyani</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/fast">Fast Food</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav