import React from "react";
import Post from "./components/Assignment3";
// import Students from './components/Students';

let postList = [
  {"id":1, "postName":"post1", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth1", "date":"23-oct-2020", "myImage":"./logo192.png"},
  {"id":2, "postName":"post2", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth2", "date":"1-nov-2019", "myImage":"./logo192.png"},
  {"id":3, "postName":"post3", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth3", "date":"7-dec-2018", "myImage":"./logo192.png"},
  {"id":4, "postName":"post4", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth4", "date":"2-jan-2017", "myImage":"./logo192.png"},
  {"id":5, "postName":"post5", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth5", "date":"21-feb-2021", "myImage":"./logo192.png"},
  {"id":6, "postName":"post6", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth6", "date":"27-mar-2015", "myImage":"./logo192.png"},
  {"id":7, "postName":"post7", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth7", "date":"14-apr-2020", "myImage":"./logo192.png"},
  {"id":8, "postName":"post18", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth8", "date":"18-may-2016", "myImage":"./logo192.png"},
  {"id":9, "postName":"post9", "postDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "author":"auth9", "date":"19-jun-2018", "myImage":"./logo192.png"},
  {"id":10, "postName":"post10", "postDesc":"desc10", "author":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ", "date":"10-jul-2017", "myImage":"./logo192.png"}
]

function App() {
  return (
    <div className="App">
      {/* <Students /> */}
      <hr />
      <Post list={postList}/>
    </div>
  );
}

export default App;
