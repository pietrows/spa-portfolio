import "./assets/scss/index.scss"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Layout from "./components/layout";


function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}

export default App;
