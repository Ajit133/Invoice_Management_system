import React,{useState,useEffect} from "react";
import InvoiceItem from "./InvoiceItem";
import { useDispatch } from "react-redux";
import { addInvoice, updateInvoice } from "../redux/invoicesSlice"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import generateRandomId from "../utils/generateRandomid";
import {useInvoiceListData} from "../redux/hooks"
import InvoiceModal from "./InvoiceModal";
const InvoiceForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isCopy = location.pathname.includes("create");
  const isEdit = location.pathname.includes("edit");
  const [isOpen, setIsOpen] = useState(false);
  const [open,setOpen] = useState(false);
  const [taxMethod, setTaxMethod] = useState('exclusive');
  const [copyId, setCopyId] = useState("");
  const { getOneInvoice, listSize } = useInvoiceListData();
  const [formData, setFormData] = useState(
    isEdit
      ? getOneInvoice(params.id)
      : isCopy && params.id
      ? {
          ...getOneInvoice(params.id),
          id: generateRandomId(),
          invoiceNumber: listSize + 1,
        }
      : {
          id: generateRandomId(),
          currentDate: new Date().toLocaleDateString(),
          invoiceNumber: listSize + 1,
          dateOfIssue: "",
          billTo: "",
          billToEmail: "",
          billToAddress: "",
          billFrom: "",
          billFromEmail: "",
          billFromAddress: "",
          notes: "",
          total: "0.00",
          subTotal: "0.00",
          taxRate: "",
          taxAmount: "0.00",
          discountRate: "",
          discountAmount: "0.00",
          currency: "$",
          
          items: [
            {
              itemId: 0,
              itemName: "",
              itemDescription: "",
              itemPrice: "1.00",
              itemQuantity: 1,
              discountRate: "",
              taxRate: "",
              CalculateTax : "",
            },
          ],
        }
  );

  useEffect(() => {
    handleCalculateTotal();
  }, []);


  const handleRowDel = (itemToDelete) => {
    const updatedItems = formData.items.filter(
      (item) => item.itemId !== itemToDelete.itemId
    );
    setFormData({ ...formData, items: updatedItems });
    handleCalculateTotal();
  };

  const handleAddEvent = () => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newItem = {
      itemId: id,
      itemName: "",
      itemDescription: "",
      itemPrice: "1.00",
      itemQuantity: 1,
      discountRate: "",
      taxRate: "",
      CalculateTax:"",

      
    };
    setFormData({
      ...formData,
      items: [...formData.items, newItem],
    });
    handleCalculateTotal();
  };

