import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import {HashLink} from 'react-router-hash-link';


const App = () => {

  const [markdown, setMarkdown] = useState('');

  function handleDrop(data, e) {
    let files = e.dataTransfer.files;
        if(files.length > 0){
            let file = files[0];
            alert('FileName : ' + file.name );
        }
        console.log("写真を置いた")
  }

  console.log(markdown)

  return (
    <div>
      <SimpleMDE onChange={(e) => setMarkdown(e)} events={{'drop':handleDrop}}/>
      目次
      <ReactMarkdown source={markdown} allowedTypes={ ["heading","text"]} />
      <hr></hr>
      <ReactMarkdown source={markdown}　/>
    </div>
  );
}

export default App;
