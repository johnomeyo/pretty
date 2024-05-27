import "./Card.css";
export const ImageCard = () => {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="card-overlay">
        <div className="card-text">
          <h2> {"astropphel"}</h2>
          <p>{"Imma have this soon"}</p>
        </div>
      </div>
    </div>
  );
};
