import { useState } from 'react';
import './index.css'; 

function App() {
  return (
    <div className="post">
      <div className="body">
        <img className='perfil'
          src="https://media.licdn.com/dms/image/v2/D4D03AQH_z--8pl-nnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722022791055?e=1734566400&v=beta&t=8MxIeqQftTASwCElqIAG27ZqwLAEeJGQG-20JlLwCMU" 
        />
        <h2>Richele Br.</h2>
      </div>
      <p className='mensagem'> Olá pessoal, vamos codar?</p>
      <img className='imgpost' src="https://www.dailyhostnews.com/wp-content/uploads/2023/08/React.js-Cross-Platform-Development.png"
      />
    </div>
  );
}

export default App;
