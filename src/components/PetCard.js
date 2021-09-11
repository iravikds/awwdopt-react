const PetCard = ({ pets, name }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card border-1 h-100">
                <a href="#"><img src={pets} alt="" className="card-img-top" width={200} height={250} /></a>
                <div className="card-body">
                    <h5> <a href="#" className="text-dark">
                        {name}</a></h5>
                    <h6 className="text-muted card-text"><i className="fa fa-map-marker" aria-hidden="true" /> Delhi</h6>
                    <h6 className="text-muted card-text"><i className="fa fa-calendar" aria-hidden="true" /> Age: 6 months</h6>
                    <a href="#" className="btn btn-warning btn-block">Adopt Now</a>
                </div>
            </div>
        </div>
    )
}

export default PetCard;
