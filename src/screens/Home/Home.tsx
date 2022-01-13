import "./Home.css";

import Article from '../../components/Article/Article';
import Banner from '../../components/Banner/Banner';
import BannerShort from '../../components/BannerShort/BannerShort';
import BannerSplit from '../../components/BannerSplit/BannerSplit';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Banner />
      <BannerShort />
      <BannerSplit />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
