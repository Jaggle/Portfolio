import Projects from "./Projects";
import "./scss/index.scss";
import Info from "./Info";
import Background from "./background";

function Home() {
  return (
    <div>
      <header className="App-header" id="home">
        <Background></Background>
      </header>
      <Projects></Projects>
      <Info></Info>
    </div>
  );
}

export default Home;
