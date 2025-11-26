import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catalogue = ({catalogue}) => (
    <div className="card" key={catalogue.id}>
        <div className="card-header">
            {catalogue.category}
        </div>
        <div className="card-body">
            <h5 className="card-title">{catalogue.name}</h5>
            <p className="card-text">{catalogue.description}</p>
            <a href="#" className="btn btn-primary">ADD</a> &nbsp;
            <a href="#" className="btn btn-primary">{catalogue.servicedBy}</a>
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
            <h1>Service Catalogues</h1>
            <div>
                {serviceCatalogues()}
                {/* <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Staff</th>
                            <th>Service Price</th>
                            <th>Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceCatalogues()}
                    </tbody>
                </table> */}
            </div>
        </>
    );
}