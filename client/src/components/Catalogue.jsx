import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Catalogue = (props) => (
    <div className="col-3">
        <div className="card m-1" key={props.catalogue.id}>
            <h6>{props.catalogue.id}</h6>
            <div className="text-end">
                <Link   className="btn text-primary m-1 pe-1 border-end rounded-0" to={`/edit/${props.catalogue.id}`}><i className="fa-solid fa-pencil"></i></Link>
                {/* <a href="#" className="btn text-primary m-1 pe-1 border-end rounded-0"></a> */}
                <button className="btn text-danger me-1 p-0" type="button" onClick={() => {props.deleteService(props.catalogue.id);}}><i className="fa-solid fa-trash-can"></i></button>
            </div>
            <div className="card-header text-center">
                <div className="text-end m-1">
                    <input className="form-check-input ms-auto" type="checkbox" />
                </div>
                {serviceStatus(props.catalogue.availability, props.catalogue.name)}
                <div className="hstack gap-3 m-0">
                    <div className="m-0 p-0 hstack gap-1">
                        <h6>{categoryIcon(props.catalogue.category)}</h6>
                        <h6 className="strong">{initialUpperCaseEachWord(props.catalogue.category)}</h6>
                    </div>
                    <div className="ms-auto">
                        <h3 className="text-warning">₱&nbsp;{props.catalogue.price}</h3>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-truncate">{props.catalogue.description}</p>
                <div className="hstack gap-3 m-0">    
                    <h6 className="text-warning"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></h6>            
                    <a href="#" className="btn btn-outline-success ms-auto" hidden><i className="fa-solid fa-cart-plus"></i></a>
                    <a href="#" className="btn btn-outline-warning ms-auto"><i className="fa-solid fa-user-nurse"></i>&nbsp;{initialUpperCaseEachWord(props.catalogue.servicedBy)}</a>
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
    if (category === "manicure & pedicure") {
        return <i className="fa-solid fa-hand-point-up"></i>;
    } else if (category === "laser service") {
        return <i className="fa-solid fa-barcode"></i>;
    }  else if (category === "gluta" || category === "gluta push package" || category === "gluta drip package") {
        return <i className="fa-solid fa-syringe"></i>;
    }  else if (category === "foot spa") {
        return <i className="fa-solid fa-spa"></i>;
    }  else if (category === "facial service") {
        return <i className="fa-solid fa-face-grin-hearts"></i>;
    }  else if (category === "eye lashes") {
        return <i className="fa-solid fa-eye"></i>;
    }  else if (category === "wax service") {
        return <i className="fa-solid fa-child-reaching"></i>;
    }  else {
        return <i className="fa-solid fa-store"></i>;
    };
}

function initialUpperCaseEachWord(word){
    const wordArray = word.split(" ");
    let result = "";
    for(let i=0; i<wordArray.length ; i++){
        result += wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1) + " ";
    };
    return result;
}
export default function ServiceCatalogue() {

    const [catalogues, setCatalogues] = useState([]);
    const navigate = useNavigate();
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
    }, [catalogues.length]);
    
    const deleteService = async (id) => {
        await fetch(`http://localhost:3000/v1/services/${id}`, { method: "DELETE"});
        setCatalogues(catalogues.filter((rm) => rm.id !== id));
    }

    function serviceCatalogues() {
        return catalogues.map((catalogue) => {
            return (
                <Catalogue catalogue={catalogue} deleteService={() => deleteService(catalogue.id)} key={catalogue.id}/>
                // <Catalogue catalogue={catalogue} deleteService={deleteService} key={catalogue._id}/>
            );
        });
    }

    function categoriesList(){
        let categories = [...new Set(catalogues.map(n => n.category))];
        // console.log(categories);
        return categories.map((c) => {
            return (
                <option value={c.toLowerCase()} key={c}>{initialUpperCaseEachWord(c)}</option>
            );
        });
    }

    function staffList(){
        let staffs = [...new Set(catalogues.map(n => n.servicedBy))];
        // console.log(staffs);
        return staffs.map((staff) => {
            return (
                <option value={staff.toLowerCase()} key={staff}>{initialUpperCaseEachWord(staff)}</option>
            );
        });
    }

    return  (
        <>
            <h1 className="text-center">Service Catalogues</h1>
            <div className="container-sm text-bg-dark p-1 hstack gap-3 rounded-pill shadow-lg mb-2 sticky-top">
                <a href="/create" className="btn btn-outline-warning ms-auto rounded-pill">Create New Service</a>
            </div>
            <div className="container-sm p-2 shadow rounded-3">
                <div className="row align-item-start">
                    <h3 className="ps-3"><i className="fa-solid fa-filter"></i>&nbsp;Filter</h3>
                    <div className="p-3 pt-0 gap-2 hstack">
                        {/* {categoriesList()}                   */}          
                        <label htmlFor="category">Category</label>              
                        <select id="category" name="category" className="form-select" aria-label="Categories">
                            {categoriesList()}
                        </select>
                        {/* {staffList()} */}          
                        <label htmlFor="servicedBy">Staff</label>                            
                        <select id="servicedBy" name="servicedBy" className="form-select" aria-label="Staff">
                            {staffList()}
                        </select>
                    </div>                    
                </div>
                <div className="row align-items-start">
                    {serviceCatalogues()}
                </div>
            </div>
        </>
    );
}