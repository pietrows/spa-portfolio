import me from "../assets/img/me.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="hero__title">
              Oi eu Sou o Pietro <br />
              Desenvolvedor Front-end
            </h1>
          </div>
          <div className="col">
            <img className="hero__img" src={me} alt="me" loading="lazy" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
