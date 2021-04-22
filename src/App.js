import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PublicNavbar from "./components/PublicNavbar";
import BookDetailPage from "./pages/BookDetailPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ReadingPage from "./pages/ReadingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <PublicNavbar />
        <Switch>
          <Route exact path="/books/:id" component={BookDetailPage} />
          <Route exact path="/reading" component={ReadingPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
