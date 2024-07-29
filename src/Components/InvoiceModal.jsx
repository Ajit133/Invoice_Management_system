import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCreditCard,
  faMoneyBill,
  faEllipsisVertical,
  faEye,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Modal from 'react-modal';



const GenerateInvoice = () => {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792],
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice-001.pdf");
  });
};


const InvoiceModal = (props) => {
    return (
        <div>
            <Modal
        show={props.showModal}
        onHide={props.closeModal}
        size="lg"
        centered
      >
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
                <tr className="border-b-2  border-slate-300 ">
                  <td className="align-middle p-3 ">
                    <div class="ml-20">
                         1
                    </div>
                  </td>
                  <td  className="">
                   <span className='ml-20'>7/15/2024</span> 
                  </td>
                  <td >
                  <span className='ml-20'> $2000</span>
                   
                  </td>
                 
                  <td class="text-right align-middle pr-0">
                    <a
                      href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=42af63ba-9173-11ee-b2ff-2e3da68cc847"
                      className="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </a>
                    <a
                      href="https://demo.bastisapp.com/backoffice/preprint/pdf?order_uuid=42af63ba-9173-11ee-b2ff-2e3da68cc847"
                      target="_blank"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faDownload}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </Modal>
        </div>
    );
};

export default InvoiceModal;