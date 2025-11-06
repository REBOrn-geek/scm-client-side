import { useEffect } from "react";
import { Link } from "react-router-dom";

const Catalogue = (props) => (
    <tr>
        <td>props.catalaogue.name</td>
    </tr>
);

export default function Catalogue(){
    const [catalogues, setCatalogues] = useState([]);
    
    useEffect(() => {
        async function getCatalogues() {
            const response = await fetch(`http://localhost:3000/`);
            if(!response.ok) {
                const message =`An error occured: ${response.statusText}`;
                console.error(message);
                return;
            }
            const catalogues = await response.json();
            setCatalogues(catalogues);
        }
        getCatalogues();
        return;
    }, [catalogues,lenght]);

    function serviceCatalogues() {
        return catalogues.map((catalogue) => {
            return (
                <Catalogue catalogue={catalogue} key={catalogue._id}/>
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