import { useState } from "react";


const HomePage = () => {

    const [jsonData, setJsonData] = useState<JSON>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if(e.target.files) {


    }

  }

  const csvToJson = () => {
    
  }

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleInputChange}/>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  )
}

export default HomePage
