import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Biriyani = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.post("https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb", data).then(
            (response) => {
                const biriyani = response.data.data[0].table_menu_list.find(category => category.menu_category === "Biryani");
                if (biriyani) {
                    setData(biriyani.category_dishes);
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
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {
                            data.map(
                                (value, index) => {
                                    return <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-8">
                                                <h3 class="card-title">
                                                    <img
                                                        height="20px"
                                                        width="20px"
                                                        src="https://m.media-amazon.com/images/I/318fofZmBYL._AC_UF1000,1000_QL80_.jpg" class="img-fluid rounded-start" alt="..." />
                                                    {value.dish_name}</h3>
                                                <h7>SAR {value.dish_price}</h7>
                                                <p class="card-text">{value.dish_description}</p>
                                                <h7>Customization Available</h7>
                                            </div>
                                            <div class="col-md-2">
                                                <br></br>
                                                <br></br>
                                                <h7>     {value.dish_calories} Calories</h7>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card-body">
                                                    <img
                                                        height="150px"
                                                        width="150px"
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

export default Biriyani