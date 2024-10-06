// import { useState } from 'react'
import './App.css'
// import { Test } from './components/Test';
// import { SampleForm } from './components/SampleForm';
// import { withErrorBoundary } from 'react-error-boundary';
import { Formik1 } from './components/Formik1';

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// const ComponentWithErrorBoundary = withErrorBoundary(SampleForm, {
//   fallback: <div>Something went wrong</div>,
//   onError(error, info) {
//     console.log(error);
//     console.log(info);
//   },
// })

function App() {
  // const [count, setCount] = useState(0)

  // const listItems = products.map(product =>
  //   <li
  //     key={product.id}
  //     style={{
  //       color: product.isFruit ? 'magenta' : 'darkgreen'
  //     }}
  //   >
  //     {product.title}
  //   </li>
  // );

  return (
    <>
      {/* <ComponentWithErrorBoundary /> */}
      <Formik1 />
      {/* <Test data='test data' flag={false} /> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ul>{listItems}</ul> */}
    </>
  );

}

export default App
