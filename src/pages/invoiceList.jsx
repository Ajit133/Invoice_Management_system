import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCreditCard,
  faMoneyBill,
  faEllipsisVertical,
  faEye,
  faDownload,
  faPencil,
  faTrashCan
  
} from "@fortawesome/free-solid-svg-icons";
import InvoiceModal from '../Components/InvoiceModal';
import { deleteInvoice} from "../redux/invoicesSlice";
import { useNavigate } from "react-router-dom";
import { clearBulk, updateBulk } from "../redux/updateSlice";
import {useInvoiceListData} from "../redux/hooks"


const InvoiceList = () => {
  const { invoiceList, getOneInvoice } = useInvoiceListData();
  const isListEmpty = invoiceList.length === 0;
  const [copyId, setCopyId] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [editMode, setEditMode] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [bulk, setBulk] = useState([]);

  useEffect(() => {
    dispatch(clearBulk());

    if (selectAll) {
      setBulk([...invoiceList]);
    } else {
      setBulk([]);
    }
  }, [selectAll]);

    return (
        <div>
            <div style={{width:"830px"}}  className="border mx-auto mt-64  p-3 col-span-6 rounded-md ">
            <div className="flex border-b-1 border-slate-300  justify-between">
              <div class="col mb-3 mb-xl-0">
                <h5 className="text-xl	 font-bold">Invoice List</h5>
              </div>
              <div class="">
                <div className="">
                  <ul className="flex">
                    <li className="bg-emerald-500 text-xs   text-white rounded">
                     <Link to={"/"}>
                <button
              type="button"
              href="#"
              className="text-white hover:bg-cyan-800  bg-cyan-600	 pt-3 pb-3 rounded-md  w-28 inline-block text-center">
              Create Invoice
                </button>
                 </Link>
                    </li>
                    <li className="  text-xs   text-white rounded">
                     
                <button
              type="button"
              href="#"
              className="text-white ml-4 hover:bg-cyan-800  bg-cyan-600	 pt-3 pb-3 rounded-md  w-28 inline-block text-center">
              Edit
                </button>
                 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <table class="table mt-5 w-full">
              <thead>
                <tr className=" border-slate-300 border-b-2">
                  <th class="p-0 mw-200">Invoice No.</th>
                  <th class="p-0 mw-200">Due Date</th>
                  <th class="p-0 mw-200">Total Amt.</th>
                  <th class="p-0 mw-200">Actions</th>
                </tr>
              </thead>
              <tbody>
              {invoiceList.map((invoice) => (
                    <InvoiceRow
                      key={invoice.id}
                      invoice={invoice}
                      navigate={navigate}
                      bulk={bulk}
                      setBulk={setBulk}
                      editMode={editMode}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

const InvoiceRow = ({ invoice, navigate, bulk, setBulk, editMode })=>{

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
  
    const handleDeleteClick = (invoiceId) => {
      dispatch(deleteInvoice(invoiceId));
    };
  
    const handleEditClick = () => {
      navigate(`/edit/${invoice.id}`);
    };
  
    const handleBulkEdit = (invoice) => {
      setBulk((prevBulk) => {
        if (prevBulk.includes(invoice)) {
          return prevBulk.filter((el) => el !== invoice);
        } else {
          return [...prevBulk, invoice];
        }
      });
    };
  
    const openModal = (event) => {
      event.preventDefault();
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    return(
        <tr className="border-b-2  border-slate-300 ">
                  <td className="align-middle p-3 ">
                    <div class="ml-20">
                    {invoice.invoiceNumber}
                    </div>
                  </td>
                  <td  className="">
                   <span className='ml-20'>{invoice.dateOfIssue}</span> 
                  </td>
                  <td >
                  <span className='ml-20'>  {invoice.currency}
                  {invoice.total}</span>
                   
                  </td>
                 
                  <td class="text-right align-middle pr-0">

                  <button onClick={handleEditClick} class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                    <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faPencil}
                      />

                    </button>
                  <button onClick={() => handleDeleteClick(invoice.id)} class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                    <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faTrashCan}
                      />

                    </button>
                    <button
                      onClick={openModal}
                      className="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </button>  
                  </td>
                  <InvoiceModal
        showModal={isOpen}
        closeModal={closeModal}
        info={{
          isOpen,
          id: invoice.id,
          currency: invoice.currency,
          currentDate: invoice.currentDate,
          invoiceNumber: invoice.invoiceNumber,
          dateOfIssue: invoice.dateOfIssue,
          billTo: invoice.billTo,
          billToEmail: invoice.billToEmail,
          billToAddress: invoice.billToAddress,
          billFrom: invoice.billFrom,
          billFromEmail: invoice.billFromEmail,
          billFromAddress: invoice.billFromAddress,
          notes: invoice.notes,
          total: invoice.total,
          subTotal: invoice.subTotal,
          taxRate: invoice.taxRate,
          taxAmount: invoice.taxAmount,
          discountRate: invoice.discountRate,
          discountAmount: invoice.discountAmount,
        }}
        items={invoice.items}
        currency={invoice.currency}
        subTotal={invoice.subTotal}
        taxAmount={invoice.taxAmount}
        discountAmount={invoice.discountAmount}
        total={invoice.total}
      />

  </tr>
    )
}



export default InvoiceList;