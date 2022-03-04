import Pic300 from "../../assets/300.jpg";
import Fuji from "../../assets/camera-fuji.jpg";
import Polaroid from "../../assets/polaroid.jpg";
import Canon from "../../assets/canon.jpg";
import Puxette from "../../assets/puxette.jpg";

export const RelatedProducts = () => {
    return (
    <section className="py-5 bg-light pb-1">
        <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Related products</h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                    <div className="card h-100">
                        
                        <img className="card-img-top" src={Puxette} alt="..." />
                        
                        <div className="card-body p-4">
                            <div className="text-center">
                                
                                <h5 className="fw-bolder">Fancy NEW Product</h5>
                                
                                $40.00 - $80.00
                            </div>
                        </div>
                        
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="">View options</a></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute">Sale</div>
                            
                            <img className="card-img-top" src={Fuji} alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">Special Item 2</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
               
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute">Sale</div>
                            
                            <img className="card-img-top" src={Polaroid} alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">Special Item 3</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
               
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <img className="card-img-top" src={Canon} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item last</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>


            </div>                
        </div>



        </section>
    )
}