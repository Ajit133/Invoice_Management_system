// import Counter from "./components/Counter";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import InvoiceForm from "./Components/InvoiceForm";
// import InvoiceModal from "./Components/InvoiceModal";
import InvoiceList from "./pages/invoiceList";
import Invoice from "./pages/invoice";
function App() {   
  const Layout = ()=>{
    return(
    <div  className="h-full bg-slate-300 p-4 app  ">     
    <div className="flex h-full">
         <div className="w-64 py-1.5 pl-5 h-full pr-5  ">
              <h1 className="bg-slate-100 block text-black w-full">Dashboard</h1>
         </div>
         <div className="py-1.5 bg-slate-100 rounded pl-5 pr-5">
           <Outlet />
         </div>
    </div>
  </div>)
  }
  
  const router = createBrowserRouter([
    {
      element : <Layout />,
      children :[
        {path : "/",
          element : <Invoice />
        }, {
          path : "/edit/:id",
          element : <Invoice />,
         },
      ]
    },
     {
      path : "/create",
      element : <InvoiceList />,
     },
     {
      path : "/create/:id",
      element : <Invoice />,
     },
    
  ])
  return (
    <RouterProvider router={router} />
  )
}


export default App;





