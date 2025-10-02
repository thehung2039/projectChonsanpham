import './CategoryTicker.css';

export default function CategoryTicker({ categories }) {
  return (
    <div className="category-ticker">
      <div className="ticker-content">
        {categories.map((cat, idx) => (
          <span key={idx} className="ticker-item">{cat}</span>
        ))}
      </div>
    </div>
  );
}
