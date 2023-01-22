import { Card } from '../styles/Card'

export default function CardRecipe({ recipe }) {
  const { image, title, Diets, id,healthScore } = recipe
  return (
    <Card to={`/recipe/${id}`}>
      <div className='card'>
        <img src={image} alt='Avatar' />
        <div className='container'>
          <h4>{title}</h4>
          <h5>Diets</h5>
          <div className='flex'>
            {Diets?.map((type) => (
              <span key={type.name}>{type.name}</span>
            ))}
          </div>
            <h4>Healt Score: {healthScore}</h4>
        </div>
      </div>
    </Card>
  )
}
