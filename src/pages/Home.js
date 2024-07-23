import Card from "../components/card/Card";
import Subscribe from "../components/subscribe/Subscribe";
import html from "../assets/img/logo_html.png";
import css from "../assets/img/logo_css.png";
import brush from "../assets/img/logo_brush.png";

const Home = () => {
  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      <Subscribe />
      <section id="boxes">
        <div className="container">
          <Card src={html} title="HTML 5" url="/html" />
          <Card src={css} title="CSS 3" url="/css" />
          <Card src={brush} title="GRAPHIC DESIGN" url="/logo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
