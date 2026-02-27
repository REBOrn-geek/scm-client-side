export default function LandingPage(){
    return (
        <>
            <div id="landing-page" className="container m-0 p-0 g-0 w-100 clearfix text-center">                    
                <div id="banner" className="text-bg-dark m-0 p-0 vh-100 vw-100"> 
                    <h1 className="text-warning">Patricia's Prettylash and Aesthetic Clinic</h1>
                </div>
                <div id="service-category" className="text-bg-dark vw-100 p-2">
                    <h4>Services</h4> 
                    <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                        <button type="button" class="btn btn-outline-warning">Eye Lashes</button>
                        <button type="button" class="btn btn-outline-warning">Face Services</button>
                        <button type="button" class="btn btn-outline-warning">Foot Spa</button>
                        <button type="button" class="btn btn-outline-warning">Gluta</button>
                        <button type="button" class="btn btn-outline-warning">Gluta Drip Package</button>
                        <button type="button" class="btn btn-outline-warning">Laser Services</button>
                        <button type="button" class="btn btn-outline-warning">Manicure & Pedicure</button>
                        <button type="button" class="btn btn-outline-warning">Wax Services</button>
                    </div>
                </div>
                <div className="hstack p-2 gap-2">
                    <div id="mission-statement" className="text-bg-light w-50 h-50 p-1">
                        <h4>Mission</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="vision-statement" className="text-bg-light ms-auto w-50 h-50 p-1">
                        <h4>Vision</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div id="company-tagline" className="text-bg-light vw-100">
                    <p className="display-4"> <em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua."</em>
                    </p>
                </div>
            </div>
        </>
    )
}