import "./App.css";
import UserImage1 from "./assets/images/user1.png";
import UserImage2 from "./assets/images/user2.png";
import UserImage3 from "./assets/images/user3.png";
import PostListItem from "./components/PostListItem";
import SearchNote from "./components/SearchNote";
import useWindowSize from "./components/useWindowSize";
import { useEffect, useState } from 'react'
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";


function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "苹果", price: 1 },
    { id: 2, name: "香蕉", price: 5 },
    { id: 3, name: "菠萝", price: 10 },
  ])
  const microBlogs = [
    {
      id: 1,
      author: {
        name: "张小丰",
        avatar: UserImage1,
      },
      content:
        "这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
      publishDate: "2022-10-25",
    },
    {
      id: 2,
      author: {
        name: "王小玲",
        avatar: UserImage2,
      },
      content:
        "这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
      publishDate: "2022-10-25",
    },
    {
      id: 3,
      author: {
        name: "李小明",
        avatar: UserImage3,
      },
      content:
        "这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
      publishDate: "2022-10-25",
    },
  ];
  function addProduct() {
    const newProduct = {
      id: Math.random(),
      name: `产品 ${products.length + 1}`,
      price: Math.floor(Math.random() * 10) + 1,
    };

    setProducts([...products, newProduct]);
  }
  const [isDark, setIsDark] = useState(true);
  const windowSize = useWindowSize();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [error, setError] = useState(null)

  useEffect(()=>{
    let controller = new AbortController();
    async function getNotes(params) {
      setLoading(true)
  
      setTimeout(()=>{
        controller.abort()
      }, 500)
      let url = "/api/notes"
      if(params){
        url += `?${new URLSearchParams({ term: params})}`
      }
      const res = await fetch(url, {signal: controller.signal});
      if(res.status >  400){
        setError(await res.json())
      }else{
        const data = await res.json()
        console.log(data);
        // setLoading(false)
        setNotes(data);
      }
    }
    getNotes(null, controller);
    return ()=>{
      controller.abort();
    }
  },[])
  function handleSearch(event) {
    console.log("aaa")
    setSearchItem(event.target.value);
    // getNotes(event.target.value);
  }
  // http header带上jwt token
  async function handleAdd(note){
    let url = "/api/notes"
    let res = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer somejwttoken"
      },
      body: JSON.stringify(note)
    })
    const data = await res.json()
    setNotes([...notes, data])
  }
  return (
    <main className={isDark ? "container" : "container light"}>
      <div>
        <h1>产品列表</h1>
        <ProductListing products={products} />
        <button onClick={addProduct}>添加产品</button>
        <label htmlFor="toggleTheme">
          改变主题{" "}
          <input
            id="toggleTheme"
            type="checkbox"
            checked={isDark}
            value={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
        </label>
      </div>
    </main>
  );
}

export default App;
