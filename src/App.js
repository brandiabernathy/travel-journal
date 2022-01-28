import Header from './components/Header.js';
import Entry from './components/Entry.js';
import data from './data.js';

const entries = data.map(item => {
    return <Entry key={item.id} item={item} />
})

function App() {
  return (
    <div className="App">
      <Header />
      <section className="entries">
        {entries}
      </section>
    </div>
  );
}

export default App;
