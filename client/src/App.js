import './App.scss';
import NewContainer from './new/NewContainer';
import ArchivedContainer from './archived/ArchivedContainer';

function App() {
  return (
    <div className="App">
      <NewContainer />
      <ArchivedContainer/>
    </div>
  );
}
export default App;