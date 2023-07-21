import CommentForm from "./components/CommentForm";
import CommetList from "./components/CommetList";

function App() {
  return (
    <div>
      <h1>Testing my frist app</h1>
      <input type="text" placeholder="type your name here" />
      <ul>
        <li>Shinchan</li>
        <li>Doreamon</li>
      </ul>
      <CommentForm />
      <CommetList allComments={[
        { id: 1, text: "Happy Diwali" },
        { id: 2, text: "Festival of lights" },
        { id: 3, text: "Happy Holi" },
        { id: 4, text: "Festival of colors" }
      ]} />
    </div>
  );
}

export default App;
