import PicCabin from '../../assets/mark-harpur.jpg'
import PicCake from '../../assets/bailey.jpg'
import PicCircus from '../../assets/ken-cheung.jpg'
import PicGame from '../../assets/pietro.jpg'
import PicSubmarine from '../../assets/luca.jpg'
import PicSafe from '../../assets/john-fowler.jpg'
import PicHen from '../../assets/hendrik.jpg'
import Picrowan from '../../assets/rowan.jpg'


export const ResponsiveGrid = () => {
    return (
    <section className="py-5 bg-light pt-1">
        <div className="container px-4 px-lg-5 mt-5">  
        <h2 className="fw-bolder mb-4">Photos demo</h2>             
                <div className="row justify-content-center">                    
                    <div className="col-md-6 col-lg-3 mb-5">
                        
                            <img className="img-fluid" src={PicCabin} alt="..." />
                       
                    </div>                    
                    <div className="col-md-6 col-lg-3 mb-5">
                       
                            
                            <img className="img-fluid" src={PicCake} alt="..." />
                        
                    </div>                  
                    <div className="col-md-6 col-lg-3 mb-5">
                        
                            
                            <img className="img-fluid" src={PicCircus} alt="..." />
                        
                    </div>
					<div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                       
                            <img className="img-fluid" src={PicGame} alt="..." />
                        
                    </div>
                    
                  
				    <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
                        
                            <img className="img-fluid" src={PicSubmarine} alt="..." />
                        
                    </div>
					  <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
                        
                            <img className="img-fluid" src={PicHen} alt="..." />
                        
                    </div>
					  <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
                        
                            <img className="img-fluid" src={PicSafe} alt="..." />
                        
                    </div>
                    
                    <div className="col-md-6 col-lg-3">
                        
                            <img className="img-fluid" src={Picrowan} alt="..." />
                       
                    </div>
		</div>
	</div>
        </section>
    )
}