const handleCalculateTotal = () => {
  setFormData((prevFormData) => {
    let subTotal = 0;
    let totalDiscount = 0;
    let totalTax = 0;

    prevFormData.items.forEach((item) => {
      let itemTotal = parseFloat(item.itemPrice) * parseInt(item.itemQuantity);
      let itemDiscount = itemTotal * (parseFloat(item.discountRate) / 100 || 0);
      let itemTax = (itemTotal - itemDiscount) * (parseFloat(item.taxRate) / 100 || 0);
      subTotal += itemTotal;
      totalDiscount += itemDiscount;
      totalTax += itemTax;
    });

    const total = (subTotal - totalDiscount + totalTax).toFixed(2);

    return {
      ...prevFormData,
      subTotal: subTotal.toFixed(2),
      discountAmount: totalDiscount.toFixed(2),
      taxAmount: totalTax.toFixed(2),
      total,
    };
  });
};

  const onItemizedItemEdit = (evt, id) => {
    const updatedItems = formData.items.map((oldItem) => {
      if (oldItem.itemId === id) {
        return { ...oldItem, [evt.target.name]: evt.target.value };
      }
      return oldItem;
    });

    setFormData({ ...formData, items: updatedItems });
    handleCalculateTotal();
  };

  const editField = (name, value) => {
    setFormData({ ...formData, [name]: value });
    handleCalculateTotal();
  };

  const onCurrencyChange = (selectedOption) => {
    setFormData({ ...formData, currency: selectedOption.currency });
  };

  const openModal = (event) => {
    event.preventDefault();
    handleCalculateTotal();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddInvoice = () => {
    if (isEdit) {
      dispatch(updateInvoice({ id: params.id, updatedInvoice: formData }));
      alert("Invoice updated successfuly 🥳");
    } else if (isCopy) {
      dispatch(addInvoice({ id: generateRandomId(), ...formData }));
      alert("Invoice added successfuly 🥳");
    } else {
      dispatch(addInvoice(formData));
      alert("Invoice added successfuly 🥳");
    }
    navigate("/");
  };

  const handleCopyInvoice = () => {
    const recievedInvoice = getOneInvoice(copyId);
    if (recievedInvoice) {
      setFormData({
        ...recievedInvoice,
        id: formData.id,
        invoiceNumber: formData.invoiceNumber,
      });
    } else {
      alert("Invoice does not exists!!!!!");
    }
  };

  return (
    <div className="">
      <form onSubmit={openModal}>
        <div className="mt-5">
          <div className="grid  grid-cols-5 gap-3">
            <div>
              <label className="block">To</label>
              <input
                type="text"
                name = "billTo"
                value={formData.billTo}
                onChange={(e) => editField(e.target.name, e.target.value)}
                autoComplete="name"
                required
                className="mt-2 focus:border-orange-400 pt-2 pl-2 outline-none rounded pb-2 w-48	 border border-slate-300"   
              />
            </div>
            <div>
              <label className="block">Today</label>
              {/* <input
                placeholder="Current Date"
                name="orginalPrice"
                className="mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300"
                type="date"
              /> */}
              <div>
              <p  className="mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	bg-slate-300 text-center border border-slate-300">{formData.currentDate}</p>
              </div>
              
            </div>
            <div>
              <label className="block">Due Date</label>
              <input
                type="date"
                name="dateOfIssue"
                value={formData.dateOfIssue}
                onChange={(e) => editField(e.target.name, e.target.value)}
                required
                className="mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300"
              />
            </div>
            <div>
              <label className="block">Invoice Number</label>
              <input
                type="number"
                placeholder="1"
                value={formData.invoiceNumber}
                name="invoiceNumber"
                onChange={(e) => editField(e.target.name, e.target.value)}
                required
                className="mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300"
              />
            </div>
            <div>
              <label className="block">Referance</label>
              <input
                type="text"
                name="billToAddress"
                onChange={(e) => editField(e.target.name, e.target.value)}
                required
                className="mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300"
                
              />
            </div>
          </div>

          <div className="flex mt-3 justify-between">
           
            <div>
              <label className="block">Tax Method</label>
              <select value={taxMethod} onChange={(e) => setTaxMethod(e.target.value)} class="ui dropdown rounded mt-2 pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 	 border border-slate-300">
                    <option  value="exclusive">Tax Exclusive</option>
                    <option value="inclusive">Tax Inclusive</option>
                  </select>
            </div>
          </div>

          {/* Table Design */}
          <InvoiceItem
              onItemizedItemEdit={onItemizedItemEdit}
              onRowAdd={handleAddEvent}
              onRowDel={handleRowDel}
              currency={formData.currency}
              items={formData.items}
           />

          <div className="mt-10 flex justify-between gap-2">
            <button
              href="#"
              
              className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">
              Add Item
            </button>
            <Link to={"/create"}>
            <button
              type="button"
              href="#"
              onClick={handleAddInvoice}
              className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">
              {isEdit?"Update Invoice":"Add Invoice"}
                
            </button>
            </Link>
            
          </div>
        </div>
            <div className="mt-5 flex flex-row-reverse">
                 <div className="grid">
                 <div className="flex justify-between  gap-56 "><span className="font-bold">Subtotal : </span><span>{formData.currency}
                         {formData.subTotal}
                         
                 </span></div>
                 <div className="flex justify-between gap-56 "><span className="font-bold">Discount : </span><span>
                    <span className="small">
                      {/* ({formData.discountRate || 0}%) */}
                    </span>
                    {formData.currency}
                    {formData.discountAmount || 0}
                  </span></div>
                 <div className="flex justify-between gap-56 "><span className="font-bold">Tax: </span><span>
                    {/* <span className="small">({formData.taxRate || 0}%)</span> */}
                    {formData.currency}
                    {formData.taxAmount || 0}
                  </span></div>
                 <div className="border mt-3 border-white-500 "></div>
                 <div className="flex justify-between gap-56 mt-2 "><span className="font-bold text-lg">Total: </span><span className="font-bold text-lg">{formData.currency}
                 {formData.total || 0}</span></div>
                 </div>
            </div>
            <div className="border mt-3 border-white-500 "></div>
            <InvoiceModal
              showModal={isOpen}
              closeModal={closeModal}
              info={{
                isOpen,
                id: formData.id,
                currency: formData.currency,
                currentDate: formData.currentDate,
                invoiceNumber: formData.invoiceNumber,
                dateOfIssue: formData.dateOfIssue,
                billTo: formData.billTo,
                billToEmail: formData.billToEmail,
                billToAddress: formData.billToAddress,
                billFrom: formData.billFrom,
                billFromEmail: formData.billFromEmail,
                billFromAddress: formData.billFromAddress,
                notes: formData.notes,
                total: formData.total,
                subTotal: formData.subTotal,
                taxRate: formData.taxRate,
                taxAmount: formData.taxAmount,
                discountRate: formData.discountRate,
                discountAmount: formData.discountAmount,
              }}
              items={formData.items}
              currency={formData.currency}
              subTotal={formData.subTotal}
              taxAmount={formData.taxAmount}
              discountAmount={formData.discountAmount}
              total={formData.total}
            />
      </form>
    </div>
  );
};

export default InvoiceForm;
