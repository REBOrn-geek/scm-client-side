import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catalogue = ({catalogue}) => (
    <tr key={catalogue.id}>
        <td>{catalogue.name}</td>
        <td>{catalogue.category}</td>
        <td>{catalogue.servicedBy}</td>
        <td>{catalogue.price}</td>
        <td>{catalogue.availability}</td>
        <td>{catalogue.description}</td>
    </tr>
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
                <table>
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
                </table>
            </div>
        </>
    );
}