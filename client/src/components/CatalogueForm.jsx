import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ServiceCreation() {
    const [form, setForm] = useState({
        name: "",
        category: "",
        servicedBy: "",
        price: "",
        availability: "Unavailable",
        description: "",
    });
    const params = useParams();
    const navigate = useNavigate();
    const [formPage, setFormPage] = useState('Create');
    const [status, setStatus] = useState('Unavailable');
    const [statusBut, setStatusBut] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() ||  undefined;
            if(!id) return;
            setFormPage('Update');
            const response = await fetch(
                `http://localhost:3000/v1/services/${params.id.toString()}`
            );
            if (!response.ok) {
                const message = `An error has occured: ${response.statusText}`
                console.log(message);
                return;
            }
            const catalogue = await response.json();
            if (!catalogue) {
                console.warm(`Record with id ${id} not found!`);
                navigate("/");
                return;
            }
            if (catalogue.service.availability === 'Available'){     
                setStatusBut(true);
            }else {           
            setStatusBut(false);
            }  
            setForm(catalogue.service);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    function changeStatus() {
        let s;
        if (status === 'Available'){            
            s = 'Unavailable';
            setStatusBut(false);
        }else {            
           s = 'Available';
           setStatusBut(true);
        }       
        updateForm({ availability: s});
        return setStatus(s);
    };

    function updateForm (value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    };

    async function onSubmit(e){  
        e.preventDefault();
        const catalogue = { ...form };
        try {
            let response;
            response = await fetch(`http://localhost:3000/v1/services`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(catalogue),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            };
            // console.log(catalogue);
        } catch (error) {
            console.error('A problem occured with your creation of new service catalogue: ', error);
        }finally{
            setForm({name: "", category: "", servicedBy: "", price: "", availability: status, description: "",});
            navigate("/");
        }
    };

    return  (
        <>
            <h1 className="text-center mb-3">Service {formPage}</h1>
            <form onSubmit={onSubmit}>
                <div className="container-sm text-bg-light p-2 hstack">
                    {/* Service Availability */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="availability" name="availability" value={form.availability} onClick={changeStatus} checked={statusBut}/>
                    </div>                     
                    <label className="form-check-label pe-2 ms-auto" htmlFor="availability">
                        {form.availability}
                    </label>               
                </div>
                <div className="container-sm text-bg-dark p-2 hstack gap-2 border-warning border-5 rounded-3">
                    {/* Service Name */}
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroup-sizing-default">Service Name</span>
                        <input id="name" name="name" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={form.name} onChange={(e) => updateForm({ name: e.target.value})}/>
                    </div>
                    {/* Service Price */}
                    <div className="input-group">
                        <span className="input-group-text">₱</span>
                        <input id="price" name="price" type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" value={form.price}  onChange={(e) => updateForm({ price: e.target.value})}/>
                    </div>
                    {/* Service Category */}
                    <select id="category" name="category" className="form-select" aria-label="Default select example" value={form.category}  onChange={(e) => updateForm({ category: e.target.value})}>
                        {/* <option selected>Category</option> */}
                        <option value="nail">nail</option>
                        <option value="hair">hair</option>
                        <option value="face">face</option>
                        <option value="lips">lips</option>
                        <option value="skin">skin</option>
                    </select>

                    {/* Staff Available */}
                    <select id="servicedBy" name="servicedBy" className="form-select" aria-label="Default select example" value={form.servicedBy} onChange={(e) => updateForm({ servicedBy: e.target.value})}>
                        {/* <option selected>Staff</option> */}
                        <option value="employee0">employee0</option>
                        <option value="employee1">employee1</option>
                        <option value="employee2">employee2</option>
                        <option value="employee3">employee3</option>
                    </select>
                </div>
                <div id="description" name="description" className="container-sm text-bg-light p-1 rounded-3 mt-1">                
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Service Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={form.description} onChange={(e) => updateForm({ description: e.target.value})}></textarea>
                    </div>
                </div>
                <div className="container-sm hstack p-1 gap-1 rounded-3">               
                    <Link className="btn btn-outline-warning ms-auto rounded-pill" to={`/`}>Cancel</Link>
                    <input type="submit" className="btn btn-outline-success rounded-pill" value={formPage}/>
                    {/* <button type="button" className="btn btn-outline-success rounded-pill" onClick={onCreate}>Create</button> */}
                </div>
            </form>
            <div>
                {console.log(form)}
            </div>
        </>
    );
}