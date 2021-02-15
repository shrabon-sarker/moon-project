import AppRouter from "./router";
import {Helmet} from 'react-helmet'


function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
