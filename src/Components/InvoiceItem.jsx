import React from 'react';
import EditableField from './EditableField';


const InvoiceItem = (props) => {
   const {onItemizedItemEdit,onRowAdd,onRowDel,currency,items} = props;
    
    const itemTable = items.map((item)=>(
      <ItemRow
         key = {item.id}
         item = {item}
         onDelEvent = {onRowDel}
         onItemizedItemEdit = {onItemizedItemEdit}
         currency = {currency}
       />
    ))
     
    return (
         
        <table class="border-collapse w-full mt-4  bg-slate-100">
        <thead>
          <tr className="border border-slate-300">
            <th className=" border border-slate-300">Item</th>
            <th className=" border border-slate-300">Description</th>
            <th className=" border border-slate-300">Quentity</th>
            <th className=" border border-slate-300">Unite Price</th>
            <th className=" border border-slate-300">Discount</th>
            <th className=" border border-slate-300">CalculateTax</th>
            <th className=" border border-slate-300">Tax rate</th>
            <th className=" border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
         {itemTable}
         
          {/* <tr className="">
            <td class="">
              <input
                type="text"
                name="attributes"
                className=" pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
              />
            </td>
            <td class="">
              <input
                type="text"
                name="attributes"
                className=" pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-72	 border border-slate-300"
              />
            </td>
            <td class="">
              <input
                type="number"
                name="attributes"
                className=" pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit border border-slate-300"
              />
            </td>
            <td class="">
              <input
                type="number"
                name="attributes"
                className=" pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-20	 border border-slate-300"
                placeholder="0.0"
              />
            </td>
            <td class="">
              <input
                name="attributes"
                className=" pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-20	 border border-slate-300"
                type="number"
              />
            </td>
            <td>
              <select class="ui dropdown pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300">
                <option value="$">USD (United States Dollar)</option>
                <option value="£">GBP (British Pound Sterling)</option>
                <option value="¥">JPY (Japanese Yen)</option>
                <option value="$">CAD (Canadian Dollar)</option>
                <option value="$">AUD (Australian Dollar)</option>
                <option value="$">SGD (Singapore Dollar)</option>
                <option value="¥">CNY (Chinese Renminbi)</option>
                <option value="₿">BTC (Bitcoin)</option>
              </select>
            </td>
            <td class="">
              <input
                type="number"
                name="attributes"
                className=" pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-48	 border border-slate-300"
                placeholder="0.0"
              />
            </td>
            <td className="">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-white bg-red-400 rounded ml-2 mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{height: "33px" ,width: "33px", padding: "7.5px"}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </td>
          </tr> */}
        </tbody>
      </table>
            
    );
};

const ItemRow = (props)=>{
  const onDelEvent = ()=>{
    props.onDelEvent(props.item);
  };
  return(
     <tr className="">
            <td className="">
              <input
                type="text"
                name="itemName"
                placeholder = "Item name"
                value = {props.item.itemName}
                id = {props.item.itemId}
                className="pt-2 mb-4 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
                onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
              />   
            </td>
            <td className=" ">
              {/* <EditableField 
                onItemizedItemEdit={(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
                cellData={{
            type: "text",
            name: "itemDescription",
            placeholder: "Item description",
            value: props.item.itemDescription,
            id: props.item.itemId,
          }}
              /> */}
              <input
                type="text"
                name="itemDescription"
                placeholder = "Item description"
                value = {props.item.itemDescription}
                id = {props.item.itemId}
                className="pt-2 mb-4 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
                onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
              />   
            </td>
            <td className="">
            {/* <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            type: "number",
            name: "itemQuantity",
            min: 1,
            step: "1",
            value: props.item.itemQuantity,
            id: props.item.itemId,
          }}
        /> */}
        <input
                type="number"
                name="itemQuantity"
                placeholder = "Item name"
                min = "1"
                step =  "1"
                value = {props.item.itemQuantity}
                id = {props.item.itemId}
                className="pt-2 mb-4 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
                onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
              />   
            </td>
            <td className=" ">
            {/* <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            leading: props.currency,
            type: "number",
            name: "itemPrice",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: props.item.itemPrice,
            id: props.item.itemId,
          }}
        /> */}
        <input
                type="number"
                leading = {props.currency}
                name="itemPrice"
                min = "1"
            step = "0.01"
            presicion= "2"
                value = {props.item.itemPrice}
                id = {props.item.itemId}
                className="pt-2 mb-4 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
                onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
              />   
            </td>
            <td className="">
              {/* <EditableField
                  onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }   
                                         cellData={{
                  name:"discountRate",
                  type:"number",
                   value : props.item.discountRate,
                   id: props.item.itemId,
                   placeholder : "0.0",
                   min : "0.00",
                   step : "0.01",
                   max : "100.00"
                  }}
               /> */}
               <input
                type="number"
                name="discountRate"
                min = "0.00"
                step={0.01}
                max = {100.00}
                value = {props.item.discountRate}
                placeholder = "0.0"
                id = {props.item.itemId}
                className="pt-2 mb-4 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
                onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
              />   
            </td>
            <td className=''>
              <select class="ui dropdown mb-4 pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300">
                <option value="$">USD (United States Dollar)</option>
                <option value="£">GBP (British Pound Sterling)</option>
                <option value="¥">JPY (Japanese Yen)</option>
                <option value="$">CAD (Canadian Dollar)</option>
                <option value="$">AUD (Australian Dollar)</option>
                <option value="$">SGD (Singapore Dollar)</option>
                <option value="¥">CNY (Chinese Renminbi)</option>
                <option value="₿">BTC (Bitcoin)</option>
              </select>
              {/* <select className='pt-2 mb-4 border border-slate-300  pb-2' onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                  
                }
                value = {props.item.CalculateTax}
                id = {props.item.itemId}
                 >
                  <option value="Exclusive">Tax Exclusive</option>
                  <option value="Inclusive">Tax Inclusive</option>
              </select> */}
            </td>
            <td class="">
            {/* <EditableField
onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }                
            cellData={{
                  name:"taxRate",
                  type:"number",
                   value : props.item.taxrate,
                   id: props.item.itemId,
                   placeholder : "0.0",
                   min : "0.00",
                   step : "0.01",
                   max : "100.00"
                  }}
               /> */}
               <input
                type="number"
                name="taxRate"
                min = "0.00"
                placeholder = "0.0"
                step={0.01}
                max = {100.00}
                value = {props.item.taxrate}
                id = {props.item.itemId}
                className="pt-2 pl-2 mb-4 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300"
                onChange  = {(evt)=>
                  props.onItemizedItemEdit(evt, props.item.itemId)
                }
              /> 
            </td>
            <td className="  focus:border-orange-400 outline-none  	 ">
            <svg onClick={onDelEvent} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-white ml-2 mb-4 bg-red-400 rounded ml- mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{height: "33px" ,width: "33px", padding: "7.5px"}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </td>
          </tr> 
  )
}

export default InvoiceItem;