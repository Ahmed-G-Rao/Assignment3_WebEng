import details from "../assets/Details.pdf"
function Card(props) {
    //parameter hy jo hum componrnt my call kr ahy hoty values dy rahy hoty hy
    //to pass data from one component to another 
  return (
    <>
     <div className="col-3">
            <div><img src={props.img} className="images" /></div> 
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe animi culpa provident eaque sequi vero obcaecati aperiam ducimus! Eligendi minima facilis labore ducimus expedita, quod quo aspernatur dolores fugiat consequuntur.</p></div>
            <div className="text-center"><button type="button" className="btn btn-info buttonss " ><a href={details} className="text-dark" style={{textDecoration:"none"}} download="Details" target="blank">Download Info</a></button></div>
            <br />
          </div>
    </>
  );
}

export default Card

