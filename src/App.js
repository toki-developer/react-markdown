import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';


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

  return (
    <div>
      <SimpleMDE onChange={(e) => setMarkdown(e)} events={{'drop':handleDrop}}/>
      <ReactMarkdown source={markdown}　/>
    </div>
  );
}

export default App;
