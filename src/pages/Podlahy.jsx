import React from 'react'

const Podlahy = () => {
    return (
        <div>
            <h2>Plávajúce podlahy</h2>
            <h4>Predávame plávajúce podlahy od týchto výrobcov</h4>
            <div className="row my-3">
                <div className="col offset-md-1 col-md-4">
                    <div className="card">
                        <div className="card-header"><h4>Krono</h4></div>
                        <div className="card-body"></div>
                        <div className="card-footer">
                            <span className="mr-3">Katalóg</span>
                            <span class="badge bg-info mr-3">Pozrieť</span>
                            <span class="badge bg-success">Stiahnuť</span>

                        </div>
                    </div>
                </div>
                <div className="col offset-md-1 col-md-4">
                    <div className="card">
                        <div className="card-header"><h4>Krono</h4></div>
                        <div className="card-body"></div>
                        <div className="card-footer">Katalog</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Podlahy