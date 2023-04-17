const DisplayLoader=()=>{
    return(
        <div>
            <div className="display-card">
              <div className="image-display skeleton">
              </div>
            <div className="info-display">
             <span className="food-title skeleton title-loader"></span>
             <span className="food-cost skeleton cost-loader"></span>
            <button className="skel-btn"></button>
        </div>

    </div>
        </div>
    )
}
export default DisplayLoader