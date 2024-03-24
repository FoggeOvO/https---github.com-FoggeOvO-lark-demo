import { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import routers from './routers';


const App: FC = () => {
  const element = useRoutes(routers)
  return (
    <>
        {element}
    </>
  );
}

export default App;
