import "./App.css";
import ProjectPage from './components/ProjectPage/index';
import Header from './components/Header/index';
import ProjectCard from './components/ProjectCard/index';
import Information from './mocks';


function App() {
  return (
    <div className="App">
    <ProjectPage />
    <Header/>
    <div className="ProjectCard">
      {Information.map((card, index) => {
        return (
          <ProjectCard
            key={index}
            images={card.image}
            url={card.url}
            title={card.title}
            description={card.description}
          />
          );
        }
      )}
    </div>
    </div>
    

  );
}

export default App;
