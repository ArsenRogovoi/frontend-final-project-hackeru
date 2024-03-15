import { useParams } from "react-router-dom";

const ExpertProfilePage = () => {
  let { expertId } = useParams();
  // Здесь вы можете использовать expertId, чтобы загрузить данные профиля эксперта
  return <div>Профиль эксперта {expertId}</div>;
};

export default ExpertProfilePage;
