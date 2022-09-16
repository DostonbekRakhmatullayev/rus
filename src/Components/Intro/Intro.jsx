//SASS
import "./Intro.scss";

//Images
import intro__fon from "../../Assets/Images/intro_fon.png";

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__aside">
            <h1 className="intro__title">
              Качественные и недорогие носки вы можете найти только у нас
            </h1>
            <p className="intro__text">
              Предлагаем оптовые поставки из Узбекистана носков из высококачественных материалов по низкой цене до Россия.Мы можем изготовить носки любого состава, дизайна  и цвета  по желанию заказчика. Наш продукт изготовлен из 100 % хлопка. Узбекский хлопок  имеет отменное качество. Условия оплаты  аккредитив
            </p>
          </div>
          <div className="intro__bside">
            <img className="intro__pic" src={intro__fon} alt="intro_image" />
          </div>
        </div>
      </div>
      <div className="intro__button-bg"></div>
    </section>
  );
}

export default Intro;
