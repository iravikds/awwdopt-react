import React from 'react';
import { useEffect, useState } from 'react';
import PetCard from './PetCard';
const dogNames = require('dog-names');

const Home = () => {

    const [pets, setPets] = useState([]);


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/8')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPets(data.message);

            });
    }, [])

    return (
        <div>
            <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <i className="fa fa-map-marker fa-2x h4 text-body" />
                            </div>

                            <div className="col">
                                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Enter Location to search..." name="search" style={{ border: "0px" }} />
                            </div>

                            <div className="col-auto">
                                <button className="btn btn-lg btn-outline-dark" type="submit"><i className="fa fa-search" aria-hidden="true" /> Search</button>
                            </div>

                        </div>
                    </form>
                </div>

            </div>

            <section className id="portfolio">
                <div className="container">
                    <div className="row">

                        {pets && pets.map(function (img) {

                            return <PetCard pets={img} name={dogNames.maleRandom()} />;
                        })}
                        {/* {pets.map((item) => (
                            console.log(item)
                        ))} */}

                        {/* {pets && <PetCard pets={pets} />} */}

                        {/* <h4 className="justify-content-center"><i className="fa fa-frown-o" aria-hidden="true" />
                            No results found!</h4> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
