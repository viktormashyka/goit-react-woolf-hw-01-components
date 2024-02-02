import './Statistics.styled.css';
import { getRandomColor } from 'components/utils/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
