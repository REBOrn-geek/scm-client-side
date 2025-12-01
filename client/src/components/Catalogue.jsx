import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catalogue = ({catalogue}) => (
    <div className="col-3">
        <div className="card m-1" key={catalogue.id}>
            <div className="card-header text-center">
                <h3><i class="fa-regular fa-hand"></i></h3>
                <h4 className="strong">{catalogue.category}</h4>
                <h6 className="text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></h6>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{catalogue.name}</h5>
                <p className="card-text">{catalogue.description}</p>
                <a href="#" className="btn btn-primary"><i class="fa-solid fa-plus"></i></a> &nbsp;
                <a href="#" className="btn btn-primary"><i class="fa-solid fa-address-card"></i></a>
            </div>
        </div>
    </div>
);

export default function ServiceCatalogue() {
    const [catalogues, setCatalogues] = useState([]);

    useEffect(() => {
        async function getCatalogues() {
            const response = await fetch(`http://localhost:3000/v1/services`);
            if(!response.ok) {
                const message =`An error occured: ${response.statusText}`;
                console.error(message);
                return;
            }
            const list = await response.json();
            setCatalogues(list.service);
        }
        getCatalogues();
        return;
    }, [catalogues.lenght]);

    function serviceCatalogues() {
        return catalogues.map((catalogue) => {
            return (
                <Catalogue catalogue={catalogue} key={catalogue.id}/>
            );
        });
    }

    return  (
        <>
            <h1 className="text-center">Service Catalogues</h1>
            <div className="container-sm text-bg-info p-1">
                <div className="row align-items-start">
                    {serviceCatalogues()}
                </div>
            </div>
        </>
    );
}