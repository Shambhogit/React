import React from 'react'
import FetchData from '../hooks/useEffect/FetchData'
import ChangeBg from '../hooks/useLayoutEffect/ChangeBg'
import IndianGov from '../hooks/useContext/propsdrilling/IndianGov'
import Reducer from '../hooks/useReducer/Reducer'
import Counter from '../hooks/useState/Counter'
import Cart from '../hooks/useMemo/Cart'
import Index from '../hooks/useCallback/Index'

const App = () => {
  return (
    <div>
      {/* useState hook */}
      {/* <Counter/> */}

      {/* useEffect hook */}
      {/* <FetchData/> */}

      {/* useLayoutEffect hook */}
      {/* <ChangeBg/> */}

      {/* PropsDrilling */}
      {/* <IndianGov/> */}

      {/* useReducer */}
      {/* <Reducer/> */}

      {/* useMemo */}
      {/* <Cart/> */}

      {/* useCallback */}
      <Index/>

    </div>
  )
}

export default App