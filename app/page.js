import './globals.css';
import Card from '../components/Card/Card';
import recipes from '../temp/recipes-temp';

export default function HomePage() {
  return (
    <div>
      {recipes.map((recipe, index) => {
        return <Card {...recipe} key={index} />;
      })}
    </div>
  );
}
