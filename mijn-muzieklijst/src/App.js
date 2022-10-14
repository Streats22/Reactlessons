import './components/Mymusiclist/Musiclist';
import './App.css';
import MusicList from "./components/Mymusiclist/Musiclist";

function App() {
  return (
      <main>
          <MusicList title="Hip-hop" />
          <MusicList title="Blues" />
          <MusicList title="Dance" />
          <MusicList title="Rap" />
          <MusicList title="Country" />
          <MusicList title="Techno" />

      </main>
  );
}

export default App;
