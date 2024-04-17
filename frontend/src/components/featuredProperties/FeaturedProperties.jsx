import "./featuredProperties.css";
import useFetch from "../../useFetch";

const FeaturedProperties = () => {

  const {data,loading,error} = useFetch("/hotels?featured=true");

  return (
    <div className="fp">
      {loading? "Loading":<>
      {data.map(item=>(
         <div className="fpItem" key={item._id}>
        <img
          src={item.images[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapest}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
      ))}
      </>}
    </div>
  );
};

export default FeaturedProperties;
