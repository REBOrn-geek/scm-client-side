import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catalogue = (props) => (
    <div className="col-3">
        <div className="card m-1" key={props.catalogue.id}>
            <div className="text-end">
                <a href="#" className="btn text-primary m-1 pe-1 border-end rounded-0"><i className="fa-solid fa-pencil"></i></a>
                <button className="btn text-danger me-1 p-0" type="button" onClick={() => {props.deleteService(props.catalogue.id);}}><i className="fa-solid fa-trash-can"></i></button>
            </div>
            <div className="card-header text-center">
                <div className="text-end m-1">
                    <input className="form-check-input ms-auto" type="checkbox" />
                </div>
                {serviceStatus(props.catalogue.availability, props.catalogue.name)}
                <div className="hstack gap-3 m-0">
                    <h5>{categoryIcon(props.catalogue.category)}</h5>
                    <h4 className="strong" hidden>{props.catalogue.category}</h4>
                    <h3 className="text-primary ms-auto">₱{props.catalogue.price}</h3>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-truncate">{props.catalogue.description}</p>
                <div className="hstack gap-3 m-0">    
                    <h6 className="text-warning"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></h6>            
                    <a href="#" className="btn btn-outline-success ms-auto" hidden><i className="fa-solid fa-cart-plus"></i></a>
                    <a href="#" className="btn btn-outline-info ms-auto"><i className="fa-solid fa-address-card"></i></a>
                </div>
            </div>
        </div>
    </div>
);

function serviceStatus(status, name) {
    if (status !== "Available") {
        return <h2 className="card-title text-center text-danger lead text-decoration-line-through">{name}</h2>;
    } else {
        return <h2 className="card-title text-center lead">{name}</h2>;
    }
}

function categoryIcon(category) {
    if (category == "nail") {
        return <i className="fa-regular fa-hand"></i>;
    } else {
        return <i className="fa-regular fa-face-grin-beam"></i>;
    }
}

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
    
    async function deleteService(id){
        await fetch(`http://localhost:3000/v1/services/${id}`, { method: "DELETE"});
        const newCatalogues = catalogues.filter((rm) => rm._id !== id);
        setCatalogues(newCatalogues);
    }

    function serviceCatalogues() {
        return catalogues.map((catalogue) => {
            return (
                <Catalogue catalogue={catalogue} deleteService={() => deleteService(catalogue.id)} key={catalogue.id}/>
            );
        });
    }

    return  (
        <>
            <h1 className="text-center">Service Catalogues</h1>
            <div className="container-sm text-bg-dark p-1 hstack gap-3">
                <a href="/create" className="text-warning ms-auto">Create New Service</a>
            </div>
            <div className="container-sm text-bg-light p-1">
                <div className="row align-items-start">
                    {serviceCatalogues()}
                </div>
            </div>
        </>
    );
}