import "./project.css";

function Project({ title, idx }) {
  let oldPrices = [100, 200, 300];
  let newPrices = [80, 150, 250];
  let description = [
    "Latest smartphone with advanced features.",
    "Powerful laptop for professionals.",
    "High-performance gaming console.",
  ];

  return (
    <div className="project-container">
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description[idx]}</p>

      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      <p className="project-discount">
        Discount: {oldPrices[idx] - newPrices[idx]}%
      </p>
    </div>
  );
}
export default Project;

function Price({ oldPrice, newPrice }) {
  return (
    <div className="card">
      <p className="old-price">Old Price: ${oldPrice}</p>
      <p className="new-price">New Price: ${newPrice}</p>
    </div>
  );
}
