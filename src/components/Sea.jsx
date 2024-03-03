import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Salad.css'

const Sea = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.post("https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb", data).then(
            (response) => {
                const fromsea = response.data.data[0].table_menu_list.find(category => category.menu_category === "Fresh From The Sea");
                if (fromsea) {
                    setData(fromsea.category_dishes);
                } else {
                    setData([]);
                }
            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                        {
                            data.map(
                                (value, index) => {
                                    return <div class="card de mb-3 ">
                                        <div class="row g-0">
                                            <div class="col-md-8">
                                                <h3 class="card-title">
                                                    <img
                                                        height="20px"
                                                        width="20px"
                                                        src="https://m.media-amazon.com/images/I/318fofZmBYL._AC_UF1000,1000_QL80_.jpg" class="img-fluid rounded-start" alt="..." />&nbsp;&nbsp;&nbsp;&nbsp;{value.dish_name}
                                                </h3>

                                                <h7>SAR {value.dish_price}</h7>
                                                <p className="card-text">{value.dish_description}</p>
                                                {value.addonCat.length > 0 && <a href="#">Customization Available</a>}
                                                <br></br>
                                                <br></br>
                                                {value.dish_Availability ? <div className='left'>
                                                    <div className="quantity">
                                                        <button className='minus'>-</button>
                                                        <input
                                                            type='text'
                                                            className='input-number'
                                                            value="1"
                                                            min="0"
                                                            max="50" />
                                                        <button className="plus">+</button>
                                                    </div>
                                                </div> : (
                                                    <span style={{ color: 'red' }}>Not Available</span>
                                                )
                                                }
                                            </div>
                                            <div class="col-md-2">
                                                <br></br>
                                                <br></br>
                                                <h7>     {value.dish_calories} Calories</h7>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card-body">
                                                    <img id='dish'
                                                        src={value.dish_image} class="img-fluid rounded-start" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sea